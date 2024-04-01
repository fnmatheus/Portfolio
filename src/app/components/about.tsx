import { IAboutProps } from '../utils/interfaces';
import AboutList from './aboutList';
import React from 'react';

function About({ addToRefs, hardskillsObj, photo, cvLink }: IAboutProps, ref: any) {
  return (
    <section id="about" ref={ addToRefs } className="flex max-lg:flex-col justify-center items-center px-[34px] gap-8 lg:gap-26 pb-8 lg:pb-20">
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt="about image" className="w-[400px] lg:w-[600px] rounded-2xl" />
      }
      <section className="flex flex-col justify-center items-center gap-4 lg:w-max">
        <h2 className="font-bold text-3xl lg:text-4xl text-left w-full">Sobre mim</h2>
        <p className="text-justify lg:text-lg">
          Sou um jovem mineiro, apaixonado em tecnologia e bem criativo!
          <br />
          <br />
          Minha jornada nesse mundo do desenvolvimento se deu ínicio quando tinha 12 anos. Atualmente busco poder ajudar, facilitar e solucionar problemas com minhas habilidades, sempre querendo aprender mais e ser melhor no que faço e amo.
        </p>
        <AboutList hardskillsObj={hardskillsObj} />
        <a href={cvLink} target="_blank" className="flex justify-center items-center bg-gradient-to-l from-lightBlue to-purple w-full lg:w-max h-[45px] rounded-full text-xl px-4">
          baixar cv
        </a>
      </section>
    </section>
  )
}

const forwardAbout = React.forwardRef(About);

export default forwardAbout;
