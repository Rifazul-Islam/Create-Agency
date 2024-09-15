import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Cover = ({ title }) => {
  return (
    <div className="bg-black py-[200px]">
      <h2 className="text-6xl font-semibold text-[#FFFFF5] text-center font-poppins">
        {title}
      </h2>
      <div className="flex justify-center text-white gap-2 text-2xl font-semibold items-center font-poppins pt-8">
        <Link to="/"> Home</Link> <IoIosArrowForward />
        <span className="text-[#B3F747]">{title} </span>
      </div>
    </div>
  );
};

export default Cover;
