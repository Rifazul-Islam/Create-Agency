import React from "react";
import Business from "../Home/Business";
import LineSlider from "../Home/LineSlider";
import TeamsMember from "../Home/TeamsMember";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Cover from "../share/Cover";

const About = () => {
  return (
    <div className="bg-[#FFFFF5]">
      <div>
        <Cover title={"About Us"} />
      </div>

      <div className="px-4 lg:px-20">
        <Business></Business>
      </div>

      {/* About Gellary  Area   */}

      <div className="lg:px-20">
        <h2 className="text-center font-poppins  text-4xl lg:text-[55px] font-semibold  leading-none pt-20 pb-8">
          We think our story is worth <br /> sharing with you
        </h2>

        {/* image Area  */}

        {/* one Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4">
          {/* left  site image Area */}
          <div className="lg:pt-0 border-4 border-black rounded-xl  mx-auto overflow-hidden my-10 sm:col-span-2">
            <img
              className="mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110"
              src="https://aximo-react.vercel.app/assets/story1-jc-ubBRb.png"
              alt=""
            />
          </div>

          {/* right  site image Area */}
          <div className="lg:pt-0 border-4 border-black rounded-xl mx-auto overflow-hidden my-10 col-span-1">
            <img
              className="mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110"
              src="https://aximo-react.vercel.app/assets/story2-Cl4OWevI.png"
              alt=""
            />
          </div>
        </div>

        {/* Two Image Area */}

        <div className="grid grid-cols-1 lg:grid-cols-3 px-4">
          {/* left site image */}
          <div className="lg:pt-0  border-4 border-black rounded-xl mx-auto overflow-hidden my-10 sm:col-span-1">
            <img
              className="mx-auto w-full  lg:h-[350px]  rounded-md  transition duration-500 hover:scale-110"
              src="https://aximo-react.vercel.app/assets/story3-LRTsmqAu.png"
              alt=""
            />
          </div>

          {/* right site image */}
          <div className="lg:pt-0 border-4 border-black rounded-xl  mx-auto overflow-hidden my-10 col-span-2">
            <img
              className="mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110"
              src="https://aximo-react.vercel.app/assets/story4-CtwmxJh0.png"
              alt=""
            />
          </div>
        </div>

        {/* About Text Area */}

        <div className="flex flex-col md:flex-row px-4 justify-center items-center gap-4 pb-10">
          {/* left text */}
          <div>
            <h2 className="text-2xl font-sans font-bold"> Our Core Vision </h2>
            <p className="text-lg font-sans pt-1">
              Empowering businesses to create impactful and visually stunning
              brand experiences that captivate audiences and drive success in
              the digital age
            </p>
          </div>

          {/* right text */}

          <div>
            <h2 className="text-2xl font-sans font-bold"> Our Main Mision </h2>
            <p className="text-lg font-sans pt-1">
              Our mission is to collaborate with businesses of all sizes, from
              startups to established brands, to provide innovative and creative
              design solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <LineSlider></LineSlider>
      </div>

      <div>
        <TeamsMember></TeamsMember>
      </div>
    </div>
  );
};

export default About;
