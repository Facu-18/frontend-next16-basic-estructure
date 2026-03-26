import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <main className="max-w-4xl w-full space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl pt-10">
            Next.js 16 <span className="text-blue-600 dark:text-blue-400">&</span> Tailwind 4
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Estructura base lista para empezar a construir tu gran idea.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            title="Componentes UI" 
            description="Organizados en src/components/ui para fácil mantenimiento y reutilización." 
          />
          <Card 
            title="Next.js 16" 
            description="Aprovechando las últimas características de App Router y React 19." 
          />
          <Card 
            title="Tailwind CSS 4" 
            description="Estilización ultra rápida con el nuevo motor de Tailwind." 
          />
          <Card 
            title="TypeScript" 
            description="Tipado estricto para un desarrollo seguro y escalable." 
          />
        </section>

        <footer className="text-center pt-12 pb-10 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">
            Edita <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 font-mono text-blue-500">src/app/page.tsx</code> para comenzar.
          </p>
        </footer>
      </main>
    </div>
  );
}
