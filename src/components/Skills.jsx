import {
  FaReact,
  FaSass,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiMui,
  SiWebpack,
  SiRedux,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full min-h-screen my-auto px-4 md:px-24 flex flex-col justify-center items-center gap-14">
      <h1 className="text-4xl text-primary font-bold place-self-center">
        Skills & Tools
      </h1>
      <div className="w-full py-4 rounded-3xl flex justify-center items-center gap-12 flex-wrap dark:text-text text-dark">
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <SiTypescript
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <FaReact
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <TbBrandNextjs
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <FaSass
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <SiTailwindcss
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <FaBootstrap
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <SiMui
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <SiWebpack
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <FaGitAlt
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <FaFigma
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <SiRedux
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div data-aos="zoom-in" className="relative cursor-pointer group">
          <SiVitest
            size={64}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
