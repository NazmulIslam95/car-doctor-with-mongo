import { RxCross1 } from "react-icons/rx";
import { GiCheckMark } from "react-icons/gi";

const CartItem = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, service_name, price, date, status } = booking;

  return (
    <tr className="flex justify-between items-center">
      <td>
        <label>
          {status ? (
            <button className="border text-[#FF3811] text-xl p-2 rounded-full">
              <GiCheckMark></GiCheckMark>
            </button>
          ) : (
            <button
              onClick={() => handleDelete(_id)}
              className="border p-2 rounded-full text-xl  bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white"
            >
              <RxCross1></RxCross1>
            </button>
          )}
        </label>
      </td>
      <td>
        <div className="avatar">
          <div className="w-36 h-36 rounded">
            {img && (
              <img className="" src={img} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
      </td>
      <td className="text-sm font-bold">{service_name}</td>
      <td className="text-sm font-semibold">{price}</td>
      <td className="text-sm font-semibold">{date}</td>
      {status === "confirmed" ? (
        <td>
          <p className="text-[#FF3811] text-base font-semibold">Completed</p>
        </td>
      ) : (
        <td>
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] text-white"
          >
            Complete Booking
          </button>
        </td>
      )}
    </tr>
  );
};

export default CartItem;
