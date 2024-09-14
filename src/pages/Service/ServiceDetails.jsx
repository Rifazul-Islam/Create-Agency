import { GoDotFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import Reivews from "../Home/Reivews";
const ServiceDetails = () => {
    return (
        <div className='bg-[#FFFFF5]'>
        <div className='bg-black py-[200px]'>
         <h2 className='text-5xl font-semibold text-white text-center font-sans'> Service_Details</h2>      
      </div>

     {/* Product Details  */}

     <div className='px-4 lg:px-20 py-10'>
         <img className=' rounded-lg h-96 w-full' src="https://aximo-react.vercel.app/assets/service-single-CSFQ3Hz1.png" alt="" />
          
          <div className='py-4'>
            <h2 className='md:text-4xl text-2xl font-poppins font-bold pt-8'> UI/UX for modernstarproduct development</h2>
           <p className='py-3 font-inter font-medium'>  UI/UX, which stands for User Interface (UI) and User Experience (UX), are two critical components of software design and development of websites and applications.They are often used interchangeably, but they refer to different aspects of the design and user interaction process. Here's a brief overview of each:</p>
            <p className='pt-5 pb-4 font-inter font-medium'>They are often used interchangeably, but they refer to different aspects of the design and user interaction process. Here's a brief overview of each .They are often used interchangeably, but they refer to different aspects of the design and user interaction process. Here's a brief overview of each</p>
          </div>

          <div className='flex md:flex-row flex-col gap-4 mt-8'>
            <div>
                <div>
                <h2 className='md:text-3xl text-2xl font-poppins font-semibold'> 1/ User Interface (UI):</h2>
                <p className='py-3 font-inter font-medium flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span>UI refers to the visual elements and the overall look and feel of a product. It encompasses the design of screens, pages, buttons, icons, and any other visual elements users interact with. </p>
            
                </div>

                <div className="mt-5">
                <p className='py-3 font-inter font-medium flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span>UI refers to the visual elements and the overall look and feel of a product. It encompasses the design of screens, pages, buttons, icons, and any other visual elements users interact with. </p>
                </div>
            </div>

            <div>
              <div>
                <h2 className='md:text-3xl text-2xl font-poppins font-semibold'> 2/ User Experience (UX):</h2>
                <p className='py-3 font-inter font-medium flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span> UX focuses on the overall experience of the user when interacting with a product. It encompasses how users feel when they use the product and how easy or challenging it is to accomplish their goals </span></p>
              </div>

              <div className="mt-5">
                
                <p className='py-3 font-inter font-medium flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span> <span> UX focuses on the overall experience of the user when interacting with a product. It encompasses how users feel when they use the product and how easy or challenging it is to accomplish their goals </span></p>
              </div>
            </div>
            <div></div>
          </div>
     </div>


     {/* Product Approach area */}

     <div className="px-4 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-3 mx-auto  gap-5">
         <div className=" col-span-2 p-3 "> 
            <h2 className="text-5xl font-bold font-inter pb-3">Our Approach  <span> <img className='h-14 pt-3 inline' src="data:image/png;base64,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" alt="" /></span>  </h2>
          <p className="text-lg font-inter "> The working approach for UI/UX design involves a series of steps and methodologies to ensure that the user interface and user experience. Here's a typical approach to UI/UX design:</p>
          
          {/* part 01 */}
          <div className="mt-8 ">
              <div className="text-2xl font-inter font-bold flex  gap-3"> <span> <FiSearch/> </span> <span>Research and CXompetitor Analysis :
              <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span>UI refers to the visual elements and the overall look and feel of a product. It encompasses the design of screens, pages, buttons, icons, and any other visual elements users interact with. </p>
                </span> </div>

                {/* ii */}
                <div className="text-2xl font-inter font-bold flex mt-5  gap-3"> <span> <FaHandHoldingMedical/> </span> <span>User Interface Implementation:
              <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span>Translate the finalized UI design into actual code or design, elements, assets, depending on the platform (web, mobile, etc.) </p>
                </span> </div>

                {/* iii */}
                <div className="text-2xl font-inter font-bold flex mt-5  gap-3"> <span className=""> <FaRocket/> </span> <span>Launch and Post-Lanunch:
              <p className='py-3 font-inter font-normal  text-lg flex justify-center gap-1'> <span className="mt-1.5 text-sm"><GoDotFill/></span>Prepare for the product's launch, and gather user feedback after the product is live and make iterative improvements user data. </p>
                </span> </div>
          </div>
         </div>

         {/* right site images use */}
         <div className="col-span-1 "> 
            <img className="rounded-2xl border-4 border-black" src="https://aximo-react.vercel.app/assets/service-single2-B5XXn7Rt.png" alt="" />
         </div>
     </div>


     {/* Review Part  */}

      <div>
          <Reivews></Reivews>
      </div>

     </div>
    );
};

export default ServiceDetails;