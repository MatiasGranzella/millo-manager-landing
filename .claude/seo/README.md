# Setup de las herramientas de SEO / deploy

Qué quedó instalado y qué falta que hagas vos (una sola vez).

## Servidores MCP

| Server | Alcance | Estado | Config |
|---|---|---|---|
| `playwright` | usuario | ✅ listo | `npx -y @playwright/mcp@latest` |
| `gsc` (Search Console) | usuario | ⚠️ falta credencial | `npx -y mcp-gsc@latest` |
| `vercel` | proyecto (`.mcp.json`) | ⚠️ falta OAuth | `https://mcp.vercel.com` |

`playwright` y `gsc` van en scope **usuario** (`~/.claude.json`): sirven en
cualquier repo y el path de la credencial es de esta máquina. `vercel` va en
scope **proyecto** (`.mcp.json`, versionado): no tiene secretos, la auth es
OAuth por usuario.

---

## Google Search Console — lo que falta

El MCP ya apunta a `~/.config/gsc/credentials.json` (el directorio ya existe).
Falta generar ese archivo:

1. [Google Cloud Console](https://console.cloud.google.com/) → creá un proyecto
   (o usá uno existente).
2. **APIs y servicios → Biblioteca** → buscá *Google Search Console API* →
   **Habilitar**.
3. **Pantalla de consentimiento de OAuth** → tipo *External*, poné nombre de la
   app y tu mail, y agregá el scope `https://www.googleapis.com/auth/webmasters`.
4. **Credenciales → Crear credenciales → ID de cliente de OAuth** → tipo
   **Aplicación de escritorio** → descargá el JSON.
5. Guardalo como `~/.config/gsc/credentials.json`.
6. Autorizá una vez (abre el browser y deja guardado el refresh token):

   ```bash
   GOOGLE_GSC_CREDENTIALS_PATH=~/.config/gsc/credentials.json npx -y mcp-gsc setup
   ```

7. Reiniciá Claude Code y probá pidiendo `list_properties`.

**Además**, el dominio tiene que estar verificado en Search Console con la misma
cuenta de Google. Si `millomanager.com.ar` todavía no está dado de alta:
[Search Console](https://search.google.com/search-console) → agregar propiedad →
**Dominio** → `millomanager.com.ar` → verificar con el registro TXT en DNS.
La propiedad de tipo *Dominio* cubre `www`, apex, http y https de una;
conviene sobre la de prefijo de URL. Después, subí el sitemap:
`https://www.millomanager.com.ar/sitemap.xml`.

La verificación del dominio y el alta de la propiedad **no se pueden hacer por
API** — son manuales, en la consola web.

---

## Vercel

El server está declarado en `.mcp.json` pero arranca en *pending approval*
porque es un MCP de proyecto. Al abrir Claude Code te va a pedir aprobarlo, y
después hacer login OAuth con tu cuenta de Vercel (`/mcp` → `vercel` →
autenticar).

---

## Pull requests

`gh` (GitHub CLI) quedó instalado vía Homebrew. Falta loguearte una vez:

```bash
gh auth login
```

Elegí GitHub.com → SSH (el remote de este repo es SSH) → autenticar por browser.

### Regla dura: nunca se pushea a `develop`

A `develop` (y a `main`/`master`) se entra **solo por pull request**. Está
forzado por un hook, no depende de que alguien se acuerde:

- Hook: `.claude/hooks/block-protected-push.py`
- Registrado en: `.claude/settings.json` (`PreToolUse` sobre `Bash`)

Bloquea el push explícito (`git push origin develop`, `HEAD:develop`,
`--delete`, `--all`) y también el implícito (`git push` estando parado en
`develop`). El flujo válido es siempre:

```bash
git switch -c feat/lo-que-sea
git push -u origin feat/lo-que-sea
gh pr create --base develop
```

Para endurecerlo del lado del servidor —y que aplique también fuera de Claude
Code— conviene activar una *branch protection rule* sobre `develop` en GitHub.
Eso requiere permisos de admin del repo y se hace desde la web.

---

## El ciclo de SEO

La skill `seo-iterar` (`.claude/skills/seo-iterar/SKILL.md`) usa estas tres
herramientas juntas: mide en Search Console, verifica con Playwright, implementa
en una rama y abre PR. Lleva su registro en `bitacora.md`, en esta misma
carpeta, para poder medir en la corrida siguiente si el cambio anterior sirvió.

Invocala con `/seo-iterar` o pidiendo "revisá el SEO".
