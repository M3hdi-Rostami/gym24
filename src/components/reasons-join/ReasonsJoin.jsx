import {
  eqipmentIcon,
  fitnessZonesIcon,
  lineIcon,
  timeIcon,
} from "../../assets/images";

const ReasonsJoin = () => {
  const ReasonBox = ({ image, title, description }) => {
    return (
      <div className="flex items-center justify-center gap-5">
        <img src={image} alt="reason box" className="w-20 h-20 pt-4" />
        <div className="flex flex-col gap-2">
          <span className="ont-family-extra-bold text-18">{title}</span>
          <span className="font-light text-14 max-w-[400px]">
            {description}
          </span>
        </div>
      </div>
    );
  };

  const reasons = [
    {
      image: lineIcon,
      title: "15000 sq.m.",
      description:
        "A spacious gym for sports – a safe distance between exercise machines",
    },
    {
      image: eqipmentIcon,
      title: "More than 200 equipment",
      description:
        "No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.",
    },
    {
      image: fitnessZonesIcon,
      title: "4 fitness zones",
      description:
        "From cardio to functional and cycle. Separate area for boxing and mixed martial arts",
    },
    {
      image: timeIcon,
      title: "Round-the-clock operation",
      description:
        "The gym is open 24 hours a day, also works on all holidays and weekends",
    },
  ];

  return (
    <div className="px-56 py-8 mt-44 mb-60">
      <div className="text-5xl font-family-extra-bold mb-28">
        Reasons to join
      </div>
      <div className="flex flex-wrap gap-x-28 gap-y-20 ">
        {reasons.map(({ image, title, description }) => (
          <div className="basis-[473px] flex-grow">
            <ReasonBox image={image} title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsJoin;
