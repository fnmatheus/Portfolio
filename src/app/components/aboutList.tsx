"use client"

import React, { useEffect, useState } from 'react';
import { IAboutListProps, IHardSkillsList } from '../utils/interfaces';

const hardskillsUrl = 'https://script.google.com/macros/s/AKfycbzorQBBFngf4LR645uShRF_eUkI_825_sfTcRhRBGz5_ftTURDjTeDmq62rjLM4grsZ/exec';

export default function AboutList({ hardskillsObj }: IAboutListProps) {
  const [selected, setSelected] = useState('skills');

  const handleButton = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;

    if(target.id === 'skills') setSelected('skills');
    else if(target.id == 'studies') setSelected('studies');
    else setSelected('certificates');
  };

  return (
    <section className="w-full lg:w-[540px] flex flex-col gap-4 lg:gap-7">
      <div className="w-full flex justify-between font-bold text-lg">
        <button id='skills' onClick={handleButton} className="flex flex-col justify-center items-center">
          Skills
          <div className={`w-[40px] h-[3px] ${(selected !== 'skills') ? 'bg-transparent' : 'bg-purple'} rounded-full`} />
        </button>
        <button id='studies' onClick={handleButton} className="flex flex-col justify-center items-center">
          Estudos
          <div className={`w-[40px] h-[3px] ${(selected !== 'studies') ? 'bg-transparent' : 'bg-purple'} rounded-full`} />
        </button>
        <button id='certificates' onClick={handleButton} className="flex flex-col justify-center items-center">
          Certificados
          <div className={`w-[40px] h-[3px] ${(selected !== 'certificates') ? 'bg-transparent' : 'bg-purple'} rounded-full`} />
        </button>
      </div>
      <div className="h-max">
        <ul className="list-inside list-disc grid lg:grid-cols-2">
          {
            hardskillsObj !== undefined &&
            hardskillsObj[selected as keyof IHardSkillsList].map(item => <li key={item.name}><a href={item.url} target="_blank">{ item.name }</a></li>)
          }
        </ul>
      </div>
    </section>
  )
}
