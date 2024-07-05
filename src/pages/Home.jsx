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
      <div className="px-[372.5px]">
        <ReasonsJoin />
        <MemberShips />
        <AboutUs />
        <Trainers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
