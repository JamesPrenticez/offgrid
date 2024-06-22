import React from "react"
import { HamburgerIcon, XIcon } from "../icons";

interface Props {
  isMenuOpen: boolean;
  toggleIsMenuOpen: () => void;
}

function Hamburger({ isMenuOpen, toggleIsMenuOpen}: Props){
  return (
    <button 
      className={`h-[28px] w-[28px] outline-none antialiased ring-[4px] rounded-md ${isMenuOpen ? 'ring-stone-300' : 'ring-transparent'}`}
      onClick={toggleIsMenuOpen}
      aria-label="Navigation Menu"
    >
      <HamburgerIcon className={`${isMenuOpen ? 'hidden' : 'flex'}`}width={28} height={28}/>
      <XIcon className={`${isMenuOpen ? 'flex' : 'hidden'}`}width={28} height={28}/>
    </button>
  )
}

export default Hamburger;