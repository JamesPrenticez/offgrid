import React from "react"
import { HamburgerIcon, XIcon } from "../icons";

interface Props {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

function Hamburger({ isOpen, toggleIsOpen}: Props){
  return (
    <button 
      className={`outline-none antialiased ring-[4px] rounded-md ${isOpen ? 'ring-stone-300' : 'ring-transparent'}`}
      onClick={toggleIsOpen}
      aria-label="Navigation Menu"
    >
      <HamburgerIcon className={`${isOpen ? 'hidden' : 'flex'}`}width={28} height={28}/>
      <XIcon className={`${isOpen ? 'flex' : 'hidden'}`}width={28} height={28}/>
    </button>
  )
}

export default Hamburger;