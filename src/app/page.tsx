"use client"
import Navbar from './components/navbar';
import Openning from './components/openning';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { useEffect, useRef, useState } from 'react';
import { IHardSkillsList, IProject } from './utils/interfaces';
import Loading from './loading';

const projectsUrl = 'https://script.google.com/macros/s/AKfycbwwttTjdDna2bMQaJY4HaGFzcCgxu6vN8-EbQBxqX8ZQzDGIWtSeJvTLDbDTlO4BjPVYg/exec';
const hardskillsUrl = 'https://script.google.com/macros/s/AKfycbzorQBBFngf4LR645uShRF_eUkI_825_sfTcRhRBGz5_ftTURDjTeDmq62rjLM4grsZ/exec';
const nullHardSkills = {skills: [], studies: [], certificates: []}

export default function Home() {
  const navegationRef = useRef<HTMLInputElement[] | []>([]);
  
  const [projectsArr, setProjectsArr] = useState<IProject[]>([]);
  const [hardskillsObj, setHardskillsObj] = useState<IHardSkillsList>(nullHardSkills);
  const [isLoading, setIsLoading] = useState(true);

  const addToRefs = (e: never) => {
    if (e && !navegationRef.current.includes(e)) {
      navegationRef.current.push(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const projectsResponse = await fetch(projectsUrl, {method: 'GET'});
        const projectsData = await projectsResponse.json();
        const hardskillsResponse = await fetch(hardskillsUrl, {method: 'GET'});
        const hardskillsData = await hardskillsResponse.json();
        await setProjectsArr(projectsData);
        await setHardskillsObj(hardskillsData);
        setIsLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    getData();
  }, []);

  return (
    <main>
      {
        isLoading ?
        <Loading /> :
        <div className="bg-darkGrey text-white">
          <Navbar ref={ navegationRef } />
          <Openning ref={ navegationRef } />
          <About addToRefs={ addToRefs } ref={ navegationRef } hardskillsObj={hardskillsObj} />
          <Projects addToRefs={ addToRefs } ref={ navegationRef } projectsArr={projectsArr} />
          <Contact addToRefs={ addToRefs } ref={ navegationRef } />
          <Footer />
        </div>
      }
    </main>
  )
}
