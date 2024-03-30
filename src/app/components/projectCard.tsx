import { IProjectCard } from '../utils/interfaces';
import { Code, Eye } from './svgs/Index';

function ProjectCard({id, name, image, isOpenSource, codeLink, link, hiddenProject, handleProject, handleLink}: IProjectCard) {
  return (
    <li className="w-[172px] h-max flex flex-col gap-2 justify-center items-center">
      <div
        id={String(id)}
        className={`w-[172px] h-[125px] bg-center bg-contain rounded-[16px] justify-center`}
        style={{backgroundImage: `url(${image})`}}
        onClick={handleProject}
      >
        {
          (hiddenProject === id) &&
          <>
            <div className="absolute w-[172px] h-[125px] bg-darkGrey rounded-[16px] z-0 opacity-60" />
            <div className="flex justify-around items-center h-full text-5xl">
              {
                isOpenSource &&
                <button id={codeLink} className="relative z-10" onClick={handleLink}>
                  <Code />
                </button>
              }
              <button id={link} className="relative z-10" onClick={handleLink}>
                <Eye />
              </button>
            </div>
          </>
        }
      </div>
      <h4 className="font-bold">
        { name }
      </h4>
    </li>
  );
}

export default ProjectCard;
