import Navigation from '../components/Navigation';
import { Link, Outlet } from 'react-router-dom';
import { dataSocialMediaLink } from '../data/data';

const Layout = () => {
  return (
    <div className='relative w-full min-h-screen dark:bg-dark dark:text-light 2xl:w-[1200px] mx-auto'>
      <Navigation />
      <main className='flex flex-col justify-center items-start gap-32 mt-20 '>
        <Outlet />
      </main>

      <footer className='p-10 px-4 md:px-10 2xl:w-[1200px] mx-auto flex-col md:flex-row  backdrop-blur-md border-t-2 border-t-dark/10 dark:border-t-white/10 dark:text-text text-dark flex justify-between items-center gap-1'>
        <Link to='/'>
          <p className='text-xl my-2 font-semibold flex justify-center items-end'>
            Ervan Muhammad Adrian{' '}
            <span className='text-4xl text-primary'>.</span>
          </p>
        </Link>
        <div>
          <ul className='flex justify-center md:flex-row flex-col items-center gap-4'>
            {dataSocialMediaLink.map((data) => {
              return (
                <li
                  key={data.name}
                  className='link-sosial-media flex justify-center items-center gap-1'
                >
                  <a href={data.path}>{data.name}</a>
                  <p className=''>/</p>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
