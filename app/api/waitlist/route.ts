import { NextResponse } from "next/server";

/**
 * Alta en la waitlist. Llama al RPC `join_waitlist` (SECURITY DEFINER) de la base
 * del juego vía PostgREST con la anon key — la landing no tiene base propia.
 *
 * Env vars (Vercel / .env.local):
 *   SUPABASE_URL      — https://<ref>.supabase.co (local: http://127.0.0.1:54521)
 *   SUPABASE_ANON_KEY — key pública (anon / sb_publishable_...)
 *
 * La respuesta nunca revela si el email ya estaba anotado (el RPC es idempotente
 * y acá devolvemos el mismo ok en ambos casos).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "email_invalido" }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("waitlist: faltan SUPABASE_URL / SUPABASE_ANON_KEY");
    return NextResponse.json({ error: "config" }, { status: 500 });
  }

  const res = await fetch(`${url}/rest/v1/rpc/join_waitlist`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p_email: email }),
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) {
    console.error("waitlist: join_waitlist falló", res?.status, await res?.text());
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
