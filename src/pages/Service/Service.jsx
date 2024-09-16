import { TbBrandAirbnb } from "react-icons/tb";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdDesignServices } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import LineSlider from "../Home/LineSlider";
import Quality from "../Home/Quality";
import { FaCheck } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Cover from "../share/Cover";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFF5]">
      <div>
        <Cover title={"Service"} />
      </div>

      {/* product Area  */}
      <h2 className="text-center font-poppins text-[40px] md:text-[60px] font-semibold  leading-none md:pt-28 py-14 md:pb-28">
        We provide effective <br /> design solutions
        <span>
          <img
            className="h-14 pt-3 lg:inline  hidden pl-2"
            src="data:image/png;base64,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"
            alt=""
          />
        </span>
      </h2>

      {/* Card Area  */}
      <div className="pb-0 lg:px-20 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* card 1 */}

        <div className="card cursor-pointer hover:shadow-right duration-700  hover:duration-700 border-[1px] border-black p-4 mx-auto hover:bg-primary ">
          <span className="text-5xl">
            <TbBrandAirbnb></TbBrandAirbnb>
          </span>
          <div>
            <h2 className="text-2xl pt-2 pb-1.5 font-poppins font-semibold">
              Graphic Design
            </h2>
            <p className="text-md font-inter font-medium">
              Creating visual elements such as logos, branding materials, page
              layout techniques, brochures, & other marketing collateral.
            </p>
            <div className="card-actions font-inter justify-start pt-4 pb-2">
              <button className="btn btn-active btn-ghost">
                Read More
                <span className="text-2xl">
                  <CiLocationArrow1></CiLocationArrow1>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="cursor-pointer card hover:shadow-right duration-700  hover:duration-700 border-[1px] border-black p-4 mx-auto hover:bg-primary ">
          <span className="text-5xl">
            <MdDesignServices></MdDesignServices>
          </span>
          <div>
            <h2 className="text-2xl pt-2 pb-1.5 font-poppins font-semibold">
              UI/UX Design
            </h2>
            <p className="text-md font-inter font-medium">
              Focusing on user interface (UI) and user experience (UX) design
              enhance the usability and accessibility of digital products & app.
            </p>
            <div className="card-actions font-inter justify-start pt-4 pb-2">
              <button className="btn btn-active btn-ghost">
                Read More
                <span className="text-2xl">
                  <CiLocationArrow1></CiLocationArrow1>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="cursor-pointer card hover:shadow-right duration-700  hover:duration-700 border-[1px] border-black p-4 mx-auto hover:bg-primary ">
          <span className="text-5xl">
            <MdWeb></MdWeb>
          </span>
          <div>
            <h2 className="text-2xl pt-2 pb-1.5 font-poppins font-semibold">
              Motion Graphics
            </h2>
            <p className="text-md font-inter font-medium">
              Creating visual elements such as logos, branding materials, page
              layout techniques, brochures, & other marketing collateral.
            </p>
            <div className="card-actions font-inter justify-start pt-4 pb-2">
              <button className="btn btn-active btn-ghost">
                Read More
                <span className="text-2xl">
                  <CiLocationArrow1></CiLocationArrow1>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="cursor-pointer card hover:shadow-right duration-700  hover:duration-700 border-[1px] border-black p-4 mx-auto hover:bg-primary ">
          <span className="text-5xl">
            <MdDesignServices></MdDesignServices>
          </span>
          <div>
            <h2 className="text-2xl pt-2 pb-1.5 font-poppins  font-semibold">
              UI/UX Design
            </h2>
            <p className="text-md font-inter font-medium">
              Focusing on user interface (UI) and user experience (UX) design
              enhance the usability and accessibility of digital products & app.
            </p>
            <div className="card-actions font-inter justify-start pt-4 pb-2">
              <button className="btn btn-active btn-ghost">
                Read More
                <span className="text-2xl">
                  <CiLocationArrow1></CiLocationArrow1>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Line Slider  */}

      <div className="mt-10">
        <LineSlider></LineSlider>
      </div>

      {/* Quality Component Call */}

      <div>
        <Quality></Quality>
      </div>

      {/* FAQ Part Checked */}

      <div className="mb-10">
        <div className="px-8 lg:px-20">
          <h2 className="text-center md:text-5xl  lg:text-[60px] font-semibold   font-poppins text-3xl  leading-none pt-28 pb-10 lg:pb-28">
            These FAQs help <br className="lg:block hidden" /> clients learn
            about us
            <span>
              <img
                className=" hidden md:h-14 pt-2 lg:inline pl-2"
                src="data:image/png;base64,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"
                alt=""
              />
            </span>
          </h2>

          {/* FAQ Card Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* 01 */}
            <div className="p-2">
              <h2 className="md:text-[28px] text-[20px] font-bold font-inter flex items-center gap-3">
                <p className="text-sm md:w-8 md:h-8 h-6 w-6 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaQuestion />
                </p>
                <span> What services does agency offer ?</span>
              </h2>
              <p className="py-3 text-md font-inter">
                Clients often seek to understand the range of design services an
                agency provides, such as graphic design, web design, branding.
              </p>
            </div>

            {/* 02 */}

            <div className=" p-2">
              <h2 className="md:text-[28px] text-[20px] font-bold font-inter flex items-center gap-3">
                <p className="text-sm md:w-8 md:h-8 h-6 w-6 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaQuestion />
                </p>
                <span> What's your design process like ? </span>
              </h2>
              <p className="py-3 text-md font-inter">
                Our design process typically involves discovery, concept
                development, design, revisions based on feedback, and
                finalization.
              </p>
            </div>

            {/* 03 */}

            <div className="p-2">
              <h2 className="md:text-[28px] text-[20px] font-bold font-inter flex items-center gap-3">
                <p className="text-sm md:w-8 md:h-8 h-6 w-6 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaQuestion />
                </p>
                <span> What is your design process like ? </span>
              </h2>
              <p className="py-3 text-md font-inter">
                Explaining the design agency's process from initial concept to
                final delivery helps clients understand what to expect.
              </p>
            </div>

            {/* 04 */}

            <div className="p-2">
              <h2 className="md:text-[28px] text-[20px] font-bold font-inter flex items-center gap-2">
                <p className="text-sm md:w-8 md:h-8 h-6 w-6 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaQuestion />
                </p>
                <span> How much does design work cost? </span>
              </h2>
              <p className="py-3 text-md font-inter">
                The cost of our design services varies depending on the scope of
                the project. We provide customized quotes after discussing
                requirements.
              </p>
            </div>

            {/* 05 */}

            <div className="p-2">
              <h2 className="md:text-[28px] text-[20px] font-bold font-inter flex items-center gap-3">
                <p className="text-sm md:w-8 md:h-8 h-6 w-6 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaQuestion />
                </p>
                <span> Can we see samples of your work? </span>
              </h2>
              <p className="py-3 text-md font-inter">
                The cost of our design services varies depending on the scope of
                the project. We provide customized quotes after discussing
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
