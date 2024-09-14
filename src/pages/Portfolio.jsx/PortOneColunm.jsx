import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
const PortOneColunm = () => {
  return (
    <div className="bg-[#FFFFF5]">
      <div className="bg-black py-[200px]">
        <h2 className="text-6xl font-semibold text-[#FFFFF5] text-center font-poppins">
          Portfolio One Column
        </h2>
        <div className="flex justify-center text-white gap-2 text-2xl font-semibold items-center font-poppins pt-8">
          <Link to="/"> Home</Link> <IoIosArrowForward />
          <span className="text-[#B3F747]">Portfolio One Column </span>
        </div>
      </div>

      {/* port One Colunm image area */}
      <div className="px-4 lg:px-20 md:py-14">
        <h2 className="text-center  text-4xl lg:text-[60px] font-bold  leading-none md:py-24 py-10">
          Have a wide range of <br />
          creative projects
          <span>
            <img
              className="h-14 pt-3 inline"
              src="data:image/png;base64,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"
              alt=""
            />
          </span>
        </h2>

        <div className="pt-5">
          <div className="relative group">
            <img
              className="rounded-lg md:h-[550px] h-auto w-full"
              src="https://aximo-react.vercel.app/assets/p_1-CeAe8OPw.png"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="w-20 h-20 rounded-full  bg-primary flex items-center justify-center border-[2px] border-black text-3xl">
                <Link to="/port_details">
                  <FaArrowTrendUp />
                </Link>
              </p>
            </div>
          </div>
          <div className="py-6 flex flex-col md:flex-row  justify-between items-center">
            <h2 className="text-3xl font-poppins font-semibold">
              Product Design
            </h2>
            <p className="font-inter md:mt-0 mt-4 text-lg ">
              Developing the look and feel of physical products, <br />
              aesthetics, and functionality.
            </p>
          </div>
        </div>

        {/* 02 image */}

        <div className="pt-5">
          <div className="relative group">
            <img
              className="rounded-lg md:h-[550px] h-auto w-full"
              src="https://aximo-react.vercel.app/assets/p_3-BZZ6O9JL.png"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="w-20 h-20 rounded-full  bg-primary flex items-center justify-center border-[2px] border-black text-3xl">
                <Link to="/port_details">
                  <FaArrowTrendUp />
                </Link>
              </p>
            </div>
          </div>
          <div className="py-6 flex flex-col md:flex-row  justify-between items-center">
            <h2 className="text-3xl font-poppins font-semibold">
              App UI/UX Design
            </h2>
            <p className="font-inter md:mt-0 mt-4 text-lg text-center md:text-left ">
              Designing the UI/UXe for mobile apps and web applications
              <br className="md:block hidden" /> to ensure usability &
              engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortOneColunm;
