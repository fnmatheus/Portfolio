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

const getDataUrl = 'https://script.google.com/macros/s/AKfycbzazCxicyfNtMoScUVEBxB3SZOv2RFMwkFjGVyZj9jaidI1g-4WTt27BsjDvds7eupwag/exec';
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
        const response = await fetch(getDataUrl, {method: 'GET'});
        const data = await response.json();
        const {projects, hardSkills, images} = data;
        await setProjectsArr(projects);
        await setHardskillsObj(hardSkills);
        console.log(projects)
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
