import Hero from '../components/Hero';
import Jumbotron from '../components/Jumbotron';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificate from '../components/Certificate';
import { Link } from 'react-router-dom';

const Home = () => {
  document.title = 'Home';
  return (
    <>
      <Hero />
      <Jumbotron />
      <Experience />
      <Skills />
      <Projects />
      <Certificate />
      <div className='w-full'>
        <div className='w-full py-24 dark:bg-white/5 bg-dark/5 px-4 md:px-24'>
          <div
            className='w-full flex justify-center items-center flex-col  gap-6'
            data-aos='zoom-in'
          >
            <h1 className='capitalize text-3xl md:text-5xl font-bold leading-normal dark:text-text text-dark'>
              Want to start a project?
            </h1>
            <Link className='btn w-fit' to='/'>
              Hire Me 🖐️
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
