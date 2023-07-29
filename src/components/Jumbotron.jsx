import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (
    <div className='w-full'>
      <div className='w-full py-24 dark:bg-white/5 bg-dark/5'>
        <div
          className='flex justify-center items-center flex-col gap-8'
          data-aos='zoom-in'
        >
          <h1 className='capitalize text-3xl md:text-5xl font-bold w-full md:w-8/12 mx-auto text-center leading-normal dark:text-text text-dark'>
            Realize your dream ideas through an application
          </h1>
          <Link className='btn' to='/'>
            Hire Me🖐️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
