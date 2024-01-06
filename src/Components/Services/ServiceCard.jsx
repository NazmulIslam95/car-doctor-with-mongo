import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 border">
      <figure className="px-6 pt-6">
        <img src={img} alt="Service" className="h-56 rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#444] text-2xl font-bold">{title}</h2>
        <div className="card-actions text-[#FF3811] flex justify-between">
          <p className="text-sm font-semibold">Price ${price}</p>
          <Link to = {`/booking/${_id}`}>
            <button className="text-3xl">
              <IoIosArrowRoundForward></IoIosArrowRoundForward>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
