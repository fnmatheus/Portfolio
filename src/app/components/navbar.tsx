"use client"
import { Squash as Hamburger } from 'hamburger-react';
import React, {useState } from 'react';
import { Logo } from './svgs/Index';

function Navbar({}, ref: any) {

  const [isOpen, setOpen] = useState(false);
  
  const handleLink = (id: string) => {
    setOpen(false);
    const currentRef = ref.current.filter((page: { id: string }) => page.id === id)[0];
    currentRef.scrollIntoView({ block: "center", behavior: 'smooth' });
  }

  return (
    <header className="w-screen border-b border-lightGrey fixed z-40 bg-darkGrey">
      <div className="flex justify-between items-center h-[60px] w-screen px-5">
        <Logo className="text-[35px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} rounded size={22} />
      </div>
      {
        isOpen &&
        <div className="w-screen h-[163px] flex flex-col items-center justify-center gap-5 font-semibold">
          <button onClick={ () => handleLink('about') }>Sobre mim</button>
          <button onClick={ () => handleLink('projects') }>Projetos</button>
          <button onClick={ () => handleLink('contact') }>Contate-me</button>
        </div>
      }
    </header>
  )
}

const forwardNavbar = React.forwardRef(Navbar);

export default forwardNavbar;
