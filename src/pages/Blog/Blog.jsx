import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Blog = () => {

    return (
      <div className='bg-[#FFFFF5]'>
      <div className='bg-black py-[200px]'>
      <h2 className='text-5xl font-semibold text-white text-center font-sans'> Blog</h2> 
      
      </div>


      {/* Our Blog Part  */}
      <div className="grid lg:grid-cols-3 gap-4 my-10  lg:px-20 px-4">
        
          <div className="col-span-2">

           {/* let site 01 blog */}
          <div className=" border overflow-hidden rounded-xl p-2 border-black">
          <img className="transition h-96 w-full duration-500 rounded-xl hover:scale-110" src="https://aximo-react.vercel.app/assets/blog3-B6u1nT1Z.png" alt="" />
       
          {/* Date Area */}
          <div className="mt-10">
           <button className="btn btn-outline font-poppins">Marketing</button>
              <span className="pl-3 font-inter font-medium">Septembar 10, 2024 </span>
          </div>

          {/* Some H1 and Text */}
          <div>
              <h2 className="text-2xl font-bold font-poppins mt-5"> Learn these five high-income skills to build your one-person.</h2>

              <p className="text-md font-inter my-5">By definition, most high-value skill stacks can’t be taught in schools. If the masses could easily access them, they would not be high-value skills anymore.  You would become replaceable. And value comes from scarcity. 
                
               ... </p>
           
           <Link to="/blog_details"><button className="btn btn-active text-lg font-semibold font-inter mb-3">Read More <FaArrowRight/> </button></Link>
           
           </div>
          </div>



     {/* let site 02 blog */}
        <div className=" border mt-8 overflow-hidden rounded-xl p-2 border-black">
          <img className="transition h-96 w-full duration-500 rounded-xl hover:scale-110" src="https://aximo-react.vercel.app/assets/blog5-CJktv7EC.png" alt="" />
       
          {/* Date Area */}
          <div className="mt-10">
           <button className="btn btn-outline font-poppins">Marketing</button>
              <span className="pl-3 font-inter font-medium">Septembar 10, 2024 </span>
          </div>

          {/* Some H1 and Text */}
          <div>
              <h2 className="text-2xl font-bold font-poppins mt-5"> Learn these five high-income skills to build your one-person.</h2>

              <p className="text-md font-inter my-5">By definition, most high-value skill stacks can’t be taught in schools. If the masses could easily access them, they would not be high-value skills anymore.  You would become replaceable. And value comes from scarcity. 
                
               ... </p>
           
             <button className="btn btn-active text-lg font-semibold font-inter mb-3">Read More <FaArrowRight/> </button>
          </div>
          </div>




   {/* let site 03 blog */}
       <div className="border mt-8 overflow-hidden rounded-xl p-2 border-black">
          <img className="transition h-96 w-full duration-500 rounded-xl hover:scale-110" src="https://aximo-react.vercel.app/assets/blog4-D6S-aoIu.png" alt="" />
       
          {/* Date Area */}
          <div className="mt-10">
           <button className="btn btn-outline font-poppins">Marketing</button>
              <span className="pl-3 font-inter font-medium">Septembar 10, 2024 </span>
          </div>

          {/* Some H1 and Text */}
          <div>
              <h2 className="text-2xl font-bold font-poppins mt-5"> Learn these five high-income skills to build your one-person.</h2>

              <p className="text-md font-inter my-5">By definition, most high-value skill stacks can’t be taught in schools. If the masses could easily access them, they would not be high-value skills anymore.  You would become replaceable. And value comes from scarcity. 
                
               ... </p>
           
             <button className="btn btn-active text-lg font-semibold font-inter mb-3">Read More <FaArrowRight/> </button>
          </div>
          </div>

          </div>

  

        {/* Right Site */}

     <div className="col-span-2 md:col-span-1  p-4">

      <label className="relative">
      <input type="text" className="grow w-full py-2 border-[1px] border-black rounded-full px-3" placeholder="Search" />
         <span className="absolute right-5 top-[1px] text-2xl"> <CiSearch /> </span>
      </label>

        
        {/* categories area start*/}

        <div className="border-[1px] rounded-lg border-black p-3 mt-10">
          <h3 className="font-poppins font-semibold text-[28px] ">Categories :</h3>
          <div className="space-y-2.5 text-lg font-inter font-medium mt-3">
          <p> Business</p>
           <p> Development</p>
           <p>Technology</p>
           <p>Software</p>
           <p> Uncategoriezed</p>
         </div>

        </div>
      {/* categories area End*/}


   {/* Recent Post area start*/}
   <div className="border-[1px] border-black p-3 rounded-lg mt-10">
    {/* card 01 */}
     <div>
         <h2 className="text-[29px] pt-2 pb-3 font-poppins font-semibold"> Recent Posts :</h2>
         <img className="rounded-xl" src="https://aximo-react.vercel.app/assets/blog1-B8qKBVxR.png" alt="" />

         <p className="my-2 font-inter text-md"> Septembar 11, 2024 </p>
         <p className="font-inter text-xl font-semibold"> 7 Busincesser for easy money </p>
      
     </div>
       
 {/* card 02 */}
 <div className="mt-10">
        
         <img className="rounded-xl" src="https://aximo-react.vercel.app/assets/blog2-hsjGcxOz.png" alt="" />

         <p className="my-2 font-inter text-md"> Septembar 11, 2024 </p>
         <p className="font-inter text-xl font-semibold"> My 3 tips for business ideas </p>
      
 </div>


{/* card 02 */}
<div className="mt-10 pb-5">
        
        <img className="rounded-xl" src="https://images.unsplash.com/photo-1725913137143-8f160e27852c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <p className="my-2 font-inter text-md"> Septembar 11, 2024 </p>
        <p className="font-inter text-xl font-semibold"> 12 Halloween costume ideas</p>
     
</div>

   </div>
  {/* Recent Post area End*/}
        

{/* Tags Area Start */}
 <div className="border-[1px] p-8  mt-10 rounded-lg border-black ">

 <button className="btn text-gray-700 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">Marketing</button>
 <button className="btn text-gray-700 ml-4 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">Busnisses</button>
 <button className="btn text-gray-700 mt-4 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">Solutions</button>
 <button className="btn text-gray-700 ml-4 mt-4 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">Brands</button>

 </div>

      </div>
        
      </div>
      



   {/* Pagination System Emplement Start  */}

    <div className="my-14 ml-5 flex  gap-4 items-center justify-center font-inter text-lg ">
        <button className=" bg-[#BEF264]  rounded-full w-14 h-14" > 1</button>
        <button className=" hover:bg-[#BEF264] border-[1px] border-black hover:border-none rounded-full w-14 h-14" > 2</button>
        <button className=" hover:bg-[#BEF264] border-[1px] hover:border-none flex items-center justify-center border-black rounded-full w-14 h-14"> <FaArrowRight/> </button>
    </div>
</div>


      
    );
};

export default Blog;