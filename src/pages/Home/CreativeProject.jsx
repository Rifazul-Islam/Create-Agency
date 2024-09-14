// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const CreativeProject = () => {
  return (
    <div className="bg-[#000] text-[#fff] px-8 lg:px-20">
      <h2 className="text-center text-4xl text-second  font-poppins md:text-[60px] font-bold  leading-none py-28 ">
        Have a wide range of <br />
        <p className="flex items-center justify-center mt-1 gap-3">
          <span> creative projects</span>
          <span className="ml-2">
            <img
              className="h-14 pt-3 hidden md:inline"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABGCAYAAABrEgIKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdQSURBVHgB7Zx/UhNJFMdf9wRN1K2KJ3A8gfEGM+uK7n96gsUTiCcwnEA8AfEE6F8ruFbGExhPYHMDqvxBoEj3vtczIxCSmf6Zqt3iU4UgzCTDt19/+/XrbhhEYqyyPkyvPQfGBnl37ylEYnz0OAVQOwDsWd57LyASHCLw8fvDDZhe/4wPPwQFT7Ro0VAv8Z8MP38dHz3aKYULT1ChPnz7I8OHHfOEYwtDWn9f/ry2CfHIzn29EUswBgE4C/8LD33+XQ6x+92GwFDkVo2y8D1BqW3onrzOWXEInnhFFHWp8fTRK2pFWCYSoaA//vY4g8CgSH9Bw3vqro8W8PEIrcATp4j6ZdQKNtGsTf2nyHt7OQSiiuKvFrcICXLrQe/DCBywFkqHO2evLAQ6o3t8O0Q3IMiHQHuSNQJ/7dx2hLTuejxJhJNIENzUM1gh1kJhSxQYhy/AAZ6w5xAAnX6cG1XtsI8mwsnMcQTbVlK9AVsCmXqjiTe//wvXpNR51GMnJ9SNBNjS0QmiM1V+lIEtCl7nN/a2wRFnofLbZMosx1zF1pwzv0zdQWgGExTJyx+98igdxgqegSWepp6BHfiMzHuu6T2FyW/uv8Um27K5x9XUnUx8Jp+GmCwHmevhgwzxU2F8g6OpW5u4ZFv5rQ8TCEC4SfH0mMJbGF9vaerWJk7mfVM3YBCCCaXNHcPcwtwtTd1KWOFr3vMELbPoMOfmfmVp6pnhdUKPxoEJXrijZFRi2Jtca2rqdiYep9IZpcL5gMJeqXYTNTR1YxMn86YpVgSiCKVh3MzcW0zdwsRHIc17nmhCleHPTJLRFlM3MnGBJRynibop8SIKzCsNLaaeQTNCVwQC1bmWEVUowqTSQKa+KKqMTJyrF3nEZapfbwMroLXSQPXt6fVX579F3oQm3tztyLyv0xQqPkFWYUzQpqzk55bq6EjO5CfgvM8ZUOqQLr1SwVtMKqMtrM6zMqGI8Y/1J5iQ7oI/ZN73Y/vSeVbS9WrKSoPF5HkZp5hUrlAkokMru1TYkhIOlFJC4sd6oBn3IrBrvUHvycAVWkz9LU5SSfx9lKXJbK2fAAzQJlJccbqDy1yfOkDDr4KMUydkDBJ8EhQP9OSWMRJMSKkOFMBESXnYuXU68WlNxZhfJCjwjiQSY01eGzCl+rzD70HphSlIhZ/RQ5O5GyQ76Cx9tdJ0M/qS88rKOL7CNIHxz/VSRGxdOVNfoIrE086p+LNXCGgg4d4rMSlNe5qiilKN6RT6WgwdFXCH7kORB1APENp0GAl/Bltu2QyjR0FosCvrlq+6NGAkGo1kdpQjJFG+9j18v/4FMQKBPWorjlD/M0iolY56/2WuhDLkSihDroQy5EooQzoQB1pBnpTbA+ELJmyHkknKcqmkm4IvmAxLYG+41Akx6NdmrEoP1MB1W1ITbkKVS1ICEyYhAQ70AzOdK01aakNDPWXy3dskVf7g1v7SaZaubf1YS2kKQh/4jKnOszATp+3c4ECTUKKextAUhisucH16AklyiOUNAY7MpHqN2XkG7oi21d9qijWpPi4x/v5wgL+Hjj4tIlDmrtImETtU19FRUQojKCqgOz2MNTun+ZVXdYe6lyfnhC7mf1buT+0OYAZp3aU552Kl9Sj9INP1XZwZPwEfTrFGHrGCsIiVjnq6Bu4rEtFRO3FPQ1xmZULpGjjtJm6mgBkucSm9ciMarkvna+yxWUnXq/aE02iXLr2o3Dq4eeGe1hq7Gua9fau9Wa6sJqKUotZPG664tPuE0gzJ2vYwsGGMExGLiC7U+Hj9JcZtiy8t3gHDpyfbrduI1tRurBNVF54FIvIPrbpINjS4tFj0TdpzRRl4043lmRc1jm3u0YSiVk4Y7BhcOmrK5jGPMVngjG7uUYQqWxfN22TOddocMdU2ngLa2RgfrXvtYW8iTkSVrZsaXClMEkep4B0YEc/cgwulzdv41JPZNkZ+fDwy3hsaydyDH5U1NO+awuQiI1OviWTuwYSiVux0EhPzrhnZbNcxNPWa4OYeMKJaMu95ZtJoQ2yNhanXBDX3IEKV54otRMLqp8uJAnNTrwln7t5CafOms8U2MGYVTTVWpl4TyNz9TqlTpdDOvMtj9t2p0y45K1OvCWTuzkLpVkq4/aYw2innUT21NPUab3N3jyimdsFlRcXSxOdxMPUaL3N3Ekqbd7lrxA5HE5/H3tRr0Nxpou6AtVAo0nNr865xNPF5nEy9JmFOf7fFPqIUe+d0Qp3mdb33IwiAk6kTJK7CxsJVJrDE5e8eiN9v7m9UxzeExa0FBMTa1HEQAcbv02lVl8HEu2aOXXETH8JgJx27G/qEgeGqc0GTb99TV/6Hr7v0twRY3tIdixjHMFpMXZRn9/byEEfTQh2+rrvj3cXn9JiLp7Wy0NT1/7F8Qxv2A3kiEWW5CkeVjer4WAraxPfuQiQ+/ny0XW2i1Ute0DsextgOEGXbT9WSIxRsiE9/ByJSmrq6p33oRrxl9n8B0KJdKCFgj60AAAAASUVORK5CYII="
              alt=""
            />
          </span>
        </p>
      </h2>

      {/* Carusal or Slider  */}

      <div className="pb-10 ">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="border-4  border-white font-bold rounded-md relative">
            <img
              src="https://aximo-react.vercel.app/assets/project3-BOxrz7G1.png"
              alt=""
            />

            <div className="absolute left-6 bottom-7">
              <h2 className="text-4xl font-inter font-bold">Logo Design</h2>
              <div className="flex items-center gap-2 md:gap-4 pt-3">
                <p className="text-lg font-inter font-semibold w-96">
                  Designing the UI/UXe for mobile apps and web applications to
                  ensure usability & engagement.
                </p>
                <FaArrowRight className="text-3xl" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative  border-4 border-white font-bold rounded-md">
            <img
              src="https://aximo-react.vercel.app/assets/project4-lgnASWTf.png"
              alt=""
            />
            <div className="absolute left-6 bottom-7">
              <h2 className="text-4xl font-inter font-bold">Product Design</h2>
              <div className="flex items-center gap-2 md:gap-4 pt-3">
                <p className="text-lg font-inter font-semibold w-96">
                  Designing the UI/UXe for mobile apps and web applications to
                  ensure usability & engagement.
                </p>
                <FaArrowRight className="text-3xl" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="border-4 border-white font-bold rounded-md">
            <img
              className="relative"
              src="https://aximo-react.vercel.app/assets/project2-NsEsB0ly.png"
              alt=""
            />
            <div className="absolute left-6 bottom-7">
              <h2 className="text-4xl font-inter font-bold">
                App UI/UX Design
              </h2>
              <div className="flex items-center gap-2 md:gap-4 pt-3">
                <p className="text-lg font-inter font-semibold w-96">
                  Designing the UI/UXe for mobile apps and web applications to
                  ensure usability & engagement.
                </p>
                <FaArrowRight className="text-3xl" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border-4 border-white font-bold rounded-md">
            <img
              className="relative"
              src="https://aximo-react.vercel.app/assets/project1-CoLuXzLW.png"
              alt=""
            />
            <h2 className="text-2xl absolute bottom-4 left-2 font-semibold font-sans  text-white">
              <Link to={"#"}>Mobile App Design</Link>
            </h2>
          </SwiperSlide>
          <SwiperSlide className="border-4 border-white font-bold rounded-md">
            <img
              className="relative"
              src="https://aximo-react.vercel.app/assets/project3-BOxrz7G1.png"
              alt=""
            />
            <h2 className="text-2xl absolute bottom-4 left-2 font-semibold font-sans  text-white">
              <Link to={"#"}> Project Marster Design</Link>
            </h2>
          </SwiperSlide>

          <SwiperSlide
            className="border-4 border-white font-bold rounded-md 
        transition duration-500 hover:scale-110"
          >
            <img
              className="relative"
              src="https://aximo-react.vercel.app/assets/project1-CoLuXzLW.png"
              alt=""
            />
            <h2 className="text-2xl absolute bottom-4 left-2 font-semibold font-sans  text-white">
              <Link to={"#"}> UI/UX Design</Link>
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CreativeProject;
