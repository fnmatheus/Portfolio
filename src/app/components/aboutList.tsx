"use client"

import React, { useEffect, useState } from 'react';
import { IHardSkillsList } from '../utils/interfaces';

const hardskillsUrl = 'https://script.google.com/macros/s/AKfycbzorQBBFngf4LR645uShRF_eUkI_825_sfTcRhRBGz5_ftTURDjTeDmq62rjLM4grsZ/exec';

export default function AboutList() {
  const [list, setList] = useState<IHardSkillsList>();
  const [selected, setSelected] = useState('skills');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(hardskillsUrl, {method: 'GET'});
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.log('error');
      }
    };
    getData();
  }, []);

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
            list !== undefined &&
            list[selected as keyof IHardSkillsList].map(item => <li key={item.name}>{ item.name }</li>)
          }
        </ul>
      </div>
    </section>
  )
}
