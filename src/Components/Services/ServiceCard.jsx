import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 border before:block before:rounded-lg before:-left-1 before:-top-1 before:bg-[#FF3811] before:absolute before:h-0 before:w-0 before:hover:w-[102%] before:hover:h-[101%]  before:duration-500 before:-z-40 after:block after:rounded-lg after:-right-1 after:-bottom-1 after:bg-[#FF3811] after:absolute after:h-0 after:w-0 after:hover:w-[102%] after:hover:h-[101%] after:duration-500 after:-z-40">
      <figure className="px-6 pt-6">
        <img src={img} alt="Service" className="h-56 rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#444] text-2xl font-bold">{title}</h2>
        <div className="card-actions text-[#FF3811] flex justify-between items-center">
          <p className="text-sm font-semibold">Price ${price}</p>
          <Link to={`/booking/${_id}`}>
            <button className="flex items-center relative w-36  text-[#FF3811] p-4 rounded-lg group">
              <span>Check It Out</span>
              <span className="absolute text-4xl w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-lg">
                <IoIosArrowRoundForward></IoIosArrowRoundForward>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
