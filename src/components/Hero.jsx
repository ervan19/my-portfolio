import heroImage from "../assets/heroImage.svg";
import { HiDownload } from "react-icons/hi";
import ervanResume from "../assets/resume_ervan.pdf";

const Hero = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-2 px-4 md:px-24 py-24 text-center md:text-left">
      <div className="flex flex-col gap-8 w-full lg:w-10/12" data-aos="zoom-in">
        <div className="w-full md:w-auto">
          <h3 className="text-lg">
            Hello, I'm {""}
            <span className="text-primary font-semibold">
              Ervan Muhammad Adrian 🖐️
            </span>
          </h3>
          <h1 className="lg:text-4xl text-3xl font-bold leading-relaxed text-dark dark:text-white py-3">
            {"<Frontend Developer />"}
          </h1>
          <p className="w-full md:w-10/12 dark:text-text text-dark text-base">
            Undergraduate Universitas Komputer Indonesia majoring Information
            Systems. Have deep experience Designing, Developing, Testing and
            Maintaining web applications for 3 years.
          </p>
        </div>
        <a
          href={ervanResume}
          className="btn w-fit gap-2 mx-auto md:mx-0"
          download
        >
          Resume <HiDownload size={20} />
        </a>
      </div>
      <div className="w-full py-4 lg:py-0 lg:w-7/12" data-aos="flip-right">
        <img src={heroImage} alt="Ervan" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
