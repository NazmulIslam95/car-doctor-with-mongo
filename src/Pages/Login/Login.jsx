import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";

import Swal from "sweetalert2";
import useAuth from "../../Components/Hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);

        if (result.user.email) {
          navigate(location?.state ? location?.state : "/");
          Swal.fire({
            icon: "success",
            title: "WOW...",
            text: "Logged In Successfully!",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-4">
      {/* <div> */}
      <Navbar></Navbar>
      <div className="hero min-h-screen mt-2">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="lg:w-1/2 card shrink-0 max-w-sm border">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-4xl text-center font-semibold mb-4 text-[#444]">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
                  className="btn font-bold bg-[#FF3811] text-white hover:bg-white hover:text-[#FF3811] hover:border hover:border-[#FF3811]"
                />
              </div>
            </form>
            <p className="text-center capitalize">or Sign In With </p>
            {/* ----------------------------- */}
            <div className="mx-auto my-6">
              <div className="flex items-center gap-3 sm:gap-x-5">
                <button className="bg-[#F5F5F8] rounded-full p-2 ">
                  <LiaFacebookF className="text-[#3B5998]"></LiaFacebookF>
                </button>

                <button className="bg-[#F5F5F8] rounded-full  p-2">
                  <FaLinkedinIn className="text-[#0A66C2]"></FaLinkedinIn>
                </button>

                <button
                  //   onClick={handleGoogleSignIn}
                  className="bg-[#F5F5F8] rounded-full p-2"
                >
                  <FcGoogle></FcGoogle>
                </button>
              </div>
            </div>
            {/* ----------------------------- */}
            <p className="text-center capitalize mb-8">
              Do not have an account?{" "}
              <Link className="text-[#FF3811] font-bold" to="/signUp">
                Sign Up
              </Link>
            </p>
            {/* ==== */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
