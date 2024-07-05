import AboutUsSlider from "./AboutUsSlider";

const AboutUs = () => {
  return (
    <div className="flex items-start justify-between gap-[118px] mt-[264px] mb-[241px]">
      <div className="">
        <div className="text-[48px] text-white mb-16">About us</div>
        <div className="flex flex-col gap-10 text-14 font-light">
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
      <div className="w-2/4 rounded-[10px] relative">
        <AboutUsSlider />
      </div>
    </div>
  );
};

export default AboutUs;
