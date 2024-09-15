import { IoMdPlayCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Business = () => {
  return (
    <>
      <div className="pt-5 flex flex-col lg:flex-row justify-center  items-center gap-8 lg:gap-20">
        <div className="md:px-5">
          <h2 className="text-4xl lg:text-left text-center md:text-[60px] font-poppins font-bold  leading-none pt-28 lg:pb-28">
            We make your
            <span>
              <img
                className="h-14 pt-3 hidden lg:inline"
                src="data:image/png;base64,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"
                alt=""
              />
            </span>
            <br className="hidden lg:block" /> business stand out Things.
          </h2>
        </div>
        <div className="lg:w-96">
          <p className="text-md md:text-xl font-inter font-medium">
            We work closely with our clients to know their objectives, target
            audience, unique needs, and practical design solutions.
          </p>
        </div>
      </div>

      {/* Expreriece Section Area */}

      <div className=" flex flex-col mt-4 lg:flex-row justify-center pb-16">
        <div className="relative">
          {/* Image Area */}
          <img
            className="w-[700px] h-[390px] border-4 rounded-lg block border-black"
            src="https://aximo-react.vercel.app/assets/video-bg-Dyw4c18R.png"
            alt=""
          />

          <Link
            to="https://www.youtube.com/watch?v=4Mpn3bTGu8A "
            target="blank"
          >
            <button className="absolute inset-0 flex items-center justify-center   text-[20px]">
              <span className="h-16 w-16 text-[#BFF747] text-7xl">
                <IoMdPlayCircle></IoMdPlayCircle>
              </span>
            </button>
          </Link>
        </div>

        {/* Right Side  */}
        <div className="w-[90%] lg:w-80 md:w-[70%] mx-auto lg:mt-0 mt-5 bg-black border rounded-3xl text-white">
          {/* exprerice Counter 01 */}
          <div className="text-center  mt-10 ">
            <CountUp
              className="text-[#BFF747] font-bold text-5xl"
              start={0}
              end={85}
              duration={15}
            ></CountUp>
            <span className="text-[#BFF747] font-bold text-5xl">+</span>
            <p className="pt-2 text-[22px] font-sans font-semibold">
              Years of experience
            </p>
          </div>

          <div className="w-64 mx-auto border border-slate-700 my-6"> </div>

          {/* Successful projects Counter 02 */}
          <div className="text-center  mt-10 ">
            <CountUp
              className="text-[#BFF747] font-bold text-5xl"
              duration={10}
              start={0}
              end={60}
            ></CountUp>
            <span className="text-[#BFF747] font-bold text-5xl">+</span>
            <p className="pt-2 text-[22px] font-sans font-semibold">
              Successful projects
            </p>
          </div>

          <div className="w-64 mx-auto border border-slate-700 my-6"> </div>

          {/* Client satisfaction rate Counter 03 */}
          <div className="text-center  mt-10 pb-5">
            <CountUp
              className="text-[#BFF747] font-bold text-5xl"
              duration={10}
              start={0}
              end={99}
            ></CountUp>
            <span className="text-[#BFF747] font-bold text-5xl">%</span>
            <p className="pt-2 text-[22px] font-sans font-semibold">
              Client satisfaction rate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;
