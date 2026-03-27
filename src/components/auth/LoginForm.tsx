"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export function LoginForm() {
  const router = useRouter();
  const [remember, setRemember] = useState(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-neutral-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue="demo@pulqui.cultura"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-50 outline-none transition placeholder:text-neutral-500 focus:border-orange-300/45"
          placeholder="equipo@pulqui.cultura"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-neutral-200">
          Contrasena
        </label>
        <input
          id="password"
          name="password"
          type="password"
          defaultValue="pulqui-demo"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-neutral-50 outline-none transition placeholder:text-neutral-500 focus:border-orange-300/45"
          placeholder="Ingresa tu clave"
        />
      </div>

      <label className="flex items-center gap-3 text-sm text-neutral-300">
        <input
          type="checkbox"
          checked={remember}
          onChange={() => setRemember((value) => !value)}
          className="h-4 w-4 rounded border-white/20 bg-transparent text-orange-500 focus:ring-orange-400"
        />
        Recordarme en este dispositivo
      </label>

      <button
        type="submit"
        className="w-full rounded-2xl border border-orange-300/40 bg-orange-500 px-5 py-3 font-semibold text-neutral-950 transition hover:bg-orange-400"
      >
        Ingresar
      </button>

      <p className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm leading-7 text-neutral-300">
        Demo frontend: este acceso no valida credenciales reales y redirige de forma mock al dashboard.
      </p>
    </form>
  );
}
