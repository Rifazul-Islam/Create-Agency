import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //  Blog State ment
  const [blogOpen, setBlogOpen] = useState(false);
  const [dropdownBlog, setDropdownBlog] = useState(false);

  //  Service State ment
  const [service, setService] = useState(false);
  const [dropdownService, setDropdownService] = useState(false);

  //  Team State ment
  const [team, setTeam] = useState(false);
  const [dropdownTeam, setDropdownTeam] = useState(false);

  //  Portfolio  State ment
  const [portfolio, setPortfolio] = useState(false);
  const [dropdownPortfolio, setDropdownPortfolio] = useState(false);

  //  Account State ment
  const [account, setAccount] = useState(false);
  const [dropdownAccount, setDropdownAccount] = useState(false);

  return (
    <>
      <nav className="bg-[#000000] text-white font-poppins shadow-lg fixed top-0 lg:w-full w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold font-poppins">
                  <span className="text-[#BEF264]">M</span>ximo
                </h1>
              </Link>
            </div>

            {/* Large Screen Menu */}
            <div className="hidden md:flex space-x-6 pt-3 text-lg">
              <Link to="/" className="hover:text-[#BEF264]">
                Demo
              </Link>
              <Link to="/about" className="hover:text-[#BEF264]">
                About Us
              </Link>

              <div className="relative z-10">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="hover:text-[#BEF264] flex items-center gap-2 pb-3"
                >
                  <span> Pages</span>
                  {isDropdownOpen ? (
                    <span>
                      <IoIosArrowUp />
                    </span>
                  ) : (
                    <span>
                      <IoIosArrowDown />
                    </span>
                  )}
                </button>

                {isDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute left-0  w-48 bg-white text-black rounded-lg shadow-lg z-20"
                  >
                    <Link to="/pricing" className="block px-4 py-1.5 ">
                      Pricing
                    </Link>
                    <Link to="/about" className="block px-4 py-1.5 ">
                      About Us
                    </Link>

                    {/* Blog Area  */}
                    <div className="relative">
                      <button
                        className="pr-2"
                        onMouseEnter={() => setDropdownBlog(true)}
                        onMouseLeave={() => setDropdownBlog(false)}
                      >
                        <Link className="flex items-center gap-24 px-4 py-1.5">
                          <span>Blog</span>
                          {dropdownBlog ? (
                            <span>
                              <IoIosArrowUp />
                            </span>
                          ) : (
                            <span>
                              <IoIosArrowDown />
                            </span>
                          )}
                        </Link>
                      </button>
                    </div>

                    {dropdownBlog && (
                      <div
                        onMouseEnter={() => setDropdownBlog(true)}
                        onMouseLeave={() => setDropdownBlog(false)}
                        className="bg-white  w-48 absolute left-48 top-14  text-black rounded-lg shadow-lg"
                      >
                        <Link to="/blog" className="block px-4 py-1.5 ">
                          Our Blog
                        </Link>
                        <Link to="/blog_grid" className="block px-4 py-1.5 ">
                          Our Grid
                        </Link>
                        <Link to="/blog_details" className="block px-4 py-1.5 ">
                          Blog Details
                        </Link>
                      </div>
                    )}

                    {/* Service Area */}
                    <div className="relative z-10">
                      <button
                        className="pr-4"
                        onMouseEnter={() => setDropdownService(true)}
                        onMouseLeave={() => setDropdownService(false)}
                      >
                        <Link className="flex items-center gap-[70px] px-4 py-1.5">
                          <span> Service</span>
                          {dropdownService ? (
                            <span>
                              <IoIosArrowUp />
                            </span>
                          ) : (
                            <span>
                              <IoIosArrowDown />
                            </span>
                          )}
                        </Link>
                      </button>

                      {dropdownService && (
                        <div
                          onMouseEnter={() => setDropdownService(true)}
                          onMouseLeave={() => setDropdownService(false)}
                          className="bg-white w-48 absolute left-48 top-0 z-20  text-black rounded-lg shadow-lg"
                        >
                          <Link to="/service" className="block px-4 py-1.5 ">
                            Our Service
                          </Link>
                          <Link
                            to="/service_details"
                            className="block px-4 py-1.5 "
                          >
                            Service Details
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Team Area */}
                    <div className="relative z-10">
                      <button
                        className="pr-4"
                        onMouseEnter={() => setDropdownTeam(true)}
                        onMouseLeave={() => setDropdownTeam(false)}
                      >
                        <Link className="flex items-center gap-[81px] px-4 py-1.5">
                          <span> Team</span>
                          {dropdownTeam ? (
                            <span>
                              <IoIosArrowUp />
                            </span>
                          ) : (
                            <span>
                              <IoIosArrowDown />
                            </span>
                          )}
                        </Link>
                      </button>

                      {dropdownTeam && (
                        <div
                          onMouseEnter={() => setDropdownTeam(true)}
                          onMouseLeave={() => setDropdownTeam(false)}
                          className="bg-white w-48 absolute left-48 top-0 z-20  text-black rounded-lg shadow-lg"
                        >
                          <Link to="/team" className="block px-4 py-1.5 ">
                            Our Team
                          </Link>
                          <Link
                            to="/team_details"
                            className="block px-4 py-1.5 "
                          >
                            Team Details
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Protfolio  Area */}
                    <div className="relative z-10">
                      <button
                        className="pr-4"
                        onMouseEnter={() => setDropdownPortfolio(true)}
                        onMouseLeave={() => setDropdownPortfolio(false)}
                      >
                        <Link className="flex items-center gap-[61px] px-4 py-1.5">
                          <span> Portfolio</span>
                          {dropdownPortfolio ? (
                            <span>
                              <IoIosArrowUp />
                            </span>
                          ) : (
                            <span>
                              <IoIosArrowDown />
                            </span>
                          )}
                        </Link>
                      </button>

                      {dropdownPortfolio && (
                        <div
                          onMouseEnter={() => setDropdownPortfolio(true)}
                          onMouseLeave={() => setDropdownPortfolio(false)}
                          className="bg-white w-56 absolute left-48 top-0 z-20 font-inter  text-black rounded-lg shadow-lg"
                        >
                          <Link
                            to="/port_oneColumn"
                            className="block px-4 py-1.5 text-md"
                          >
                            Portfolio One Column
                          </Link>
                          <Link
                            to="/port_twoColumn"
                            className="block px-4 py-1.5 "
                          >
                            Portfolio Two Column
                          </Link>
                          <Link
                            to="/port_details"
                            className="block px-4 py-1.5 "
                          >
                            Single Portfolio
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Account  Area */}
                    <div className="relative z-10">
                      <button
                        className="pr-4"
                        onMouseEnter={() => setDropdownAccount(true)}
                        onMouseLeave={() => setDropdownAccount(false)}
                      >
                        <Link className="flex items-center gap-[60px] px-4 py-1.5">
                          <span> Account</span>
                          {dropdownAccount ? (
                            <span>
                              <IoIosArrowUp />
                            </span>
                          ) : (
                            <span>
                              <IoIosArrowDown />
                            </span>
                          )}
                        </Link>
                      </button>

                      {dropdownAccount && (
                        <div
                          onMouseEnter={() => setDropdownAccount(true)}
                          onMouseLeave={() => setDropdownAccount(false)}
                          className="bg-white w-56 absolute left-48 top-0 z-20 font-inter  text-black rounded-lg shadow-lg"
                        >
                          <Link
                            to="/signUp"
                            className="block px-4 py-1.5 text-md"
                          >
                            SignUp
                          </Link>
                          <Link to="/signIn" className="block px-4 py-1.5 ">
                            SignIn
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/blog" className="hover:text-[#BEF264]">
                Blog
              </Link>
              <Link to="/contact_us">Contact-US</Link>
            </div>

            {/* Contact Button (large screens) */}
            <div className="hidden md:block">
              <Link
                to="/contact_us"
                className="bg-lime-400 text-black px-4 py-2 rounded-lg hover:bg-lime-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (small screens) */}
        {isOpen && (
          <div className="md:hidden bg-black text-white">
            <Link
              href="#"
              className="block px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
            >
              Demo
            </Link>

            <button
              className="w-full text-left px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Pages
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/pricing"
                  className="block px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
                >
                  About
                </Link>

                {/* blog Area phone Responsive */}

                <button
                  className="w-full flex   items-center justify-between text-left px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
                  onClick={() => setBlogOpen(!blogOpen)}
                >
                  <span> Blog </span>
                  {blogOpen ? (
                    <span>
                      <IoIosArrowUp />
                    </span>
                  ) : (
                    <span>
                      <IoIosArrowDown />
                    </span>
                  )}
                </button>

                {blogOpen && (
                  <div className="pl-4 ">
                    <Link
                      to="/blog"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Our Blog
                    </Link>
                    <Link
                      to="/blog_grid"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Our Grid
                    </Link>
                    <Link
                      to="/blog_details"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Blog Details
                    </Link>
                  </div>
                )}

                {/* blog Area phone Responsive  End*/}

                {/* Service  Area start phone Responsive */}

                <button
                  className="w-full flex  items-center justify-between text-left px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
                  onClick={() => setService(!service)}
                >
                  <span> Service</span>
                  {service ? (
                    <span>
                      <IoIosArrowUp />
                    </span>
                  ) : (
                    <span>
                      <IoIosArrowDown />
                    </span>
                  )}
                </button>

                {service && (
                  <div className="pl-4 ">
                    <Link
                      to="/service"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Our Service
                    </Link>
                    <Link
                      to="/service_details"
                      className="block px-4    mx-2 py-1.5 rounded-lg hover:text-black hover:bg-primary "
                    >
                      Service_Details
                    </Link>
                  </div>
                )}

                {/* Servie End Area phone Responsive  End*/}

                {/* Team Area start phone Responsive */}

                <button
                  className="w-full flex  items-center justify-between text-left px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
                  onClick={() => setTeam(!team)}
                >
                  <span> Team</span>
                  {team ? (
                    <span>
                      <IoIosArrowUp />
                    </span>
                  ) : (
                    <span>
                      <IoIosArrowDown />
                    </span>
                  )}
                </button>

                {team && (
                  <div className="pl-4 ">
                    <Link
                      to="/team"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/team_details"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Team_Details
                    </Link>
                  </div>
                )}

                {/* Team End Area phone Responsive  End*/}

                {/* Portfolio  Area start phone Responsive */}

                <button
                  className="w-full flex  items-center justify-between text-left px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
                  onClick={() => setPortfolio(!portfolio)}
                >
                  <span> Portfolio</span>
                  {portfolio ? (
                    <span>
                      <IoIosArrowUp />
                    </span>
                  ) : (
                    <span>
                      <IoIosArrowDown />
                    </span>
                  )}
                </button>

                {portfolio && (
                  <div className="pl-4 ">
                    <Link
                      to="/port_oneColumn"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Portfolio One Column
                    </Link>
                    <Link
                      to="/port_towColumn"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Portfolio Two Column
                    </Link>
                    <Link
                      to="/port_details"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Portfolio Details
                    </Link>
                  </div>
                )}

                {/* Portfolio  End Area phone Responsive  End*/}

                {/* Account Area start phone Responsive */}

                <button
                  className="w-full flex  items-center justify-between text-left px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
                  onClick={() => setAccount(!account)}
                >
                  <span> Account</span>
                  {account ? (
                    <span>
                      <IoIosArrowUp />
                    </span>
                  ) : (
                    <span>
                      <IoIosArrowDown />
                    </span>
                  )}
                </button>

                {account && (
                  <div className="pl-4 ">
                    <Link
                      to="/signUp"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Sign-UP
                    </Link>
                    <Link
                      to="/signin"
                      className="block px-4  rounded-lg  mx-2 py-1.5 hover:text-black hover:bg-primary "
                    >
                      Sign-In
                    </Link>
                  </div>
                )}

                {/* Account  End Area phone Responsive  End*/}
              </div>
            )}

            <Link
              to="/contact_us"
              className="block px-3 py-2 rounded-lg hover:text-black hover:bg-primary "
            >
              Contact Us
            </Link>

            {/* Contact Button (mobile) */}
            <a
              href="#"
              className="block mt-4 bg-lime-400 text-black px-4 py-2 text-center rounded-lg hover:bg-lime-300"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
