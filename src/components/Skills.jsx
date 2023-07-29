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
        <div data-aos='zoom-in'>
          <FaReact size={64} />
        </div>
        <div data-aos='zoom-in'>
          <TbBrandNextjs size={64} />
        </div>
        <div data-aos='zoom-in'>
          <FaSass size={64} />
        </div>
        <div data-aos='zoom-in'>
          <SiTailwindcss size={64} />
        </div>
        <div data-aos='zoom-in'>
          <FaBootstrap size={64} />
        </div>
        <div data-aos='zoom-in'>
          <SiMui size={64} />
        </div>
        <div data-aos='zoom-in'>
          <SiWebpack size={64} />
        </div>
        <div data-aos='zoom-in'>
          <FaGitAlt size={64} />
        </div>
        <div data-aos='zoom-in'>
          <FaFigma size={64} />
        </div>
        <div data-aos='zoom-in'>
          <SiRedux size={64} />
        </div>
        <div data-aos='zoom-in'>
          <FaDocker size={64} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
