
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const PortTwoColumn = () => {

  const[oneCard, setOneCard] = useState(false)

  
    return (
        <div className='bg-[#FFFFF5]'>
        <div className='bg-black py-[200px]'>
         <h2 className='text-6xl font-semibold text-[#FFFFF5] text-center font-poppins'> Portfolio Two Column</h2> 
           <div className="flex justify-center text-white gap-2 text-2xl font-semibold items-center font-poppins pt-8"> 
            <Link to="/"> Home</Link> <IoIosArrowForward/> <span className="text-[#B3F747]">Portfolio Two Column </span> </div>
         
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 px-4 lg:px-20 md:py-14'>
             {/* 01 image */}
              <div>
                <div className='lg:pt-0 border-4 border-black rounded-xl  mx-auto overflow-hidden mt-4 md:mt-0  sm:col-span-2'>
           
             <div
             onMouseEnter={() => setOneCard(true)}
             onMouseLeave={() => setOneCard(false)}
             className='relative group cursor-pointer '>
             <img className='mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110' src="https://aximo-react.vercel.app/assets/p_3-BZZ6O9JL.png" alt="" />
            
                {
                  oneCard && <div className='absolute inset-0 pt-20  md:pt-36 pl-4 md:pl-10 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg  text-[#FFFFF5] '>
                  <h2 className='text-4xl font-inter font-bold'> App UI/UX Design </h2>
                  <div className='flex items-center gap-2 md:gap-4 pt-3'>
                  <p className='text-lg font-inter font-semibold w-96'> Designing the UI/UXe for mobile apps and web applications
                  to ensure usability & engagement.</p>
                    <FaArrowRight className='text-3xl'/>
                  </div>
               </div> 
                }
             </div>
    
              </div>
              </div>

          {/* 02 image */}
              <div>
                <div className='lg:pt-0 border-4 border-black rounded-xl  mx-auto overflow-hidden   sm:col-span-2'>
           
             <div
             onMouseEnter={() => setOneCard(true)}
             onMouseLeave={() => setOneCard(false)}
             className='relative group cursor-pointer '>
             <img className='mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110' src="https://aximo-react.vercel.app/assets/p_6-DFeq1JK4.png" alt="" />
            
                {
                  oneCard && <div className='absolute inset-0 pt-20  md:pt-36 pl-4 md:pl-10 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg  text-[#FFFFF5] '>
                  <h2 className='text-4xl font-inter font-bold'> Envermental Desgin </h2>
                  <div className='flex items-center gap-2 md:gap-4 pt-3'>
                  <p className='text-lg font-inter font-semibold w-96'> Designing the UI/UXe for mobile apps and web applications
                  to ensure usability & engagement.</p>
                    <FaArrowRight className='text-3xl'/>
                  </div>
               </div> 
                }
             </div>
    
              </div>
              </div>


       {/* 03 image */}
            <div>
              <div className='lg:pt-0 border-4 border-black rounded-xl  mx-auto overflow-hidden   sm:col-span-2'>
           
             <div
             onMouseEnter={() => setOneCard(true)}
             onMouseLeave={() => setOneCard(false)}
             className='relative group cursor-pointer '>
             <img className='mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110' src="https://aximo-react.vercel.app/assets/p_1-CeAe8OPw.png" alt="" />
            
                {
                  oneCard && <div className='absolute inset-0 pt-20  md:pt-36 pl-4 md:pl-10 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg  text-[#FFFFF5] '>
                  <h2 className='text-4xl font-inter font-bold'> Products Desgin </h2>
                  <div className='flex items-center gap-2 md:gap-4 pt-3'>
                  <p className='text-lg font-inter font-semibold w-96'> Designing the UI/UXe for mobile apps and web applications
                  to ensure usability & engagement.</p>
                    <FaArrowRight className='text-3xl'/>
                  </div>
               </div> 
                }
             </div>
    
              </div>
              </div>

             
 {/* 04 image */}
              <div>
              <div className='lg:pt-0 border-4 border-black rounded-xl  mx-auto overflow-hidden   sm:col-span-2'>
           
             <div
             onMouseEnter={() => setOneCard(true)}
             onMouseLeave={() => setOneCard(false)}
             className='relative group cursor-pointer'>
             <img className='mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110' src="https://aximo-react.vercel.app/assets/p_4-CFCNxsUB.png" alt="" />
            
                {
                  oneCard && <div className='absolute inset-0 pt-20  md:pt-36 pl-4 md:pl-10 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg  text-[#FFFFF5] '>
                  <h2 className='text-4xl font-inter font-bold'> Packaging Desgin </h2>
                  <div className='flex items-center gap-2 md:gap-4 pt-3'>
                  <p className='text-lg font-inter font-semibold w-96'> Designing the UI/UXe for mobile apps and web applications
                  to ensure usability & engagement.</p>
                    <FaArrowRight className='text-3xl'/>
                  </div>
               </div> 
                }
             </div>
    
              </div>
              </div>
 {/* 05 image */}
              <div>
              <div className='lg:pt-0 border-4 mb-5 border-black rounded-xl  mx-auto overflow-hidden   sm:col-span-2'>
           
             <div
             onMouseEnter={() => setOneCard(true)}
             onMouseLeave={() => setOneCard(false)}
             className='relative group cursor-pointer'>
             <img className='mx-auto w-full lg:h-[350px]  rounded-md border-[#FDFDE1] transition duration-500 hover:scale-110' src="https://plus.unsplash.com/premium_photo-1669077047374-810b2e817ea2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            
                {
                  oneCard && <div className='absolute inset-0 pt-20  md:pt-36 pl-4 md:pl-10 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg  text-[#FFFFF5] '>
                  <h2 className='text-4xl font-inter font-bold'> Logo Desgin </h2>
                  <div className='flex items-center gap-2 md:gap-4 pt-3'>
                  <p className='text-lg font-inter font-semibold w-96'> Designing the UI/UXe for mobile apps and web applications
                  to ensure usability & engagement.</p>
                    <FaArrowRight className='text-3xl'/>
                  </div>
               </div> 
                }
             </div>
    
              </div>
              </div>

          </div>

            
        </div>
    );
};

export default PortTwoColumn;