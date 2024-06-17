"use client"

import React, { useState, type ReactNode, type ReactElement } from "react";
import RightNav from "./RightNav";
import Hamburger from "./Hamburger";
import CompanyLogo from "./CompanyLogo";
import CompanyName from "./CompanyName";
import { navigationItems } from "@/app/constants/project";
import Link from "next/link";

function Navbar(): ReactElement {
  const [isOpen, toggleIsOpen] = useState<boolean>(false)

  return (
    <>
      <NavbarWrapper>
        <div className="flex">
          <CompanyLogo onClick={() => toggleIsOpen(false)}/>
          <CompanyName />
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <Link
              href='/admin'
              className="group rounded-lg border border-transparent px-5 py-4 hover:underline "
              rel="noopener noreferrer"
            >
            <h2 className="text-sm font-semibold text-red-500">
              🔑 &nbsp;Admin&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
          <Hamburger 
            isOpen={isOpen}
            toggleIsOpen={() => { toggleIsOpen((prevState) => !prevState) }}
          />
        </div>

        <RightNav
          isOpen={isOpen}
          toggleIsOpen={() => { toggleIsOpen((prevState) => !prevState) }}
          menuItems={navigationItems}
        />

      </NavbarWrapper>
    </>
  );
};

interface NavbarWrapperProps {
  children: ReactNode;
}

const NavbarWrapper = ({children}: NavbarWrapperProps) => {
  return (
    <header className="flex items-center h-[4rem] md:h-[5rem] bg-muted font-[400] text-[16px] px-4 border-b border-stone-300">
      {children}
    </header>
  )
}

export default Navbar;