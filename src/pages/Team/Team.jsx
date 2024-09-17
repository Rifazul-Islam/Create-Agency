import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Cover from "../share/Cover";
import useMenu from "../../hook/useMenu";
import { useEffect } from "react";
import ButtonComponent from "../share/ButtonComponent";

const Team = () => {
  const [scrollButtonRef] = useMenu();

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFF5]">
      <div>
        <Cover title={"Our Team"} />
      </div>

      <div>
        <ButtonComponent scrollValue={scrollButtonRef} />
      </div>

      <div className="bg-[#FFFFF5] px-8 lg:px-20 lg:pb-32 py-10">
        <h2 className="text-center text-5xl lg:text-[65px] font-semibold  leading-none pt-28 lg:pb-28 pb-10">
          We have a team of <br />
          <p className="flex items-center justify-center gap-2">
            <span> creative people </span>

            <span>
              <img
                className="h-14 pt-3 hidden lg:inline"
                src="data:image/png;base64,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"
                alt=""
              />
            </span>
          </p>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* card 01 */}
          <div>
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team1-DmWE10zh.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins font-bold mt-4">
                Andrew Mark
              </h2>
              <p className="text-lg font-inter"> Project Executive</p>
            </div>
          </div>

          {/* card 02 */}
          <div className=" md:pt-0">
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team2-CCsDsUp2.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins  font-bold mt-4">
                Jack Mark
              </h2>
              <p className="text-lg font-inter"> Project Manager</p>
            </div>
          </div>

          {/* card 03 */}

          <div className="pt-4 lg:pt-0">
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team3-Dq8iIK3F.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins  font-bold mt-4">
                Aslam Shah
              </h2>
              <p className="text-lg font-inter">Full Stack Developer</p>
            </div>
          </div>

          {/* card 04 */}

          <div className="pt-4 lg:pt-0">
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team4-CN3ED17F.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins font-bold mt-4">
                Khondhokar Alam
              </h2>
              <p className="text-lg font-inter"> Mern Stack Developer</p>
            </div>
          </div>

          {/* card 05 */}
          <div className="pt-4 lg:pt-3">
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team8-CTmFwWEI.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins  font-bold mt-4">
                Andrew Mark
              </h2>
              <p className="text-lg font-inter"> Project Executive</p>
            </div>
          </div>

          {/* card 06 */}
          <div className="pt-4 lg:pt-3">
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team5-0qHpgDXP.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins font-bold mt-4">
                Jack Mark
              </h2>
              <p className="text-lg font-inter"> Project Manager</p>
            </div>
          </div>

          {/* card 07 */}

          <div className="pt-4 lg:pt-3">
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team7-ChiLFcJu.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins  font-bold mt-4">
                Aslam Shah
              </h2>
              <p className="text-lg font-inter">Full Stack Developer</p>
            </div>
          </div>

          {/* card 08 */}

          <div className="pt-4 lg:pt-3">
            <div className="relative group">
              <img
                className="lg:w-[300px] lg:h-[300px] border-4 border-black rounded-md"
                src="https://aximo-react.vercel.app/assets/team6-BKK8Qye5.png"
                alt=""
              />
              {/* Socail Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="space-x-4 flex">
                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaTwitter />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </p>

                  <p className="w-8 h-8 rounded-full text-white bg-black flex items-center justify-center border border-white">
                    <Link>
                      <FaSquareInstagram />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-poppins  font-bold mt-4">
                Khondhokar Alam
              </h2>
              <p className="text-lg font-inter"> Mern Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
