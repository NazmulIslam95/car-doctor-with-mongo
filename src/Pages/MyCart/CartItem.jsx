import { RxCross1 } from "react-icons/rx";
import { GrCheckboxSelected } from "react-icons/gr";

const CartItem = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, service_name, price, date, status } = booking;

  return (
    <tr>
      <th>
        <label>
          {status ? (
            <button className="border p-2 rounded-full">
              <GrCheckboxSelected></GrCheckboxSelected>
            </button>
          ) : (
            <button
              onClick={() => handleDelete(_id)}
              className="border p-2 rounded-full bg-[#444] text-white text-base font-thin"
            >
              <RxCross1></RxCross1>
            </button>
          )}
        </label>
      </th>
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
        <th>
          <p className="text-[#175a20] ">Confirmed</p>
        </th>
      ) : (
        <th>
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn bg-[#FF3811] text-white"
          >
            Pending...
          </button>
        </th>
      )}
    </tr>
  );
};

export default CartItem;
