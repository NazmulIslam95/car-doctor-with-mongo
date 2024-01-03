import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="w-1/2 card shrink-0 max-w-sm border">
            <form className="card-body">
              <h1 className="text-4xl text-center font-semibold mb-4 text-[#444]">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-primary bg-[#FF3811] border-none text-white hover:bg-[#f46f55]"
                />
              </div>
              <p className="text-center capitalize my-6">or Sign In With </p>
              {/* ----------------------------- */}
              <div className="mx-auto">
                <div className="flex items-center gap-3 sm:gap-x-5">
                  <button className="bg-[#F5F5F8] rounded-full p-2 ">
                    <LiaFacebookF className="text-[#3B5998]"></LiaFacebookF>
                  </button>

                  <button className="bg-[#F5F5F8] rounded-full  p-2">
                    <FaLinkedinIn className="text-[#0A66C2]"></FaLinkedinIn>
                  </button>

                  <button className="bg-[#F5F5F8] rounded-full p-2">
                    <FcGoogle></FcGoogle>
                  </button>
                </div>
              </div>
              {/* ----------------------------- */}
              <p className="text-center capitalize mt-5">
                Do not have an account?{" "}
                <Link className="text-[#FF3811] font-bold" to="/signUp">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
