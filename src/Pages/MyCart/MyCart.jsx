/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import CartItem from "./CartItem";
import Swal from "sweetalert2";

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleBookingConfirm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wont to confirm this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirmed" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Confirmed!",
                text: "Your Booking has been Confirmed.",
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "confirmed";
              const newBooking = [updated, ...remaining];
              setBookings(newBooking);
            }
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
                  <CartItem
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleBookingConfirm={handleBookingConfirm}
                  ></CartItem>
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
