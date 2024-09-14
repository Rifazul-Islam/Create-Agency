import Banner from "./Banner";
import CreativeProject from "./CreativeProject";
import LineSlider from "./LineSlider";

import Quality from "./Quality";
import Reivews from "./Reivews";
import Solution from "./Solution";
import TeamsMember from "./TeamsMember";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mt-8">
        <Solution></Solution>
        <CreativeProject></CreativeProject>
        <Quality></Quality>
        {/*   <Reivews></Reivews>
          <LineSlider></LineSlider>
          <TeamsMember></TeamsMember>  */}
      </div>
    </div>
  );
};

export default Home;
