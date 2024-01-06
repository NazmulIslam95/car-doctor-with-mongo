import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, _id, price, img } = service;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;
    const comment = form.comment.value;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service_id: _id,
      service_name: title,
      price: price,
      details: comment,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "wow...",
            text: "Service Booked Successfully!",
          });
        }
      });
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>

        <div
          className="rounded-lg hidden lg:block bg-no-repeat"
          style={{
            backgroundImage: "url(https://i.ibb.co/gvcQFjF/checkout.png)",
            backgroundSize: "100% 20rem", // Set the width to 100% and height to 20rem
            height: "20rem", // Set the height to 20rem
            width: "100%", // Set the width to 100%
          }}
        >
          <div className="bg-gradient-to-r from-black h-full mt-12 rounded-lg">
            <h1 className="text-white pt-32 pl-12 text-5xl font-bold">
              Check Out
            </h1>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mb-12">
          <form onSubmit={handleBooking} className="flex w-full space-x-3">
            <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-[#F3F3F3] rounded-lg ">
              {/* <div className="mb-6 text-3xl font-light text-center text-gray-800">
                Contact us !
              </div> */}
              <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1">
                  <div className="relative">
                    <input
                      defaultValue={user?.displayName}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      className="rounded-lg  flex-1 appearance-none   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className="relative">
                    <input
                      readOnly
                      defaultValue={user?.email}
                      type="email"
                      name="email"
                      id="contact-form-email"
                      className="rounded-lg  flex-1 appearance-none   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className="relative">
                    <input
                      required
                      type="date"
                      name="date"
                      id="contact-form-name"
                      className="rounded-lg  flex-1 appearance-none   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className="relative">
                    <input
                      readOnly
                      defaultValue={"$" + price}
                      type="text"
                      name="price"
                      id="contact-form-email"
                      className="rounded-lg  flex-1 appearance-none   w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="comment">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base  bg-white   rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:border-transparent"
                      id="comment"
                      placeholder="Your Message"
                      name="comment"
                      rows="5"
                      cols="40"
                    ></textarea>
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <input
                    type="submit"
                    value="Order Confirm"
                    className="py-2 px-4 bg-[#FF3811] hover:bg-[#ff391183] focus:ring-[#FF3811] focus:ring-offset-[#FF3811] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Booking;
