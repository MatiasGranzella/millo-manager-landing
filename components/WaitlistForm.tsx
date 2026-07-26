"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setMessage("Ingresá un email válido.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: value }),
    }).catch(() => null);

    if (!res || !res.ok) {
      setStatus("error");
      setMessage("No pudimos anotarte. Probá de nuevo en un rato.");
      return;
    }

    setStatus("success");
    setMessage("¡Listo! Te avisamos apenas abra Millo.");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-[440px] items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(47,169,104,0.4)] bg-[rgba(47,169,104,0.12)] px-5 py-4 text-[15px] font-semibold text-[#3fcf86]">
        <CheckCircle2 size={20} />
        {message}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-[440px]"
    >
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <input
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          aria-label="Tu email"
          aria-invalid={status === "error"}
          // `flex-1` solo en la fila horizontal: en mobile el contenedor es
          // `flex-col` y ahí el flex-basis 0% aplica al alto, le gana al
          // h-[52px] y el campo queda achatado contra el botón.
          className="h-[52px] rounded-[13px] border border-white/15 bg-white/[0.06] px-4 text-[15px] text-white outline-none placeholder:text-[#7C828D] focus:border-river sm:flex-1"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-[52px] cursor-pointer items-center justify-center gap-[9px] rounded-[13px] bg-river px-6 text-base font-bold whitespace-nowrap text-white shadow-[0_10px_26px_rgba(225,50,42,0.4)] transition-colors hover:bg-river-bright disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <Loader2 size={19} className="animate-spin" />
          ) : (
            <ArrowRight size={19} />
          )}
          Sumarme
        </button>
      </div>
      <p
        className="mt-2.5 h-4 text-left text-[13px] text-[#ED5249]"
        role="alert"
        aria-live="polite"
      >
        {status === "error" ? message : ""}
      </p>
    </form>
  );
}
