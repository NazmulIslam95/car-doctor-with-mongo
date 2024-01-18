import ServiceCard from "./ServiceCard";
import MovingComponent from "react-moving-text";
import { TypeAnimation } from "react-type-animation";
import useServices from "../Hooks/useServices";
import { Link } from "react-router-dom";

import icon1 from "../../assets/icons/001-timetable.png";
import icon2 from "../../assets/icons/Group 34.png";
import icon3 from "../../assets/icons/Group 35.png";

const Services = () => {
  const services = useServices();

  return (
    <div className="mb-10">
      <div className="space-y-5 mb-12">
        <p className="text-center text-[#FF3811] text-xl font-bold">
          <MovingComponent
            type="flipSlowDown"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
          >
            Service
          </MovingComponent>
        </p>
        <h1 className="text-center text-[#151515] text-5xl font-bold">
          <TypeAnimation
            preRenderFirstString={false}
            sequence={[
              500,
              "Our Service Area", // initially rendered starting point
              1000,
              "", // initially rendered starting point
            ]}
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="text-center text-[#737373] text-base font-normal">
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="btn hidden lg:block btn-outline text-[#FF3811]  hover:bg-[#FF3811] hover:border-[#FF3811] border w-32 h-12 bg-transparent relative overflow-hidden group z-10 rounded-lg">
          <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-[#FF3811] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
          <span className="absolute bg-[#FF3811] rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
          <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">
            <Link to="/services">More Services</Link>
          </span>
          <Link to="/services">More Services</Link>
        </button>
      </div>
      <div className="my-12 bg-black h-[250px] flex items-center justify-around rounded-2xl">
        <div className="flex gap-2">
          <img src={icon1} alt="" />
          <div className="text-white">
            <p className="text-xs font-medium">We are open monday-friday</p>
            <h3 className="text-base font-extrabold">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={icon2} alt="" />
          <div className="text-white">
            <p className="text-xs font-medium">Have a question?</p>
            <h3 className="text-base font-extrabold">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={icon3} alt="" />
          <div className="text-white">
            <p className="text-xs font-medium">Need a repair? our address</p>
            <h3 className="text-base font-extrabold">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
