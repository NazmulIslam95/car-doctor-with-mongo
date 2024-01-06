import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form?.name.value;
    const email = form?.email.value;
    const password = form?.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <Navbar></Navbar>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="lg:w-1/2 card shrink-0 max-w-sm border">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-4xl text-center font-semibold mb-4 text-[#444]">
                Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
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
                  value="Sign Up"
                  className="btn font-bold bg-[#FF3811] text-white hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811]"
                />
              </div>
            </form>
            <p className="text-center capitalize">or Sign Up With </p>
            {/* ----------------------------- */}
            <div className="mx-auto my-6">
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
            <p className="text-center capitalize mb-8">
              Do not have an account?{" "}
              <Link className="text-[#FF3811] font-bold" to="/login">
                Sign In
              </Link>
            </p>
            {/* ===== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
