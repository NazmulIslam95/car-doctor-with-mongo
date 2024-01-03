import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-10">
      <div className="space-y-5 mb-12">
        <p className="text-center text-[#FF3811] text-xl font-bold">Service</p>
        <h1 className="text-center text-[#151515] text-5xl font-bold">
          Our Service Area
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
