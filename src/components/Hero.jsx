import heroImage from '../assets/heroImage.svg';
import { HiDownload } from 'react-icons/hi';
import ervanResume from '../assets/ervanResume.pdf';

const Hero = () => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center gap-2 px-4 md:px-24 py-24 text-center md:text-left'>
      <div className='flex flex-col gap-8 w-full lg:w-10/12' data-aos='zoom-in'>
        <div className='w-full md:w-auto'>
          <h3 className='text-lg'>
            Halo, I'm {''}
            <span className='text-primary font-semibold'>
              Ervan Muhammad Adrian 🖐️
            </span>
          </h3>
          <h1 className='lg:text-4xl text-3xl font-bold leading-relaxed text-dark dark:text-white py-3'>
            Frontend Developer
          </h1>
          <p className='w-full md:w-10/12 dark:text-text text-dark text-base'>
            I am a student at the Indonesian Computer University majoring in
            Information Systems. On campus, I actively participate in research
            activities with lecturers in making an application as a UI/UX
            Designer. In addition, I have experience working as a freelance
            Frontend Developer for almost 3 years
          </p>
        </div>
        <a href={ervanResume} className='btn w-fit gap-2 mx-auto md:mx-0'>
          Resume <HiDownload size={20} />
        </a>
      </div>
      <div className='w-full py-4 lg:py-0 lg:w-7/12' data-aos='flip-right'>
        <img src={heroImage} alt='Ervan' className='w-full h-full' />
      </div>
    </div>
  );
};

export default Hero;
