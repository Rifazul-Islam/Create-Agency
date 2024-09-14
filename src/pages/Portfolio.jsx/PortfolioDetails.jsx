import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PortfolioDetails = () => {
  return (
    <div className="bg-[#FFFFF5]">
      <div className="bg-black py-[200px]">
        <h2 className="text-6xl font-semibold text-[#FFFFF5] text-center font-poppins">
          Portfolio Details
        </h2>
        <div className="flex justify-center text-white gap-2 text-2xl font-semibold items-center font-poppins pt-8">
          <Link to="/"> Home</Link> <IoIosArrowForward />
          <span className="text-[#B3F747]">Portfolio Details </span>
        </div>
      </div>

      <div className="pt-5 px-4 lg:px-32 md:py-14">
        <div className="">
          <img
            className=" border-4 border-black rounded-lg md:h-[520px] h-auto my-4  w-full"
            src="https://aximo-react.vercel.app/assets/p_1-CeAe8OPw.png"
            alt=""
          />
        </div>

        <div className="mt-5 hidden md:flex  items-center gap-24 ">
          <p>
            <span className="text-2xl font-bold font-inter">Client :</span>
            <span className="text-lg font-inter font-medium">
              Alfado Company,UK
            </span>
          </p>
          <p>
            <span className="text-2xl font-bold font-inter"> Date :</span>
            <span className="text-lg font-inter font-medium"> Septembar </span>
          </p>
          <p>
            <span className="text-2xl font-bold font-inter">Duration :</span>
            <span className="text-lg font-inter font-medium">Two, Month</span>
          </p>
          <p>
            <span className="text-2xl font-bold font-inter"> Cost :</span>
            <span className="text-lg font-inter font-medium"> 50k USD</span>
          </p>
        </div>
      </div>

      {/* Portpolio Details Area  */}

      <div className="px-4 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-3 mx-auto  gap-8">
        <div className=" col-span-2 p-3 ">
          <h2 className="md:text-6xl text-4xl font-bold font-inter pb-3">
            How we initiate and resolve the project
            <span>
              <img
                className="h-14 pt-3 inline"
                src="data:image/png;base64,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"
                alt=""
              />
            </span>
          </h2>
          <p className="text-lg lg:text-[24px] font-inter mt-4">
            The project began when a leading technology identified a mar - ket
            need for an innovative and energy-efficient smart home thermostat.
          </p>

          {/* part 01 */}
          <div className="mt-8 ">
            <div>
              <h2 className="text-3xl font-inter font-bold">
                1. Concept Development:
              </h2>
              <p className="py-3 font-inter font-normal  text-lg flex justify-center gap-1">
                UI refers to the visual elements and the overall look and feel
                of a product. It encompasses the design of screens, pages,
                buttons, icons, and any other visual elements users interact
                with.
              </p>
            </div>
          </div>

          {/* part 02 */}
          <div className="mt-8 ">
            <div>
              <h2 className="text-3xl font-inter font-bold">
                2. Manufacturing and Production:
              </h2>
              <p className="py-3 font-inter font-normal  text-lg flex justify-center gap-1">
                UI refers to the visual elements and the overall look and feel
                of a product. It encompasses the design of screens, pages,
                buttons, icons, and any other visual elements users interact
                with.
              </p>
            </div>
          </div>

          {/* part 03 */}
          <div className="mt-8 ">
            <div>
              <h2 className="text-3xl font-inter font-bold">
                3. Success and Impact:
              </h2>
              <p className="py-3 font-inter font-normal  text-lg flex justify-center gap-1">
                UI refers to the visual elements and the overall look and feel
                of a product. It encompasses the design of screens, pages,
                buttons, icons, and any other visual elements users interact
                with.
              </p>
            </div>
          </div>
        </div>

        {/* right site images use */}
        <div className="md:col-span-1 col-span-2">
          <img
            className="rounded-2xl border-4 border-black"
            src="https://aximo-react.vercel.app/assets/p_single2-wKRyDx5m.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
