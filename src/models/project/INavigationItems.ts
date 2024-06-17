import { Path } from "@/models" 

export interface INavigationItem {
  name: string;
  desc: string;
  path: Path;
  icon: string;
}