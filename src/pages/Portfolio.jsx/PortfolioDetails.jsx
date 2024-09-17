import { useEffect } from "react";
import useMenu from "../../hook/useMenu";
import Cover from "../share/Cover";
import ButtonComponent from "../share/ButtonComponent";

const PortfolioDetails = () => {
  const [scrollButtonRef] = useMenu();

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#FFFFF5]">
      <div>
        <Cover title={"Portfolio Details"} />
      </div>

      <div>
        <ButtonComponent scrollValue={scrollButtonRef} />
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

      <div className="px-4 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 mx-auto  gap-8">
        <div className="col-span-2 p-3">
          <h2 className="lg:text-6xl md:text-5xl text-[38px] leading-none font-semibold font-inter pb-3 lg:text-left text-center  ">
            How we initiate and
            <span> resolve the project</span>
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
        <div className="lg:col-span-1 col-span-2">
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
