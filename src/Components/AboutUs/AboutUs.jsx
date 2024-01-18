import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import MovingComponent from "react-moving-text";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen my-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative lg:w-1/2">
          <img src={person} className="w-3/4 lg:h-[30rem] rounded-lg " />
          <img
            src={parts}
            className="absolute right-5 top-2/3 w-1/2 rounded-lg border-8 border-white"
          />
        </div>
        <div className="mt-10 lg:mt-0 space-y-8 lg:w-1/2 lg:pr-40">
          <p className="text-[#FF3811] text-xl font-bold">
            <MovingComponent
              type="flipSlowDown"
              duration="2000ms"
              delay="1s"
              direction="normal"
              timing="ease"
              iteration="infinite"
              fillMode="none"
            >
              About Us
            </MovingComponent>
          </p>
          <h1 className="text-4xl font-bold text-[#151515]">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="capitalize text-[#737373] text-base font-normal">
            space-y-8 Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti etextaut
            repudiandae et a id nisi.
          </p>
          <p className="capitalize text-[#737373] text-base font-normal">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn hidden lg:block btn-outline text-[#FF3811]  hover:bg-[#FF3811] hover:border-[#FF3811] border w-32 h-12 bg-transparent relative overflow-hidden group z-10 rounded-lg">
            <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute bg-[#FF3811] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute bg-[#FF3811] rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
            <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">
              <Link to="/">Get More Info</Link>
            </span>
            <Link to="/">Get More Info</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
