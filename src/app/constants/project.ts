import { INavigationItem, Path } from "@/models";

export const project = {
  name: "Off Grid",
  desc: "library of knowledge for those seeking to live off grid in Aotearoa"
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

export const plantNavigationItems: INavigationItem[] = [
  { 
    img: "",
    name: "Trees",
    path: Path.PLANTS,
    desc: "Trees",
  },
]
