import PropTypes from 'prop-types';
import { HiArrowNarrowRight, HiGlobeAlt } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CardProject = (data) => {
  return (
    <>
      {data.data.map((item) => (
        <div
          key={item.id}
          className='w-full rounded-md overflow-hidden relative shadow-md group cursor-pointer'
        >
          <img
            src={item.image}
            alt={item.name}
            className='w-full group-hover:scale-110 transition-all duration-300 ease-in-out'
          />
          <div className='absolute top-0 w-full bottom-0 bg-white/90 dark:bg-dark/90 p-2 md:p-6 flex flex-col justify-center items-center gap-2 -translate-y-[900px] group-hover:-translate-y-0 transition-all duration-300 ease-in-out'>
            <div className='pb-1 w-fit text-primary border-b-2 border-primary'>
              <h1 className='text-lg lg:text-2xl font-semibold'>{item.name}</h1>
            </div>
            <div className='flex'>
              <Link
                to={
                  item.role === 'Frontend Developer'
                    ? `/studycase/web/${item.id}`
                    : `/studycase/ui/${item.id}`
                }
                className='flex justify-end items-center gap-2 py-2 w-28 hover:text-primary transition-all ease-in text-sm '
              >
                Study Case
                <HiArrowNarrowRight size={20} />
              </Link>
              <Link
                to={item.link}
                className={
                  item.role === 'UI/UX Designer'
                    ? 'hidden'
                    : 'flex justify-end items-center gap-2 py-2 w-28 hover:text-primary transition-all ease-in text-sm '
                }
              >
                Visit Site
                <HiGlobeAlt size={20} strokeWidth={0.1} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProject;

CardProject.propTypes = {
  data: PropTypes.array.isRequired,
};
