import { CiSearch } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa6";
const BlogDetails = () => {
    return (
        <div className=''>
         <div className='bg-black py-[200px]'>
         <h2 className='text-5xl font-semibold text-white text-center font-sans'> Blog _ Details</h2> 
      

      </div>
       
       {/* Detaisl Page  */}

       <div className='grid lg:grid-cols-3 lg:px-20 px-3 my-14 gap-4 bg-[#FFFFF5]'>

           {/* Blog left Site */}
            <div className='col-span-2 '>
           
            <div className="overflow-hidden rounded-xl p-2 border-black">
             <img className="transition h-96 lg:w-full  duration-500 rounded-xl hover:scale-110" src="https://aximo-react.vercel.app/assets/blog3-B6u1nT1Z.png" alt="" />
       
          {/* Date Area */}
          <div className="mt-10">
           <button className="btn btn-outline font-poppins">Marketing</button>
              <span className="pl-3 font-inter font-medium">Septembar 10, 2024 </span>
          </div>

          {/* Some H1 and Text */}
          <div>
              <h2 className="text-2xl font-bold font-poppins mt-5"> Learn these five high-income skills to build your one-person.</h2>

              <p className="text-md font-inter my-5">By definition, most high-value skill stacks can’t be taught in schools. If the masses could easily access them, they would not be high-value skills anymore.  You would become replaceable. And value comes from scarcity. </p>
           
              <div className="mt-5">
              <h3 className="font-poppins text-2xl font-bold">1. Codeing Solution, How To write Box </h3>
              <p className="mt-5 font-inter text-md">It seems like you're asking for a description of how to modify text in a box using Tailwind CSS. Here's a breakdown of how to control and modify text inside a box, including font size, color, alignment, and more.</p>
              
              
              </div>

              <div className="mt-8">
              <h3 className="font-poppins text-2xl font-bold">2. Copywriting and Content Creation </h3>
              <p className="mt-5 font-inter text-md">Strong copywriting and content creation skills are essential for creating persuasive, engaging, and valuable content for websites, blogs, marketing materials, and social media.</p>
               <p className="mt-10">While these skills can help you build a one-person business and increase your income potential, it's changing market trends. Additionally, starting and growing a business often involves more than just one skill, so consider a holistic approach to building your business and wealth.</p>
             
              </div>
           
                <div className="border-t-[1px] border-b-[1px] p-3 py-5 mt-10 border-[#b9b9b0] flex items-center justify-between ">
                   <div className="flex items-center gap-4 md:flex-row flex-col">
                      <h2 className="text-2xl font-inter font-bold"> Tags:</h2>
                      <button className="btn text-[#686867] font-inter rounded-full text-lg  bg-slate-100 hover:bg-[#BEF264]">Marketing</button>
                       <button className="btn text-[#686867] ml-4 font-inter text-lg rounded-full  bg-slate-100 hover:bg-[#BEF264]">Busnisses</button>

                   </div>

                   <div className="flex items-center gap-8">
                    <p className="flex items-center gap-1.5 font-inter font-medium text-[20px]"> <span className="cursor-pointer"> <SlLike/> </span> <span> 142</span></p>
                    <p className="flex items-center gap-1.5 font-inter font-medium text-[20px]"> <span className="cursor-pointer"> <FaRegComment/> </span> <span> 14</span></p>
                   </div>

                </div>


       {/* Comments Area start */}


       <div>
          <div>
              <h2 className="text-2xl font-poppins font-semibold py-8"> Comments :</h2>
          
             <div className="flex md:flex-row flex-col justify-center gap-8 ">
                <div>
                  <img className="w-28 h-20 rounded-lg"  src="https://aximo-react.vercel.app/assets/team6-BKK8Qye5.png" alt="" />
                </div>
                <div className="font-inter"> 
                <span className="flex md:flex-row flex-col justify-between text-lg font-poppins font-semibold"> <h3 > Rory Smith</h3> <span className="text-[17px]"> Reply</span></span> 
                    <p className="font-inter pb-6"> Septembar 11, 2024</p>
                    <p>It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two. </p>
                
                
                  <div className="border-t-[1px] mt-6">
                 
                 
                {/* insert the comment reply  */}
               <div className=" md:flex-row flex-col flex justify-center gap-8 pt-6 ">
                <div>
                  <img className="w-28 h-20 rounded-lg"  src="https://aximo-react.vercel.app/assets/team5-0qHpgDXP.png" alt="" />
                </div>
                <div className="font-inter"> 
                    <span className="flex justify-between text-lg font-poppins font-semibold"> <h3 > Ricky Smith</h3> <span className="text-[17px]"> Reply</span></span> 
                    <p className="font-inter pb-6"> Septembar 11, 2024</p>
                    <p>It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two. </p>
                
                </div>
             </div>
                  </div>
                </div>
             </div>
          </div>
       </div>
           </div>
          </div> 
           
           
           
           
             {/* leeav a Comments Box : */}
              <div className="mt-10">
                  <h2 className="text-2xl py-4 font-inter font-semibold"> Leave a Comments : </h2> 
                 
                 <div className="border-[1px] border-black rounded-lg p-3 px-10 pb-10 ">
                   <div className="flex flex-col md:flex-row justify-between items-center">
                   <input className=" border-b-[1px] bg-[#FFFFF5] px-14 py-1 hover:border-slate-600 border-slate-600" type="text" placeholder="Your Name" />
                    <input className=" border-b-[1px] bg-[#FFFFF5] pt-5 md:pt-0  px-14 py-1 hover:border-slate-600 border-slate-600" type="text" placeholder="Your Email" />
                  
                   </div>
                  
                 
                   <textarea className="textarea textarea-bordered border-b-[1px] border-black w-full px-8 my-12 h-48 bg-[#FFFFF5]" placeholder="Write Your Comments"></textarea>
                
                  <button className="bg-slate-800 btn hover:bg-[#BEF264]  font-inter hover:text-black  bg- text-white rounded-lg"> Send Message</button>
                 </div>


              </div>
            </div>




        {/* Blog right Site */}
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

     </div>
    );
};

export default BlogDetails;