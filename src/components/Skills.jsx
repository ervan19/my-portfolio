import {
  FaReact,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaDocker,
} from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiMui, SiWebpack, SiRedux } from 'react-icons/si';

const Skills = () => {
  return (
    <div className='w-full min-h-screen my-auto px-4 md:px-24 flex flex-col justify-center items-center gap-14'>
      <h1 className='text-4xl text-primary font-bold place-self-center'>
        Skills & Tools
      </h1>
      <div className='w-full py-4 rounded-3xl flex justify-center items-center gap-12 flex-wrap dark:text-text text-dark'>
        <div>
          <FaReact size={64} />
        </div>
        <div>
          <TbBrandNextjs size={64} />
        </div>
        <div>
          <FaSass size={64} />
        </div>
        <div>
          <SiTailwindcss size={64} />
        </div>
        <div>
          <FaBootstrap size={64} />
        </div>
        <div>
          <SiMui size={64} />
        </div>
        <div>
          <SiWebpack size={64} />
        </div>
        <div>
          <FaGitAlt size={64} />
        </div>
        <div>
          <FaFigma size={64} />
        </div>
        <div>
          <SiRedux size={64} />
        </div>
        <div>
          <FaDocker size={64} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
