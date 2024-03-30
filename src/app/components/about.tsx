import AboutList from './aboutList';
import React from 'react';

const Code = 'https://lh3.googleusercontent.com/pw/AP1GczN1XgF69V2AhKaNhkmePuO6YqgiPXbE8tQoy7lyNa6mLQl3Z2gj8Mj65fP5w9bj67AX8CkshL4ValcoqypJWqRu90ziv7XXpiSfPuClhlNnn3AvvEV49sGCOFKRmtMhQav1i4ge3FUU1pEY3epZgIgN=w831-h425-s-no-gm?authuser=0';

function About({ addToRefs }: any, ref: any) {
  return (
    <section id="about" ref={ addToRefs } className="flex max-lg:flex-col justify-center items-center px-[34px] gap-8 lg:gap-26 pb-8 lg:pb-20">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img src={Code} alt="about image" className="w-[400px] lg:w-[600px] rounded-2xl" />
      }
      <section className="flex flex-col justify-center items-center gap-4 lg:w-max">
        <h2 className="font-bold text-3xl lg:text-5xl text-left w-full">Sobre mim</h2>
        <p className="text-justify lg:text-lg">
          Sou um jovem mineiro, apaixonado em tecnologia e bem criativo!
          <br />
          <br />
          Minha jornada nesse mundo do desenvolvimento se deu ínicio quando tinha 12 anos. Atualmente busco poder ajudar, facilitar e solucionar problemas com minhas habilidades, sempre querendo aprender mais e ser melhor no que faço e amo.
        </p>
        <AboutList />
      </section>
    </section>
  )
}

const forwardAbout = React.forwardRef(About);

export default forwardAbout;
