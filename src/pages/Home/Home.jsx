import { FaArrowUp } from "react-icons/fa6";
import Banner from "./Banner";
import CreativeProject from "./CreativeProject";
import LineSlider from "./LineSlider";

import Quality from "./Quality";
import Reivews from "./Reivews";
import Solution from "./Solution";
import TeamsMember from "./TeamsMember";
import useMenu from "../../hook/useMenu";
import { useEffect } from "react";

const Home = () => {
  const [scrollButtonRef] = useMenu();
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="mt-8">
        <Solution></Solution>
        <CreativeProject></CreativeProject>
        <Quality></Quality>
        <Reivews></Reivews>
        <LineSlider></LineSlider>
        <TeamsMember></TeamsMember>
        <div ref={scrollButtonRef} className="fixed right-5 bottom-5 hidden">
          <button className="bg-primary  p-3 rounded-lg shadow-lg">
            <FaArrowUp className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
