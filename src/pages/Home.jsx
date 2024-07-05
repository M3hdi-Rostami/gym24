import Header from "../components/header/Header";
import ReasonsJoin from "../components/reasons-join/ReasonsJoin";
import MemberShips from "../components/memberships/Memberships";
import AboutUs from "../components/about-us/AboutUs";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-[220px]">
        <ReasonsJoin />
        <MemberShips />
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
