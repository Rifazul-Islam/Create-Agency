import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Reivews from "../Home/Reivews";
import LineSlider from "../Home/LineSlider";
import { useEffect, useState } from "react";
import Cover from "../share/Cover";
import useMenu from "../../hook/useMenu";
import { FaArrowUp } from "react-icons/fa6";
const Pricing = () => {
  const [inCrement, setInCrement] = useState(false);

  // scroll button right bottom show button
  const [scrollButtonRef] = useMenu();

  // first to show page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFF5] ">
      {/* Header Area */}
      <div>
        <Cover title={"Pricing"}> </Cover>
      </div>

      {/* Package Buy Area */}
      <div className="py-10">
        <h2 className="text-center text-4xl md:text-5xl  lg:text-[60px] font-semibold  font-poppins leading-none pt-28 lg:pb-28 pb-10">
          Pick from one of our <br /> ready packages
          <span>
            <img
              className="h-14 pt-2 hidden lg:inline pl-2"
              src="data:image/png;base64,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"
              alt=""
            />
          </span>
        </h2>

        {/* billed area */}
        <div className="flex font-inter items-center justify-center gap-5">
          <span className="text-xl  font-semibold"> Billed monthly</span>
          <span onClick={() => setInCrement(!inCrement)}>
            <input
              type="checkbox"
              value="ff"
              className="toggle theme-controller"
            />
          </span>
          <span className="text-xl  font-semibold"> Billed annually</span>
        </div>

        {/* Pricing Card Area */}

        <div className="pt-10 px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* card 01 */}
          <div className="border-[2px] border-black p-5 rounded-xl card  mx-auto">
            <h3 className="text-lg font-poppins font-bold">
              Web Design Package
            </h3>
            <p className="py-4 font-inter font-extrabold text-3xl">
              {inCrement ? "$302" : "$299"}
            </p>
            <p className="text-md font-medium font-inter mb-6">
              Web design packages offered a range of services and features to
              create websites
            </p>

            {/* Pricing Description area */}
            <div className="pt-4 border-t space-y-4 font-inter">
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Consultation & Discovery
                </span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">Responsive Design</span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  E-commerce Integration
                </span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">Custom Web Design</span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Testing and Quality
                </span>
              </p>
            </div>

            {/* btn Area */}
            <div className=" py-3 mt-5 font-inter">
              <button className="btn btn-outline border-[2px] text-lg hover:bg-[#BFF747] rounded-xl hover:text-black w-full">
                Select the package
              </button>
            </div>
          </div>

          {/* card 02 */}
          <div className="border-[2px] border-black p-5 rounded-xl card  mx-auto">
            <h3 className="text-lg font-poppins font-bold"> UX/UI Package</h3>
            <p className="py-4 font-inter font-extrabold text-3xl ">
              {inCrement ? "$452" : "$399"}
            </p>
            <p className="text-md font-medium font-inter mb-6">
              UX/UI package offered a set of services aimed at designing
              user-friendly UI/UX
            </p>

            {/* Pricing Description area */}
            <div className="pt-4 border-t space-y-4 font-inter">
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Information Architecture
                </span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Wireframing & Prototyping
                </span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">Usability Testing</span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold"> Visual Design &</span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  User Interface (UI) Design
                </span>
              </p>
            </div>

            {/* btn Area */}
            <div className=" py-3 mt-5 font-inter">
              <button className="btn btn-outline border-[2px] text-lg hover:bg-[#BFF747] rounded-xl hover:text-black w-full">
                Select the package
              </button>
            </div>
          </div>

          {/* card 03 */}
          <div className="border-[2px] border-black p-5 rounded-xl card  mx-auto">
            <h3 className="text-lg font-poppins font-bold">Branding Package</h3>
            <p className="py-4 font-inter font-extrabold text-3xl">
              {inCrement ? "$512" : "$499"}
            </p>
            <p className="text-md font-inter font-medium mb-6">
              Branding package typically includes a comprehensive set of brand's
              identity
            </p>

            {/* Pricing Description area */}
            <div className="pt-4 border-t space-y-4 font-inter ">
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold"> Brand Guidelines</span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Stationery & Website Design
                </span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Social Media Assets
                </span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Signage & Packaging Design
                </span>
              </p>
              <p className="flex  items-center gap-2">
                <p className="text-sm w-7 h-7 text-black font-bold  flex justify-center items-center bg-[#BFF747] rounded-full">
                  <FaCheck />
                </p>
                <span className="text-lg font-semibold">
                  Brand Launch Support
                </span>
              </p>
            </div>

            {/* btn Area */}
            <div className=" py-3 mt-5 font-inter">
              <button className="btn btn-outline border-[2px] text-lg hover:bg-[#BFF747] rounded-xl hover:text-black w-full">
                Select the package
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Client Review Component */}

      <div>
        <Reivews></Reivews>
      </div>

      <div className="pt-8">
        <LineSlider></LineSlider>
      </div>

      {/* FAQ Area  */}

      <div className="py-10 flex flex-col md:flex-row lg:px-16 justify-center mt-14 gap-y-5 px-3 ">
        {/* left Side  */}
        <div className="">
          <h2 className="text-4xl pb-3 lg:text-[60px] font-poppins font-semibold  leading-none lg:pb-8">
            Read our FAQ
            <span>
              <img
                className="h-14 pt-2  hidden lg:inline pl-2"
                src="data:image/png;base64,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"
                alt=""
              />
            </span>
            <br /> for clarification.
          </h2>
          <p className="text-lg font-inter">
            We understand that you considering our services, that's why we have
            curated a collection of frequently asked questions.
          </p>

          <button className="btn btn-active font-inter btn-neutral my-10 rounded-xl ">
            Contact Us
            <span className="text-lg">
              <FaArrowRight />
            </span>
          </button>
        </div>

        {/* right Side  */}
        <div className="">
          {/* 01 */}
          <h2 className="text-2xl font-bold font-inter">
            Can I buy multiple plans?
          </h2>
          <p className="text-md lg:text-lg font-medium pt-2 font-inter">
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>

          {/* 02 */}
          <h2 className="text-2xl mt-6 font-bold font-inter">
            What is the cancelation policy?
          </h2>
          <p className="text-md mb-6 lg:text-lg font-medium pt-2 font-inter">
            The cancellation policy refers to the rules and guidelines
            established by a business regarding the cancellation of services,
            products.
          </p>

          {/* 03 */}
          <h2 className="text-2xl mt-6 font-bold font-inter">
            How much does design work cost?
          </h2>
          <p className="text-md mb-6 lg:text-lg font-medium pt-2 font-inter">
            The cost of our design services varies depending on the scope of the
            project. We provide customized quotes after discussing requirements.
          </p>
        </div>
      </div>

      {/* Scroll Button  */}
      <div ref={scrollButtonRef} className="fixed right-5 bottom-5 hidden">
        <button className="bg-primary  p-3 rounded-lg shadow-lg">
          <FaArrowUp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Pricing;
