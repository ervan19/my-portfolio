import { useContext, useState } from 'react';
import ThemeContext from '../context/theme';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BiSun, BiMoon } from 'react-icons/bi';
import { dataSocialMediaLink } from '../data/data';

const Navigation = () => {
  const { dark, toggleDark } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleThemeClick = (e) => {
    e.preventDefault();
    toggleDark();
  };
  return (
    <header className='fixed top-0 left-0 right-0 p-6 2xl:w-[1200px] mx-auto  backdrop-blur-md border-b-2 border-b-dark/10 dark:border-b-white/10 z-20 dark:text-text text-dark flex justify-between gap-6'>
      <nav
        className={`md:w-full flex flex-col md:flex-row justify-between items-center md:items-center gap-4 absolute top-full right-0 left-0 py-4 md:py-0 dark:bg-dark/75 bg-white md:bg-transparent md:dark:bg-transparent shadow-lg md:shadow-none md:relative ${
          showMenu ? 'flex' : 'hidden md:flex'
        }`}
      >
        <Link to='/'>
          <h1 className='text-5xl font-bold text-center flex justify-center items-end md:text-left'>
            <p>
              e<span className='text-primary'>.</span>
            </p>
          </h1>
        </Link>
        <ul className='flex flex-col md:flex-row justify-center items-center gap-4'>
          {dataSocialMediaLink.map((data) => {
            return (
              <li
                key={data.name}
                className='link-sosial-media flex justify-center items-center gap-1'
              >
                <Link to={data.path}>{data.name}</Link>
                <p className=''>/</p>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className='p-1 rounded-full bg-dark dark:bg-white hfi text-white dark:text-dark h-fit my-auto '
        onClick={handleThemeClick}
      >
        {dark === 'light' ? <BiMoon size={22} /> : <BiSun size={22} />}
      </button>
      <button
        className='md:hidden h-fit'
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(!showMenu);
        }}
      >
        <HiMenuAlt3 size={22} />
      </button>
    </header>
  );
};

export default Navigation;
