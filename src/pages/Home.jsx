import Header from "../components/header/Header";
import ReasonsJoin from "../components/reasons-join/ReasonsJoin";
import MemberShips from "../components/memberships/Memberships";
import AboutUs from "../components/about-us/AboutUs";
import Trainers from "../components/trainers/Trainers";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-[372.5px]">
        <ReasonsJoin />
        <MemberShips />
        <AboutUs />
        <Trainers />
      </div>
    </>
  );
};

export default Home;
