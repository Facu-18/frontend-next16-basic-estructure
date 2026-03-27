import type { EventItem } from "@/types";

export const events: EventItem[] = [
  {
    id: "pulqui-sesiones",
    title: "Pulqui Sesiones Vol. 08",
    date: "Viernes 04 Abril",
    time: "21:00 hs",
    category: "Musica",
    description:
      "Bandas emergentes, visuales inmersivas y barra encendida hasta tarde en el salon principal.",
    image: "/mock/evento-musica.svg",
    accent: "from-orange-500/35 via-fuchsia-500/25 to-transparent",
  },
  {
    id: "feria-editorial",
    title: "Feria Editorial de Alberdi",
    date: "Sabado 12 Abril",
    time: "16:00 hs",
    category: "Feria",
    description:
      "Libros, grafica y editoriales independientes tomando el patio con musica suave y cocina abierta.",
    image: "/mock/evento-feria.svg",
    accent: "from-cyan-500/35 via-blue-500/20 to-transparent",
  },
  {
    id: "taller-curaduria",
    title: "Taller de Curaduria Colectiva",
    date: "Miercoles 16 Abril",
    time: "18:30 hs",
    category: "Taller",
    description:
      "Practica intensiva sobre exhibicion, montaje y pensamiento curatorial para proyectos locales.",
    image: "/mock/evento-taller.svg",
    accent: "from-violet-500/35 via-orange-500/20 to-transparent",
  },
  {
    id: "pulqui-de-pista",
    title: "Pulqui de Pista",
    date: "Sabado 19 Abril",
    time: "23:59 hs",
    category: "Fiesta",
    description:
      "Club night con DJs invitados, luces cineticas y una pista de energia alta hasta el cierre.",
    image: "/mock/evento-fiesta.svg",
    accent: "from-pink-500/35 via-violet-500/25 to-transparent",
  },
];
