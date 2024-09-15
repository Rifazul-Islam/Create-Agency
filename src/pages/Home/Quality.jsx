import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Quality = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [tow, setTow] = useState(false);
  const [three, setThree] = useState(false);

  return (
    <div className="bg-[#FFFFF5] md:pb-6 lg:pb-20 pt-7 lg:pt-32 p-4 flex  flex-col lg:flex-row  lg:px-32 gap-4">
      {/* left side  */}
      <div>
        <h2 className="md:w-[700px] lg:text-left text-center w-full lg:text-[60px] text-4xl font-bold font-poppins leading-none">
          Our high-quality
          <span>
            <img
              className="h-14 pt-3 hidden lg:inline"
              src="data:image/png;base64,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"
              alt=""
            />
          </span>
          <span> Working processes</span>
        </h2>

        <p className="w-full lg:w-[510px] py-6 text-lg font-inter">
          We focus at every stage on effective communication and collaboration
          between the client and ensuring that the final design meets the client
          s objectives and expectations.
        </p>
      </div>

      {/* Right side */}
      <div className=" mt-6 lg:mt-0 ">
        {/* one State  */}

        <div
          className={`border rounded-2xl border-black transition-all duration-1000 ${
            isTrue ? "bg-[#BFF747]" : "bg-none"
          }`}
        >
          <h2
            onClick={() => setIsTrue(!isTrue)}
            className="text-2xl cursor-pointer font-sans font-bold p-3 py-2 flex items-center justify-between gap-[148px]"
          >
            01/ Project idea
            {isTrue ? (
              <span>
                <IoIosArrowUp />
              </span>
            ) : (
              <span>
                <IoIosArrowDown />
              </span>
            )}
          </h2>

          <div
            className={`overflow-hidden transition-all duration-1000 ${
              isTrue ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-md font-inter pb-3 p-2">
              The Process starts with a detailed discussion with the client to
              understand their idea & goals.
            </p>
          </div>
        </div>

        {/* tow State  */}

        <div
          className={`border rounded-2xl border-black mt-5 transition-all duration-1000 ${
            tow === true ? "bg-[#BFF747]" : "bg-none"
          }`}
        >
          <h2
            onClick={() => setTow(!tow)}
            className="text-2xl cursor-pointer font-sans font-bold p-3 py-2 flex items-center justify-between "
          >
            02/ BrainStorings
            {tow ? (
              <span>
                <IoIosArrowUp />
              </span>
            ) : (
              <span>
                <IoIosArrowDown />
              </span>
            )}
          </h2>

          <div
            className={`overflow-hidden transition-all duration-1000 ${
              tow ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-md pb-3 p-2">
              The Process starts with a detailed discussoion with the client to
              understand their idea & goals.
            </p>
          </div>
        </div>

        {/* Three State  */}

        <div
          className={`border rounded-2xl border-black mt-5  transition-all duration-1000 ${
            three === true ? "bg-[#BFF747]" : "bg-none"
          }`}
        >
          <h2
            onClick={() => setThree(!three)}
            className="text-2xl cursor-pointer font-sans font-bold p-3 py-2 flex items-center justify-between "
          >
            03/ Launch
            {three ? (
              <span>
                <IoIosArrowUp />
              </span>
            ) : (
              <span>
                <IoIosArrowDown />
              </span>
            )}
          </h2>

          <div
            className={`overflow-hidden transition-all duration-1000 ${
              three ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-md pb-3 p-2">
              The Process starts with a detailed discussoion with the client to
              understand their idea & goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
