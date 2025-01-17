import Header from "../components/header/Header";
import ReasonsJoin from "../components/reasons-join/ReasonsJoin";
import MemberShips from "../components/memberships/Memberships";
import AboutUs from "../components/about-us/AboutUs";
import Trainers from "../components/trainers/Trainers";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="xl:px-[372.5px] md:px-10 select-none md:select-auto">
        <div className="scroll-mt-24" id="reason-join">
          <ReasonsJoin />
        </div>
        <div className="scroll-mt-24" id="member-ships">
          <MemberShips />
        </div>
        <div className="scroll-mt-24" id="about-us">
          <AboutUs />
        </div>
        <div className="scroll-mt-24" id="trainers">
          <Trainers />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
