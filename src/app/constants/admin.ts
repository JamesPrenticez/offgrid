import { INavigationItem, Path } from "@/models";

export const adminLinks: INavigationItem[] = [
  {
    icon: "🌱",
    name: "Data Entry",
    path: Path.ADMIN_DATA_ENTRY,
    desc: "Add to our database"
  },
  {
    icon: "🙋‍♂️",
    name: "User Management",
    path: Path.ADMIN_USER_MANAGEMENT,
    desc: "Add to our database"
  }
]