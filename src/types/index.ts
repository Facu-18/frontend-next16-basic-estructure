export type NavItem = {
  label: string;
  href: string;
};

export type EventCategory = "Musica" | "Feria" | "Taller" | "Fiesta";

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: EventCategory;
  description: string;
  image: string;
  accent: string;
};

export type Convocatoria = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  deadline: string;
  image: string;
  details: string[];
};

export type DrinkCategory = "Tragos y bebidas";

export type FoodCategory = "Comida";

export type DrinkItem = {
  id: string;
  name: string;
  category: DrinkCategory;
  description: string;
  price: string;
};

export type FoodItem = {
  id: string;
  name: string;
  category: FoodCategory;
  description: string;
  price: string;
};

export type BeerStatus = "disponible" | "agotada";

export type BeerItem = {
  id: string;
  name: string;
  style: string;
  size: string;
  price: string;
  description?: string;
  brewery: string;
  abv: string;
  status: BeerStatus;
  highlight: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  caption: string;
};

export type ContactData = {
  address: string;
  email: string;
  phone: string;
  hours: string;
  instagram: string;
  youtube: string;
};

export type DashboardMetric = {
  id: string;
  label: string;
  value: string;
  change: string;
  tone: "orange" | "violet" | "cyan" | "magenta";
};

export type QuickAccessItem = {
  title: string;
  description: string;
  href: string;
  badge: string;
};

export type MockUser = {
  name: string;
  role: string;
  email: string;
  phone: string;
  initials: string;
  sector: string;
  venue: string;
  shift: string;
  location: string;
};

export type StockStatus = "ok" | "bajo" | "agotado";

export type StockItem = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  status: StockStatus;
  updatedAt: string;
};

export type ComandaStatus = "abierta" | "en preparacion" | "lista" | "entregada";

export type ComandaItem = {
  id: string;
  table: string;
  items: string[];
  status: ComandaStatus;
  total: string;
  createdAt: string;
};

export type TableStatus = "libre" | "ocupada" | "reservada";

export type TableItem = {
  id: string;
  name: string;
  capacity: number;
  zone: string;
  status: TableStatus;
  currentOrder?: string;
};

export type EmployeeStatus = "activo" | "descanso" | "franco";

export type EmployeeItem = {
  id: string;
  name: string;
  role: string;
  shift: string;
  status: EmployeeStatus;
  contact: string;
};

export type WorkStatus = "en curso" | "pausada" | "por iniciar" | "finalizada";

export type WorkItem = {
  id: string;
  title: string;
  area: string;
  manager: string;
  deadline: string;
  progress: number;
  status: WorkStatus;
};

export type ProviderStatus = "activo" | "pendiente" | "inactivo";

export type ProviderItem = {
  id: string;
  name: string;
  category: string;
  contact: string;
  phone: string;
  status: ProviderStatus;
  lastOrder: string;
};

export type LandingFormType = "contacto" | "convocatoria" | "espacios" | "newsletter";

export type LandingFormStatus = "nuevo" | "revisado" | "contactado" | "archivado";

export type LandingFormSubmission = {
  id: string;
  type: LandingFormType;
  title: string;
  name: string;
  email: string;
  phone?: string;
  date: string;
  status: LandingFormStatus;
  source: string;
  summary: string;
};
