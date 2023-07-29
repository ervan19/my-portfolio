import FrontendExpertCertificate from '../assets/certificate/FrontendExpertCertificate.webp';
import ReactFundamentalCertificate from '../assets/certificate/ReactFundamentalCertificate.webp';
import StudiCertificate from '../assets/certificate/StudiCertificate.webp';
import ReactCertificate from '../assets/certificate/ReactCertificate.webp';
import BestCapstoneCertificate from '../assets/certificate/BestCapstoneCertificate.webp';
import InternLenCertificate from '../assets/certificate/InternLenCertificate.webp';

const Carousel = () => {
  return (
    <div
      id='carouselExampleCaptions'
      className='relative'
      data-te-carousel-init
      data-te-carousel-slide
      data-aos='zoom-in'
    >
      <div
        className='absolute -bottom-12 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0'
        data-te-carousel-indicators
      >
        <button
          type='button'
          data-te-target='#carouselExampleCaptions'
          data-te-slide-to='0'
          data-te-carousel-active
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-te-target='#carouselExampleCaptions'
          data-te-slide-to='1'
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-te-target='#carouselExampleCaptions'
          data-te-slide-to='2'
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 3'
        ></button>
        <button
          type='button'
          data-te-target='#carouselExampleCaptions'
          data-te-slide-to='3'
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 4'
        ></button>
        <button
          type='button'
          data-te-target='#carouselExampleCaptions'
          data-te-slide-to='4'
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 5'
        ></button>
      </div>

      <div className="relative w-full md:w-8/12 mx-auto overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className='relative float-none  transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          data-te-carousel-active
          data-te-carousel-item
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img src={InternLenCertificate} className='block w-full' alt='...' />
        </div>

        <div
          className='relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          data-te-carousel-item
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={BestCapstoneCertificate}
            className='block w-full'
            alt='...'
          />
        </div>

        <div
          className='relative float-left -mr-[100%]  hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          data-te-carousel-item
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img src={StudiCertificate} className='block w-full' alt='...' />
        </div>

        <div
          className='relative float-left -mr-[100%]  hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          data-te-carousel-item
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={FrontendExpertCertificate}
            className='block w-full'
            alt='...'
          />
        </div>
        <div
          className='relative float-left -mr-[100%]  hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          data-te-carousel-item
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          <img src={ReactCertificate} className='block w-full' alt='...' />
        </div>
      </div>
      <div
        className='relative float-left -mr-[100%]  hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
        data-te-carousel-item
        style={{
          backfaceVisibility: 'hidden',
        }}
      >
        <img
          src={ReactFundamentalCertificate}
          className='block w-full'
          alt='...'
        />
      </div>

      <button
        className='absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-dark dark:text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:dark:text-white hover:text-dark hover:no-underline hover:opacity-90 hover:outline-none focus:dark:text-white focus:text-dark focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
        type='button'
        data-te-target='#carouselExampleCaptions'
        data-te-slide='prev'
      >
        <span className='inline-block h-8 w-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </span>
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Previous
        </span>
      </button>

      <button
        className='absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-dark dark:text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:dark:text-white hover:text-dark hover:no-underline hover:opacity-90 hover:outline-none focus:dark:text-white focus:text-dark focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
        type='button'
        data-te-target='#carouselExampleCaptions'
        data-te-slide='next'
      >
        <span className='inline-block h-8 w-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </span>
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;
