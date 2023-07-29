import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectsFE } from '../data/projectsFE';
import { HiOutlineArrowNarrowLeft, HiGlobeAlt } from 'react-icons/hi';
import List from '../components/List';

const WebProjectDetail = () => {
  document.title = 'Study Case - Web';
  const [dataProject, setDataProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    projectsFE.forEach((item) => {
      if (item.id === id) {
        setDataProject(item);
      }
    });
  }, [id]);
  return (
    <div className='w-full min-h-screen px-4 md:px-24 py-12 dark:text-text text-dark'>
      <Link
        to='/'
        className='btn-icon hover:text-primary transition-all duration-200 ease-in-out'
        data-aos='zoom-in'
      >
        <HiOutlineArrowNarrowLeft size={20} />
        Back to home
      </Link>
      <div className=' flex flex-col justify-start gap-12 py-6'>
        <div className='flex flex-col gap-2' data-aos='zoom-in'>
          <h1
            className='text-4xl font-bold text-primary tracking-wide'
            data-aos='zoom-in'
          >
            {dataProject.name}
          </h1>
          <Link
            to={dataProject.link}
            className={
              dataProject.role === 'UI/UX Designer'
                ? 'hidden'
                : 'flex justify-start gap-2 py-2 w-28 hover:text-primary transition-all ease-in text-sm '
            }
            data-aos='zoom-in'
          >
            Visit Site
            <HiGlobeAlt size={20} strokeWidth={0.01} />
          </Link>
        </div>
        <div className='md:w-8/12 w-full mx-auto flex justify-center items-center '>
          <img
            src={dataProject.image}
            alt={dataProject.name}
            data-aos='zoom-in'
          />
        </div>
        <div className='flex flex-col justify-start gap-2' data-aos='zoom-in'>
          <span className='flex justify-start items-center gap-1'>
            Client :<p className='text-primary'> {dataProject.client}</p>
          </span>
          <span>Year : {dataProject.year}</span>
          <p>{dataProject.description}</p>
        </div>
        <div className='w-full' data-aos='zoom-in'>
          <div className='w-full bg-white px-12 py-16 flex justify-center items-center'>
            <img src={dataProject.logo} alt={dataProject.name} />
          </div>
          <p className='text-center italic py-2'>{dataProject.name} logo</p>
        </div>
        <div className='w-full flex flex-col gap-2' data-aos='zoom-in'>
          <h2 className='md:text-2xl text-lg font-semibold dark:text-white'>
            Goals
          </h2>
          <div className='w-full relative'>
            <p>
              The following are the objectives to be achieved with this
              application:
            </p>
            <List data={dataProject.goals} />
          </div>
        </div>
        <div className='w-full flex flex-col gap-2' data-aos='zoom-in'>
          <h2 className='md:text-2xl text-lg font-semibold dark:text-white'>
            User & Audience
          </h2>
          <div className='w-full relative'>
            <p>{dataProject.audience}</p>
          </div>
        </div>
        <div className='w-full flex flex-col gap-2' data-aos='zoom-in'>
          <h2 className='md:text-2xl text-lg font-semibold dark:text-white'>
            Role & Responsibility
          </h2>
          <div className='w-full relative'>
            <List data={dataProject.roles} />
          </div>
        </div>
        <div className='w-full flex flex-col gap-2' data-aos='zoom-in'>
          <h2 className='md:text-2xl text-lg font-semibold dark:text-white'>
            Scope
          </h2>
          <div className='w-full relative'>
            <List data={dataProject.scope} />
          </div>
        </div>
        <div className='w-full flex flex-col gap-2' data-aos='zoom-in'>
          <h2 className='md:text-2xl text-lg font-semibold dark:text-white'>
            Technology
          </h2>
          <div className='w-full relative'>
            <List data={dataProject.tech} />
          </div>
        </div>
        <div className='w-full flex flex-col gap-2' data-aos='zoom-in'>
          <h2 className='md:text-2xl text-lg font-semibold dark:text-white'>
            Documentation
          </h2>
          <div className='relative flex flex-col gap-6 justify-center items-center py-6 w-full lg:w-9/12 mx-auto'>
            {dataProject.docs?.map((doc, index) => {
              return (
                <div key={index}>
                  <img
                    src={doc}
                    alt={`${dataProject.name} Documentation`}
                    className='w-full rounded-md'
                    data-aos='zoom-in'
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebProjectDetail;
