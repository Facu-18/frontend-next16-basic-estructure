import type { Convocatoria } from "@/types";

export const convocatorias: Convocatoria[] = [
  {
    slug: "artistas",
    title: "Convocatoria a artistas",
    description:
      "Abrimos agenda para musica, artes visuales, performance y cruces experimentales con identidad propia.",
    audience: "Bandas, solistas, artistas visuales y colectivos escenicos",
    deadline: "Hasta el 20 de abril",
    image: "/mock/convocatoria-artistas.svg",
    details: [
      "Buscamos proyectos con potencia escenica y vocacion de cruce entre disciplinas.",
      "Se valoran estrenos, procesos abiertos y formatos hibridos para sala o patio.",
      "El formulario final sigue mockeado, pero la estructura ya queda lista para una integracion real.",
    ],
  },
  {
    slug: "formacion",
    title: "Convocatoria a formacion",
    description:
      "Clinicas, laboratorios y talleres pensados para compartir saberes en clave colaborativa.",
    audience: "Docentes, talleristas, mediadores y equipos pedagogicos",
    deadline: "Hasta el 27 de abril",
    image: "/mock/convocatoria-formacion.svg",
    details: [
      "Se reciben propuestas de un encuentro, ciclos cortos o laboratorios intensivos.",
      "Priorizamos contenidos accesibles, comunitarios y conectados con la escena local.",
      "La pagina de detalle funciona como mock del futuro flujo de postulacion.",
    ],
  },
  {
    slug: "espacios",
    title: "Convocatoria para uso de espacios",
    description:
      "Disponibilidad para ensayos, activaciones culturales, montajes y eventos especiales.",
    audience: "Productoras, colectivos culturales, sellos y organizaciones",
    deadline: "Disponible todo el mes",
    image: "/mock/convocatoria-espacios.svg",
    details: [
      "El multiespacio puede adaptarse a formatos intimos, feriales o nocturnos.",
      "Hay opciones para activaciones diurnas, presentaciones y encuentros cerrados.",
      "Todo el flujo esta preparado para sumar validaciones y backend en una proxima iteracion.",
    ],
  },
  {
    slug: "ferias",
    title: "Convocatoria a ferias",
    description:
      "Buscamos proyectos editoriales, indumentaria, diseño y oficios para proximas fechas.",
    audience: "Emprendimientos, marcas independientes y feriantes culturales",
    deadline: "Cierre el 30 de abril",
    image: "/mock/convocatoria-ferias.svg",
    details: [
      "Queremos una feria diversa, curada y con fuerte presencia de produccion local.",
      "Se pueden presentar stands individuales o propuestas colaborativas.",
      "El CTA de postular conserva una experiencia demo claramente comunicada al usuario.",
    ],
  },
];
