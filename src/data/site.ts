import type { ContactData, NavItem } from "@/types";

export const publicNavItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Convocatorias", href: "/#convocatorias" },
  { label: "Carta", href: "/carta" },
  { label: "Contacto", href: "/#contacto" },
];

export const dashboardNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Perfil", href: "/dashboard/profile" },
  { label: "Formularios", href: "/dashboard/formularios" },
  { label: "Stock", href: "/dashboard/stock" },
  { label: "Obras", href: "/dashboard/obras" },
  { label: "Proveedores", href: "/dashboard/proveedores" },
  { label: "Comandas", href: "/dashboard/comandas" },
  { label: "Mesas", href: "/dashboard/mesas" },
  { label: "Empleados", href: "/dashboard/empleados" },
];

export const contactData: ContactData = {
  address: "Av. Colon 1845, Alberdi, Cordoba",
  email: "hola@pulqui.cultura",
  phone: "+54 351 555 0147",
  hours: "Miercoles a domingo, de 18:00 a 03:00 hs",
  instagram: "https://instagram.com/pulqui.cultura",
  youtube: "https://youtube.com/@pulquiindustria",
};

export const landingHighlights = [
  {
    kicker: "Plataforma cultural",
    title: "Marca publica con corazon de operacion real",
    description:
      "Pulqui vende escena, comunidad y nocturnidad, pero ahora tambien anticipa un sistema interno listo para crecer.",
  },
  {
    kicker: "Programacion viva",
    title: "Agenda, convocatorias y carta en una experiencia editorial",
    description:
      "La landing organiza la propuesta publica mientras deja visible el acceso a gestion para el equipo del espacio.",
  },
  {
    kicker: "Sistema interno",
    title: "Dashboard mock para operar barra, sala y equipo",
    description:
      "Stock, comandas, mesas, empleados y perfil se muestran como producto futuro, sin backend ni autenticacion real.",
  },
];
