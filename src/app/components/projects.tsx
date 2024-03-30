"use client"
import React, { useEffect, useState } from 'react';
import { IProject } from '../utils/interfaces';
import ProjectCard from './projectCard';

const projectsUrl = 'https://script.google.com/macros/s/AKfycbwwttTjdDna2bMQaJY4HaGFzcCgxu6vN8-EbQBxqX8ZQzDGIWtSeJvTLDbDTlO4BjPVYg/exec';

function Projects({ addToRefs }: any) {
  const [fillter, setFillter] = useState('all');
  const [hiddenProject, setHiddenProject] = useState(0);
  const [projectsArr, setProjectsArr] = useState<IProject[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(projectsUrl, {method: 'GET'});
        const data = await response.json();
        setProjectsArr(data);
      } catch (error) {
        console.log('error');
      }
    };
    getData();
  }, []);

  const handleFillter = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;

    if(target.id === 'all') setFillter('all');
    else if(target.id == 'frontend') setFillter('frontend');
    else setFillter('backend');
  }

  const handleProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    setHiddenProject(Number(target.id));
  }

  const handleLink = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLButtonElement;
    window.open(target.id, '_blank');
  }
  
  return (
    <section id="projects" ref={ addToRefs } className="flex flex-col justify-center items-center px-[17px] gap-4 pb-8 lg:pb-20">
      <h2 className="font-bold text-3xl lg:text-4xl mb-4">Meus Projetos</h2>
      <section className="w-full">
        <div className="flex justify-around lg:justify-center lg:gap-12 px-[17px] pb-4">
          <div className={`${fillter === 'all' ? 'bg-gradient-to-l from-lightBlue to-purple' : 'bg-grey'} w-[96px] h-[27px] rounded-full flex justify-center items-center p-[2px]`}>
            <button id="all" onClick={handleFillter} className="w-full h-full rounded-full bg-darkGrey flex justify-center items-center">
              todos
            </button>
          </div>
          <div className={`${fillter === 'frontend' ? 'bg-gradient-to-l from-lightBlue to-purple' : 'bg-grey'} w-[96px] h-[27px] rounded-full flex justify-center items-center p-[2px]`}>
            <button id="frontend" onClick={handleFillter} className="w-full h-full rounded-full bg-darkGrey flex justify-center items-center">
              front-end
            </button>
          </div>
          <div className={`${fillter === 'backend' ? 'bg-gradient-to-l from-lightBlue to-purple' : 'bg-grey'} w-[96px] h-[27px] rounded-full flex justify-center items-center p-[2px]`}>
            <button id="backend" onClick={handleFillter} className="w-full h-full rounded-full bg-darkGrey flex justify-center items-center">
              backend
            </button>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center gap-3 lg:gap-12 lg:place-items-center">
            {
              projectsArr.length > 0 &&
              projectsArr.filter(project => project.tags.includes(fillter)).map((project, i) => (
                  <ProjectCard
                    key={i}
                    id={project.id}
                    name={project.name}
                    image={project.image}
                    isOpenSource={project.isOpenSource}
                    codeLink={project.codeLink}
                    link={project.link}
                    hiddenProject={hiddenProject}
                    handleProject={handleProject}
                    handleLink={handleLink}
                    tags={project.tags}
                  />
                )
              )
            }
          </ul>
        </div>
      </section>
    </section>
  )
}

const forwardProjects = React.forwardRef(Projects);

export default forwardProjects;
