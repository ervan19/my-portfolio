import Carousel from './Carousel';

const Certificate = () => {
  return (
    <div className=' w-full m-auto py-16 px-4 relative group min-h-screen flex flex-col justify-start items-start gap-14'>
      <h1
        className=' text-3xl md:text-4xl text-primary font-bold place-self-center'
        data-aos='zoom-in'
      >
        Certificate
      </h1>
      <Carousel />
    </div>
  );
};

export default Certificate;
