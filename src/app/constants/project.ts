import { INavigationItem, Path } from "@/models";

export const project = {
  name: "Off Grid",
};

export const navigationItems: INavigationItem[] = [
  { 
    icon: "💧",
    name: "water",
    path: Path.WATER,
    desc: "Collecting drinking water and handling your sewer",
  },
  { 
    icon: "🌱",
    name: "plants",
    path: Path.PLANTS,
    desc: "Explore plants from food to shelter belts",
  },
  { 
    icon: "🏠",
    name: "building",
    path: Path.BUIDLING,
    desc: "Find in-depth information about acceptable building methods",
  },
  { 
    icon: "⚡",
    name: "electricity",
    path: Path.ELECTRICITY,
    desc: "Learn about different ways to generate electricity",
  },

];