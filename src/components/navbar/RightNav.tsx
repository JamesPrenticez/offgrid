import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Path, type INavigationItem } from "@/models";
import { capitalizeFirstLetter } from "@/utils";

interface Props {
  isMenuOpen: boolean;
  toggleIsMenuOpen: () => void;
  menuItems: INavigationItem[];
}

function RightNav({ isMenuOpen, toggleIsMenuOpen, menuItems }: Props) {
  return (
    <nav 
      className={`fixed inset-[64px_0_0_0] md:inset-[80px_0_0_0] bg-popover/80 z-50 
        ${isMenuOpen ? "block" : "hidden" }
      `}
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.id === "right-menu") return;
        toggleIsMenuOpen();
      }}
    >
      <div id="right-menu" className="absolute right-0 bg-muted h-full w-full md:w-[450px] p-6 space-y-2 text-muted flex flex-col grow ">
        <div className="pt-6 select-none">
          <MenuItem 
            item={{
              name: "home",
              desc: "return to the home page",
              path: Path.HOME,
              icon: "",
            }}
          />
          {menuItems.map((item: INavigationItem, index: any) => {
            return (
              <MenuItem 
                key={index}
                item={item}
              />
            )
          })}
        </div>
      </div>
    </nav>
  )
};

interface MenuItemProps {
  item: INavigationItem;
}

function MenuItem({item}: MenuItemProps){
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex space-x-4 py-2 hover:text- font-medium
        ${pathname === item.path ? 'text-green-600 hover:text-major' : 'text-foreground'}
      `}
    >
      {item.icon !== "" &&
      <span className="flex items-center">
        {item.icon} 
      </span>
      }
      <p>
        {capitalizeFirstLetter(item.name)}
      </p>
    </Link>
  )
}

export default RightNav;
