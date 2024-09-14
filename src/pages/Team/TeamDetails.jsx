import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const TeamDetails = () => {
    return (
        <div className='bg-[#FFFFF5]'>
        <div className='bg-black py-[200px]'>
         <h2 className='text-6xl font-semibold text-[#FFFFF5] text-center font-poppins'> Team Details</h2> 
           <div className="flex justify-center text-white gap-2 text-2xl font-semibold items-center font-poppins pt-8"> 
            <Link to="/"> Home</Link> <IoIosArrowForward/> <span className="text-[#B3F747]">Team_Details </span> </div>
          </div>
            

         {/* Team Person Information  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14  lg:px-24 py-20 ">
              <div className="md:col-span-1 col-span-2 px-4">
                  <img className="border-4 border-black rounded-lg" src="https://aximo-react.vercel.app/assets/team1-DmWE10zh.png" alt="" />
              </div>

              <div className="col-span-2  px-4">
                <h2 className="md:text-7xl text-5xl md:justify-normal justify-center font-poppins font-semibold flex items-center gap-8"> <span>Let's introduce</span>  <span> <img className=' hidden md:h-14 pt-3 md:inline' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABGCAYAAABrEgIKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdQSURBVHgB7Zx/UhNJFMdf9wRN1K2KJ3A8gfEGM+uK7n96gsUTiCcwnEA8AfEE6F8ruFbGExhPYHMDqvxBoEj3vtczIxCSmf6Zqt3iU4UgzCTDt19/+/XrbhhEYqyyPkyvPQfGBnl37ylEYnz0OAVQOwDsWd57LyASHCLw8fvDDZhe/4wPPwQFT7Ro0VAv8Z8MP38dHz3aKYULT1ChPnz7I8OHHfOEYwtDWn9f/ry2CfHIzn29EUswBgE4C/8LD33+XQ6x+92GwFDkVo2y8D1BqW3onrzOWXEInnhFFHWp8fTRK2pFWCYSoaA//vY4g8CgSH9Bw3vqro8W8PEIrcATp4j6ZdQKNtGsTf2nyHt7OQSiiuKvFrcICXLrQe/DCBywFkqHO2evLAQ6o3t8O0Q3IMiHQHuSNQJ/7dx2hLTuejxJhJNIENzUM1gh1kJhSxQYhy/AAZ6w5xAAnX6cG1XtsI8mwsnMcQTbVlK9AVsCmXqjiTe//wvXpNR51GMnJ9SNBNjS0QmiM1V+lIEtCl7nN/a2wRFnofLbZMosx1zF1pwzv0zdQWgGExTJyx+98igdxgqegSWepp6BHfiMzHuu6T2FyW/uv8Um27K5x9XUnUx8Jp+GmCwHmevhgwzxU2F8g6OpW5u4ZFv5rQ8TCEC4SfH0mMJbGF9vaerWJk7mfVM3YBCCCaXNHcPcwtwtTd1KWOFr3vMELbPoMOfmfmVp6pnhdUKPxoEJXrijZFRi2Jtca2rqdiYep9IZpcL5gMJeqXYTNTR1YxMn86YpVgSiCKVh3MzcW0zdwsRHIc17nmhCleHPTJLRFlM3MnGBJRynibop8SIKzCsNLaaeQTNCVwQC1bmWEVUowqTSQKa+KKqMTJyrF3nEZapfbwMroLXSQPXt6fVX579F3oQm3tztyLyv0xQqPkFWYUzQpqzk55bq6EjO5CfgvM8ZUOqQLr1SwVtMKqMtrM6zMqGI8Y/1J5iQ7oI/ZN73Y/vSeVbS9WrKSoPF5HkZp5hUrlAkokMru1TYkhIOlFJC4sd6oBn3IrBrvUHvycAVWkz9LU5SSfx9lKXJbK2fAAzQJlJccbqDy1yfOkDDr4KMUydkDBJ8EhQP9OSWMRJMSKkOFMBESXnYuXU68WlNxZhfJCjwjiQSY01eGzCl+rzD70HphSlIhZ/RQ5O5GyQ76Cx9tdJ0M/qS88rKOL7CNIHxz/VSRGxdOVNfoIrE086p+LNXCGgg4d4rMSlNe5qiilKN6RT6WgwdFXCH7kORB1APENp0GAl/Bltu2QyjR0FosCvrlq+6NGAkGo1kdpQjJFG+9j18v/4FMQKBPWorjlD/M0iolY56/2WuhDLkSihDroQy5EooQzoQB1pBnpTbA+ELJmyHkknKcqmkm4IvmAxLYG+41Akx6NdmrEoP1MB1W1ITbkKVS1ICEyYhAQ70AzOdK01aakNDPWXy3dskVf7g1v7SaZaubf1YS2kKQh/4jKnOszATp+3c4ECTUKKextAUhisucH16AklyiOUNAY7MpHqN2XkG7oi21d9qijWpPi4x/v5wgL+Hjj4tIlDmrtImETtU19FRUQojKCqgOz2MNTun+ZVXdYe6lyfnhC7mf1buT+0OYAZp3aU552Kl9Sj9INP1XZwZPwEfTrFGHrGCsIiVjnq6Bu4rEtFRO3FPQ1xmZULpGjjtJm6mgBkucSm9ciMarkvna+yxWUnXq/aE02iXLr2o3Dq4eeGe1hq7Gua9fau9Wa6sJqKUotZPG664tPuE0gzJ2vYwsGGMExGLiC7U+Hj9JcZtiy8t3gHDpyfbrduI1tRurBNVF54FIvIPrbpINjS4tFj0TdpzRRl4043lmRc1jm3u0YSiVk4Y7BhcOmrK5jGPMVngjG7uUYQqWxfN22TOddocMdU2ngLa2RgfrXvtYW8iTkSVrZsaXClMEkep4B0YEc/cgwulzdv41JPZNkZ+fDwy3hsaydyDH5U1NO+awuQiI1OviWTuwYSiVux0EhPzrhnZbNcxNPWa4OYeMKJaMu95ZtJoQ2yNhanXBDX3IEKV54otRMLqp8uJAnNTrwln7t5CafOms8U2MGYVTTVWpl4TyNz9TqlTpdDOvMtj9t2p0y45K1OvCWTuzkLpVkq4/aYw2innUT21NPUab3N3jyimdsFlRcXSxOdxMPUaL3N3Ekqbd7lrxA5HE5/H3tRr0Nxpou6AtVAo0nNr865xNPF5nEy9JmFOf7fFPqIUe+d0Qp3mdb33IwiAk6kTJK7CxsJVJrDE5e8eiN9v7m9UxzeExa0FBMTa1HEQAcbv02lVl8HEu2aOXXETH8JgJx27G/qEgeGqc0GTb99TV/6Hr7v0twRY3tIdixjHMFpMXZRn9/byEEfTQh2+rrvj3cXn9JiLp7Wy0NT1/7F8Qxv2A3kiEWW5CkeVjer4WAraxPfuQiQ+/ny0XW2i1Ute0DsextgOEGXbT9WSIxRsiE9/ByJSmrq6p33oRrxl9n8B0KJdKCFgj60AAAAASUVORK5CYII=" alt="" /></span> </h2>
                <h2 className="md:text-7xl text-4xl md:text-left text-center font-poppins font-semibold pt-1 "> Mr. Andrew Mark</h2>
               
               <p className="text-lg font-inter pt-7"> Andrew Mark is the CEO of our design agency. He plays a key role in overseeing the agency's operations, growth and strategic direction.</p>
               <p className="text-lg font-inter pt-7"> As the leader of the organization, he also sets the company's vision, mission, and values. He spent 15 years providing strategic direction and ensuring the organization's goals and objectives were met.</p>
             
               {/* socail Icons */}
               <div className="space-x-4 flex md:justify-normal justify-center mt-10 pb-4">
                        <p className="w-9 h-9 rounded-full text-white bg-black flex items-center justify-center border border-white hover:bg-[#BEF264] hover:text-black"> <Link><FaTwitter/> </Link> </p>
                      
                        <p className="w-9 h-9  rounded-full text-white bg-black flex items-center justify-center border border-white hover:bg-[#BEF264] hover:text-black"> <Link> <FaFacebookF/> </Link> </p>
                      
                        <p className="w-9 h-9 rounded-full text-white bg-black flex items-center justify-center border border-white hover:bg-[#BEF264] hover:text-black"> <Link><FaLinkedinIn/> </Link></p>
                      
                        <p className="w-9 h-9 rounded-full text-white bg-black flex items-center justify-center border border-white hover:bg-[#BEF264] hover:text-black"> <Link> <FaSquareInstagram/> </Link> </p>
                      
                   </div>

              </div>
          </div>

             {/* Team Person Qulification and other work Information  */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  lg:px-24 py-14 px-4 ">
                 <div>
                    <h2 className="font-poppins font-semibold text-3xl">Qualifications: </h2>
                    <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span > <span className="text-lg font-inter font-semibold"> Educational Background : </span> A degree in a relevant field, such as graphic design & UX.</span></p>
                    <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span > <span className="text-lg font-inter font-semibold"> Industry Experience : </span> Extensive exper ience in the design industry 15 years & can be crucial.</span></p>
                    <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span > <span className="text-lg font-inter font-semibold"> Business Acumen : </span> A solid under stan ding of business principles, marketing, and finance.</span></p>
                 </div>

                 {/* 02 */}

                 <div>
                    <h2 className="font-poppins font-semibold text-3xl">Attributes: </h2>
                    <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span > <span className="text-lg font-inter font-semibold"> Visionary : </span> A successful CEO in a design agency should have a clear vision.</span></p>
                    <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span > <span className="text-lg font-inter font-semibold"> Strong Communication Skills : </span> A effective communication is essential for interaction.</span></p>
                    <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span > <span className="text-lg font-inter font-semibold"> Business Acumen : </span> A strong understanding of business principles, finance, and marketin.</span></p>
                   
                 </div>


                 {/* 03 */}
                 <div>

                 {/* #BEF264 */}
                    <h2 className="font-poppins  font-semibold text-3xl">Professional Skills : </h2>
                  
                  {/* i progress */}
                   <div>
                   <p className="flex mt-8 justify-between items-center font-inter text-[20px] font-bold"> <span> Problem-Solving Skills:</span>  <span> 90%</span></p>
                   <p className="pt-2"> <progress className="progress progress-primary h-4 w-full" value="90" max="100"></progress></p>
                
                   </div>

            {/* ii progress */}
                  <div>
                   <p className="flex mt-8 justify-between items-center font-inter text-[20px] font-bold"> <span> Networking Skills:</span>  <span> 85%</span></p>
                   <p className="pt-2"> <progress className="progress progress-primary  h-4 w-full" value="85" max="100"></progress></p>
                
                   </div>

            {/* iii progress */}
                  <div>
                   <p className="flex mt-8 justify-between items-center font-inter text-[20px] font-bold"> <span> Leadership Skills:</span>  <span> 80%</span></p>
                   <p className="pt-2"> <progress className="progress progress-primary  h-4 w-full" value="80" max="100"></progress></p>
                
                   </div>

                 </div>
              </div>
        </div>
    );
};

export default TeamDetails;