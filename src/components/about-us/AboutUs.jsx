import DesktopAboutUsSlider from "./DesktopAboutUsSlider";
import MobileAboutUsSlider from "./MobileAboutUsSlider copy";

const AboutUs = () => {
  return (
    <div className="flex items-start justify-between flex-col md:flex-row gap-[118px] mt-[264px] mb-[241px]">
      <div className="max-w-[472px] md:max-w-full m-auto md:m-0 px-10 md:px-0">
        <div className="text-[3rem] text-white mb-16 text-center md:text-left">
          About us
        </div>
        <div className="flex flex-col gap-10 text-14 font-light text-center md:text-left">
          <p className="leading-6">
            Gym24 is a leading fitness center located near Grushevka metro
            station, offering over 1500 sq. m of space dedicated to
            top-of-the-line workout equipment from leading brands such as Hammer
            Strength, Life Fitness, and TechnoGym.
          </p>
          <p className="leading-6">
            With affordable membership options, Gym24 is accessible to everyone
            who wants to reach their fitness goals, whether it's building
            strength, increasing endurance, or losing weight.
          </p>
          <p className="leading-6">
            Certified trainers at Gym24 provide expert guidance and support to
            develop personalized workout plans tailored to each individual's
            needs and goals.
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/4 rounded-[10px] relative">
        <div className="hidden md:block">
          <DesktopAboutUsSlider />
        </div>
        <div className="md:hidden block">
          <MobileAboutUsSlider />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
