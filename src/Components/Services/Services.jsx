import ServiceCard from "./ServiceCard";
import MovingComponent from "react-moving-text";
import { TypeAnimation } from "react-type-animation";
import useServices from "../Hooks/useServices";

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
            iteration="1"
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
    </div>
  );
};

export default Services;
