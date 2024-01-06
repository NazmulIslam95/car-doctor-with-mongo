/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { RxCross1 } from "react-icons/rx";


const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      //   .then((data) => console.log(data))
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div
          className="rounded-lg hidden lg:block bg-no-repeat"
          style={{
            backgroundImage: "url(https://i.ibb.co/gvcQFjF/checkout.png)",
            backgroundSize: "100% 20rem",
            height: "20rem",
          }}
        >
          <div className="bg-gradient-to-r from-black h-full mt-12 rounded-lg">
            <h1 className="text-white pt-36 pl-12 text-5xl font-bold">
              My Cart
            </h1>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
        <div className="my-12">
          <h1 className="font-bold text-center text-4xl">
            You Booked {bookings.length} Item
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <th>
                      <label>
                        <button className="border p-2 rounded-full bg-[#444] text-white text-base font-thin">
                          <RxCross1></RxCross1>
                        </button>
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-36 h-36 rounded-lg">
                            <img
                              className=""
                              src={booking.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {booking.service_name}
                          </div>
                          {/* <div className="text-sm opacity-50">United States</div> */}
                        </div>
                      </div>
                    </td>
                    <td className="text-sm font-semibold">
                      {booking.price}
                      <br />
                      {/* <span className="badge badge-ghost badge-sm">
                            Desktop Support Technician
                          </span> */}
                    </td>
                    <td className="text-sm font-semibold">{booking.date}</td>
                    <th>
                      <button className="btn bg-[#FF3811] text-white">
                        Pending
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            <div></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
