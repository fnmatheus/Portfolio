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
        <p className="lg:text-lg">
        Desde criança, minha curiosidade sobre como as coisas funcionam, especialmente na área de tecnologia, me impulsionou a buscar soluções simples para problemas.<br /><br /> Aos 12 anos, tive meu primeiro contato com programação, focando em desenvolvimento de jogos. <br /><br />Atualmente, meu objetivo é criar soluções práticas para o dia a dia das pessoas e continuar expandindo meu conhecimento nessa área que sempre me motiva.
        </p>
        <AboutList hardskillsObj={hardskillsObj} cvLink={cvLink} />
      </section>
    </section>
  )
}

const forwardAbout = React.forwardRef(About);

export default forwardAbout;
