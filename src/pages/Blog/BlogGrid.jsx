import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Cover from "../share/Cover";
import useMenu from "../../hook/useMenu";
import ButtonComponent from "../share/ButtonComponent";
import { useEffect } from "react";
const BlogGrid = () => {
  const [scrollButtonRef] = useMenu();

  // Scroll to the top of the page on component mount

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFF5]">
      <div>
        <Cover title={"Blog Grid"} />
      </div>

      <div>
        <ButtonComponent scrollValue={scrollButtonRef} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4 my-10  lg:px-20 px-4 ">
        {/* Left Site  */}
        <div className="col-span-2">
          <div className="flex flex-col md:flex-row gap-3 p-4">
            {/* card 01 */}
            <div className="card bg-base-100 h-96 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>

            {/* card 02 */}
            <div className="card bg-base-100 mt-5 md:mt-0 h-96 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1580993777851-40514758f716?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* card 03 */}
            <div className="card bg-base-100 mt-5 md:mt-0 h-96 w-full md:w-96 p-4 shadow-xl">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Site */}
        <div className="col-span-2 lg:col-span-1  p-4">
          <label className="relative">
            <input
              type="text"
              className="grow w-full py-2 border-[1px] border-black rounded-full px-3"
              placeholder="Search"
            />
            <span className="absolute right-5 top-[1px] text-2xl">
              <CiSearch />
            </span>
          </label>

          {/* categories area start*/}

          <div className="border-[1px] rounded-lg border-black p-3 mt-10">
            <h3 className="font-poppins font-semibold text-[28px] ">
              Categories :
            </h3>
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
              <h2 className="text-[29px] pt-2 pb-3 font-poppins font-semibold">
                Recent Posts :
              </h2>
              <img
                className="rounded-xl"
                src="https://aximo-react.vercel.app/assets/blog1-B8qKBVxR.png"
                alt=""
              />

              <p className="my-2 font-inter text-md"> Septembar 11, 2024 </p>
              <p className="font-inter text-xl font-semibold">
                7 Busincesser for easy money
              </p>
            </div>

            {/* card 02 */}
            <div className="mt-10">
              <img
                className="rounded-xl"
                src="https://aximo-react.vercel.app/assets/blog2-hsjGcxOz.png"
                alt=""
              />

              <p className="my-2 font-inter text-md"> Septembar 11, 2024 </p>
              <p className="font-inter text-xl font-semibold">
                My 3 tips for business ideas
              </p>
            </div>

            {/* card 02 */}
            <div className="mt-10 pb-5">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1725913137143-8f160e27852c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />

              <p className="my-2 font-inter text-md"> Septembar 11, 2024 </p>
              <p className="font-inter text-xl font-semibold">
                12 Halloween costume ideas
              </p>
            </div>
          </div>
          {/* Recent Post area End*/}

          {/* Tags Area Start */}
          <div className="border-[1px] p-8  mt-10 rounded-lg border-black ">
            <button className="btn text-gray-700 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">
              Marketing
            </button>
            <button className="btn text-gray-700 ml-4 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">
              Busnisses
            </button>
            <button className="btn text-gray-700 mt-4 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">
              Solutions
            </button>
            <button className="btn text-gray-700 ml-4 mt-4 font-inter text-lg  bg-slate-300 hover:bg-[#BEF264]">
              Brands
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
