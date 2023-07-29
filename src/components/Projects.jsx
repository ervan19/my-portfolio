import { useState } from 'react';
import { projectsFE } from '../data/projectsFE';
import { projectsUI } from '../data/projectsUI';
import CardProject from './CardProject';

const Projects = () => {
  const [tabs, setTabs] = useState(1);

  return (
    <div className='w-full min-h-screen px-4 md:px-24 flex flex-col justify-start items-start gap-4 md:gap-14'>
      <div
        className='w-full flex flex-col justify-center items-center gap-3'
        data-aos='zoom-in'
      >
        <h1 className='text-4xl text-primary font-bold place-self-center'>
          Selected Projects
        </h1>
        <div className='flex justify-center items-center gap-3 mx-auto'>
          <button
            className={tabs === 1 ? 'project-tab active' : 'project-tab'}
            onClick={(e) => {
              e.preventDefault();
              setTabs(1);
            }}
          >
            Web
          </button>
          <button
            className={tabs === 2 ? 'project-tab active' : 'project-tab'}
            onClick={(e) => {
              e.preventDefault();
              setTabs(2);
            }}
          >
            UI/UX
          </button>
        </div>
      </div>
      <div className='w-full py-0 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12'>
        {tabs === 1 ? (
          <CardProject data={projectsFE} />
        ) : (
          <CardProject data={projectsUI} />
        )}
      </div>
    </div>
  );
};

export default Projects;
