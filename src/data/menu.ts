import type { DrinkItem, FoodItem } from "@/types";

export const drinkItems: DrinkItem[] = [
  {
    id: "fernet-combo",
    category: "Tragos y bebidas",
    name: "Fernet + 2 cocas",
    description: "Combo para compartir y arrancar la noche con clasico cordobes.",
    price: "$18.500",
  },
  {
    id: "vino-pritty",
    category: "Tragos y bebidas",
    name: "Vino con pritty",
    description: "Refrescante, popular y perfecto para patio nocturno.",
    price: "$5.800",
  },
  {
    id: "vermuth-cynar",
    category: "Tragos y bebidas",
    name: "Vermut Cynar",
    description: "Con soda y citrico, perfil herbal para apertura de barra.",
    price: "$5.900",
  },
  {
    id: "campari-tonic",
    category: "Tragos y bebidas",
    name: "Campari tonic",
    description: "Amargo brillante con tonica y rodaja de naranja.",
    price: "$6.100",
  },
  {
    id: "gin-beefeater",
    category: "Tragos y bebidas",
    name: "Gin Beefeater",
    description: "Botanico, seco y con final citrico.",
    price: "$8.200",
  },
  {
    id: "vodka-smirnoff",
    category: "Tragos y bebidas",
    name: "Vodka Smirnoff",
    description: "Servido con mixer citrico y hielo grande.",
    price: "$7.200",
  },
  {
    id: "agua-gaseosa",
    category: "Tragos y bebidas",
    name: "Agua o gaseosa",
    description: "Opciones frias para acompanar toda la jornada.",
    price: "$2.700",
  },
];

export const foodItems: FoodItem[] = [
  {
    id: "choripan",
    category: "Comida",
    name: "Choripan",
    description: "Con salsa criolla y chimichurri de la casa.",
    price: "$5.500",
  },
  {
    id: "sandwich-carne",
    category: "Comida",
    name: "Sandwich de carne",
    description: "Pan tierno, carne braseada y aderezo ahumado.",
    price: "$7.100",
  },
  {
    id: "empanadas",
    category: "Comida",
    name: "Empanadas surtidas",
    description: "Porcion para compartir antes del show o durante la feria.",
    price: "$4.800",
  },
  {
    id: "pancho",
    category: "Comida",
    name: "Pancho Pulqui",
    description: "Version callejera con toppings de la casa.",
    price: "$4.200",
  },
];
