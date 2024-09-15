import { IoCallSharp } from "react-icons/io5";
const Banner = () => {
  return (
    <div
      className="bg-[#000000] pb-10 px-4  text-white
         flex justify-between flex-col md:flex-row  w-full pt-44"
    >
      {/* Left side Text Part Area */}
      <div className="mx-auto">
        <h1 className="lg:text-[77px] font-poppins text-6xl md:text-left text-center font-semibold text-[#FDFDE1] leading-none">
          <span className="flex md:justify-normal justify-center items-center gap-3">
            A creative
            <img
              className="h-14 pt-3"
              src="data:image/png;base64,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"
              alt=""
            />
          </span>
          design studio
        </h1>
        <p className="mt-10 font-inter lg:w-[490px] md:w-[400px] text-[#FDFDE1]  text-lg">
          We're a creative design studio specializing in meeting the needs of
          the new generation. We offer innovative and so cutting-edge design
          solutions to help our clients stand out in today's fast-paced.
        </p>

        {/* Your Banner Profile  */}
        <div className="mt-20 flex flex-col md:flex-row items-center ">
          <div className="flex">
            <img
              className="w-14 h-14 rounded-full"
              src="https://aximo-react.vercel.app/assets/user1-DFxmj4MK.png"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full"
              src="https://aximo-react.vercel.app/assets/user3-BeUM1Eaj.png"
              alt=""
            />
            <img
              className="w-14 h-14 rounded-full"
              src="https://i.ibb.co/wBsbnkk/my-pro.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-[#FDFDE1] lg:mt-0 mt-5 ml-10 text-lg font-sans">
              Believed by more than a thousand people
            </p>
          </div>
        </div>

        {/* Button Area  */}
        <div className="flex gap-3 items-center  my-3 md:mt-11 ">
          <p
            className="btn btn-lg border  mt-10 relative text-[16px] 
        lg:flex hover:bg-none border-none bg-[#BFF747] hover:bg-[#f431e7] text-md w-[90%] md:w-[65%] mx-auto"
          >
            Book A Free Consutation
            <span
              className="border rounded-full absolute  right-1
         flex items-center z-10 justify-center w-14 h-14  bg-black "
            >
              <IoCallSharp className="text-3xl  text-white"></IoCallSharp>
            </span>
          </p>

          <p className=" -ml-12 -mt-5 z-20 hidden lg:flex">
            <img
              src="https://aximo-react.vercel.app/assets/shape1-QTZDjB63.png"
              alt=""
            />
          </p>
        </div>
      </div>

      {/* Right side Image Area */}
      <div className="lg:pt-0 pt-8 mx-auto overflow-hidden">
        <img
          className="mx-auto w-full md:w-80 h-auto md:h-[350px] border-4 rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110"
          src="https://aximo-react.vercel.app/assets/hero-thumb-f_JNxdoW.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
