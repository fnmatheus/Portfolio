"use client"
import { Email, GitHub, LinkedIn } from './svgs/Index';
import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const Photo = 'https://lh3.googleusercontent.com/pw/AP1GczOHHMNBtwJ2dNf1crvCx-8O33rGkMmOn0fLZR0q_PhJaQuURQuhp-88GK4x8VJNLfJHCLqQauypMyAkE6jr2ndFHwiGXpJdXOzhft6u4QHRYpOFGmscuGlkpdRBA11-YyaigCmpAaHWc2iDRoU49ksG=w773-h773-s-no-gm?authuser=0';

function Openning({}, ref: any) {
  const handleLink = (id: string) => {
    const currentRef = ref.current.filter((page: { id: string }) => page.id === id)[0];
    currentRef.scrollIntoView({ block: "center", behavior: 'smooth' });
  }

  return (
    <section className="flex justify-around">
      <div className="flex items-center max-lg:hidden">
        <div className="rounded-full w-[508px] h-[508px] bg-gradient-to-br from-lightBlue to-purple flex justify-center items-center">
          {// eslint-disable-next-line @next/next/no-img-element
          <img src={Photo} alt="photo" className="rounded-full w-[500px] h-[500px]" />
          }
        </div>
      </div>
      <div className="flex flex-col h-screen justify-center items-center gap-8 lg:gap-16 px-[34px] mt-18">
        <div className="text-5xl lg:text-7xl">
          <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-lightBlue to-purple">{`Hello! I'm`}</h1>
          <TypeAnimation
            sequence={[
              "Matheus",
              3000,
              "Web dev",
              3000,
            ]}
            speed={1}
            repeat={Infinity}
            className="font-bold"
          />
        </div>
        <p className="w-full text-wrap text-center lg:text-3xl">
          Venha solucionar seus problemas com <br /> SITES, LANDING PAGES e muito mais!
        </p>
        <div className="flex flex-col gap-5 w-full">
          <button onClick={ () => handleLink('about') } className="bg-gradient-to-l from-lightBlue to-purple w-full h-[45px] rounded-full text-xl">
            saiba mais!
          </button>
          <button onClick={ () => handleLink('contact') } className="bg-gradient-to-l from-lightBlue to-purple w-full h-[45px] rounded-full flex justify-center items-center px-[2px]">
            <div className="w-full h-[41px] rounded-full bg-darkGrey flex justify-center items-center text-xl">
              contate-me
            </div>
          </button>
        </div>
        <div className="rounded-full w-[218px] h-[218px] bg-gradient-to-br from-lightBlue to-purple flex justify-center items-center lg:hidden">
          {// eslint-disable-next-line @next/next/no-img-element
          <img src={Photo} alt="photo" className="rounded-full w-[214px] h-[214px]" />
          }
        </div>
        <div className="flex w-full justify-center items-center gap-[52px]">
          <a href="https://github.com/fnmatheus" target="_blank">
            <GitHub className="text-[50px]" />
          </a>
          <button onClick={ () => handleLink('contact') }>
            <Email className="text-[50px]" />
          </button>
          <a href="https://www.linkedin.com/in/fnmatheus/" target="_blank">
            <LinkedIn className="text-[50px]" />
          </a>
        </div>
      </div>
    </section>
  )
}

const forwardNavbar = React.forwardRef(Openning);

export default forwardNavbar;
