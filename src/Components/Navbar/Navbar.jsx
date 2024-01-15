import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineLogin } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Log Out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {})
          .catch((error) => console.log(error));
        Swal.fire({
          title: "Logged Out!",
          text: "You Are Successfully Logged Out.",
          icon: "success",
        });
      }
      navigate("/");
    });
  };

  const navItems = (
    <>
      <li className="mr-2  text-[#444] font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="block lg:hidden mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="/appointment">Appointment</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 h-20 my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="w-16 lg:w-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="text-2xl">
          {user?.email ? (
            <>
              <div className="flex gap-4">
                <div className="text-2xl">
                  <Link to="/myCart">
                    <button>
                      <HiOutlineShoppingBag></HiOutlineShoppingBag>
                    </button>
                  </Link>
                </div>
                <div className="text-2xl">
                  <button>
                    <IoSearchSharp></IoSearchSharp>
                  </button>
                </div>
                <div className="text-2xl">
                  <button onClick={handleLogout}>
                    <HiOutlineLogout></HiOutlineLogout>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button>
                <HiOutlineLogin></HiOutlineLogin>
              </button>
            </Link>
          )}
        </div>
        <div>
          {/* <button className="btn btn-outline text-[#FF3811] hover:text-white hover:bg-[#FF3811] hover:border-[#FF3811] ">
            <Link to="/appointment">Appointment</Link>
          </button> */}
          <button className="btn hidden lg:block btn-outline text-[#FF3811]  hover:bg-[#FF3811] hover:border-[#FF3811] border w-28 h-12 bg-transparent relative overflow-hidden group z-10 rounded-lg">
            <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute bg-[#FF3811] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute bg-[#FF3811] rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
            <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">
              <Link to="/appointment">Appointment</Link>
            </span>
            <Link to="/appointment">Appointment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
