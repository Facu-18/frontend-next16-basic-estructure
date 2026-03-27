import Link from "next/link";

import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.34em] text-orange-300">Acceso al sistema</p>
          <h1 className="font-display text-5xl leading-none text-orange-50 sm:text-6xl">
            Login mock para la plataforma interna de Pulqui
          </h1>
          <p className="max-w-2xl text-base leading-8 text-neutral-300">
            Pantalla de acceso coherente con la marca, lista para sumar autenticacion real mas adelante sin cambiar la experiencia general del frontend.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">Modulos</p>
              <p className="mt-3 text-lg text-orange-50">Stock, mesas y comandas</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">Estado</p>
              <p className="mt-3 text-lg text-orange-50">Frontend demo</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">Proximo paso</p>
              <p className="mt-3 text-lg text-orange-50">Integracion real</p>
            </div>
          </div>
          <Link href="/" className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-neutral-100 transition hover:bg-white/10">
            Volver a la landing publica
          </Link>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-neutral-950/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="mb-8 space-y-3">
            <p className="font-display text-3xl uppercase tracking-[0.16em] text-orange-200">Pulqui</p>
            <h2 className="font-display text-4xl text-orange-50">Iniciar sesion</h2>
            <p className="text-sm leading-7 text-neutral-300">
              Acceso demo para el sistema de gestion interna del espacio.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
