import { useState, useEffect } from 'react';
import { dataExperience } from '../data/data';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataExperience);
  }, []);
  return (
    <div className='w-full min-h-screen px-4 md:px-24 flex flex-col justify-start items-start gap-14'>
      <h1 className='text-4xl text-primary font-bold place-self-center'>
        Experience
      </h1>
      <div className='w-full py-4 dark:bg-white/5 bg-dark/5 rounded-3xl grid place-items-center'>
        {data.map((job) => {
          return <ExperienceCard key={job.id} {...job} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
