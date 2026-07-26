#!/usr/bin/env python3
"""
PreToolUse hook (Bash): impide pushear a las ramas protegidas.

Regla del proyecto: a `develop` se llega SOLO por pull request, nunca por push
directo. El hook cubre las dos formas de romperla:

  1. push explícito al ref protegido    -> git push origin develop
                                           git push origin HEAD:develop
                                           git push --delete origin develop
  2. push implícito estando parado ahí  -> git checkout develop && git push

Salir con código 2 le devuelve el stderr a Claude como feedback y cancela la
llamada a Bash. Cualquier otro problema (JSON raro, git que no responde) sale 0
para no trabar el trabajo normal: esto es una red de seguridad, no un linter.
"""

import json
import re
import shlex
import subprocess
import sys

PROTECTED = {"develop", "main", "master"}

# Flags de `git push` que consumen el token siguiente (no son refspecs).
# Ojo: `--force-with-lease` NO va acá — su valor va pegado con `=`, así que
# listarlo se comería el refspec siguiente y dejaría pasar un push a develop.
FLAGS_WITH_VALUE = {"-o", "--push-option", "--repo", "--receive-pack", "--exec"}


def deny(msg: str) -> None:
    print(msg, file=sys.stderr)
    sys.exit(2)


def current_branch() -> str:
    try:
        out = subprocess.run(
            ["git", "rev-parse", "--abbrev-ref", "HEAD"],
            capture_output=True, text=True, timeout=5,
        )
        return out.stdout.strip()
    except Exception:
        return ""


def main() -> None:
    try:
        payload = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    command = payload.get("tool_input", {}).get("command", "")
    if not re.search(r"\bgit\b[^|;&]*\bpush\b", command):
        sys.exit(0)

    try:
        tokens = shlex.split(command)
    except ValueError:
        # Comillas sin cerrar: no puedo razonar sobre el comando, mejor frenar.
        deny("No pude parsear el comando de git push. Reescribilo sin comillas raras.")

    if "push" not in tokens:
        sys.exit(0)
    args = tokens[tokens.index("push") + 1:]

    # `--all` / `--mirror` empujan todo, develop incluido.
    for blanket in ("--all", "--mirror"):
        if blanket in args:
            deny(
                f"Bloqueado: `git push {blanket}` incluiría una rama protegida "
                f"({', '.join(sorted(PROTECTED))}). Pusheá la rama por nombre."
            )

    # Separar refspecs de flags y del nombre del remoto.
    refspecs, skip_next, seen_remote = [], False, False
    for tok in args:
        if skip_next:
            skip_next = False
            continue
        if tok.startswith("-"):
            if tok in FLAGS_WITH_VALUE:
                skip_next = True
            continue
        if not seen_remote:
            seen_remote = True  # primer posicional = remoto
            continue
        refspecs.append(tok)

    for spec in refspecs:
        dest = spec.split(":")[-1].removeprefix("refs/heads/").lstrip("+")
        # `git push origin HEAD` resuelve al nombre de la rama actual.
        if dest == "HEAD":
            dest = current_branch()
        if dest in PROTECTED:
            deny(
                f"Bloqueado: push directo a `{dest}`. En este repo a las ramas "
                f"protegidas se entra solo por pull request:\n"
                f"  git switch -c feat/lo-que-sea && git push -u origin feat/lo-que-sea\n"
                f"  gh pr create --base {dest}"
            )

    # Sin refspec, git pushea la rama actual.
    if not refspecs:
        branch = current_branch()
        if branch in PROTECTED:
            deny(
                f"Bloqueado: estás parado en `{branch}` y `git push` sin refspec "
                f"la empujaría directo. Movete a una rama de trabajo y abrí un PR:\n"
                f"  git switch -c feat/lo-que-sea"
            )

    sys.exit(0)


if __name__ == "__main__":
    main()
