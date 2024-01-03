import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";



const Navbar = () => {
  const navItems = (
    <>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="about">About</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="services">Services</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="blog">Blog</NavLink>
      </li>
      <li className="mr-2 text-[#444] font-semibold text-lg">
        <NavLink to="contact">Contact</NavLink>
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
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="text-2xl">
            <HiOutlineShoppingBag></HiOutlineShoppingBag>
        </div>
        <div className="text-2xl">
            <IoSearchSharp></IoSearchSharp>
        </div>
        <div>
          <button className="btn btn-outline text-[#FF3811] btn-error hover:text-white">
            <Link to="/appointment">Appointment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
