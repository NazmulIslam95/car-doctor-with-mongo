import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen my-8">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative lg:w-1/2">
          <img src={person} className="w-3/4 lg:h-[30rem] rounded-lg" />
          <img
            src={parts}
            className="absolute right-5 top-2/3 w-1/2 rounded-lg border-8 border-white"
          />
        </div>
        <div className="mt-10 lg:mt-0 space-y-8 lg:w-1/2 lg:pr-40">
          <p className="text-[#FF3811] text-xl font-bold">About Us</p>
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
          {/* <button className="btn btn-primary bg-[#FF3811] border-none text-white">
            Get More Info
          </button> */}
          <button className="btn btn-primary border-none text-white bg-[#FF3811] w-30 h-12 px-6 mb-4 mt-6 hover:bg-white rounded-none hover:text-[#FF3811] before:block before:-left-1 before:-top-1 before:bg-[#FF3811] before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-[#FF3811] after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40  relative inline-block">
          Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
