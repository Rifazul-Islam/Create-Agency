import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import animation from "/public/test";

const SignIn = () => {
  return (
    <div>
      <div className=" bg-second  py-20">
        <div className=" flex flex-col justify-center items-center gap-10 lg:flex-row px-4 md:px-20 ">
          <div className="">
            <Lottie className="md:w-[500px]" animationData={animation} />
          </div>
          <div className="card w-full max-w-lg border-[1px] border-black">
            <h2 className="text-3xl pt-3 font-poppins font-semibold  text-center">
              Sign In
            </h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your email"
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
                  placeholder=" your password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 font-inter text-lg">
                <button className="btn hover:bg-primary bg-primary">
                  Sign In
                </button>
              </div>
            </form>
            <p className="text-md py-3 pt-4 text-slate-500 text-center">
              Not a member yet?
              <Link to="/signUp">
                <span className="text-blue-500 cursor-pointer pl-1">
                  Sign up here
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
