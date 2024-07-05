import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
} from "../../assets/images";
import TrainerCard from "./TrainerCard";

const Trainers = () => {
  const trainers = [
    {
      image: card1,
      name: "Victoria Shurpik",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
    {
      image: card2,
      name: "Elizabeth Lavrinenko",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
    {
      image: card3,
      name: "Ivan Gladkikh",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
    {
      image: card4,
      name: "Lyudmila Sabilo",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
    {
      image: card5,
      name: "Evgeny Gurkov",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
    {
      image: card6,
      name: "Anatoly Prytytsky",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
    {
      image: card7,
      name: "Victor Ludkovich",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
    {
      image: card8,
      name: "Maria Masyak",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
  ];
  return (
    <section className="flex items-center justify-center flex-col w-full mb-[259px]">
      <div className="text-[48px] text-white mb-28">Trainers staff</div>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {trainers.map(({ name, image, instagram, twitter, youtube }, index) => {
          return (
            <TrainerCard
              key={`trainer-${index}`}
              image={image}
              name={name}
              instagram={instagram}
              twitter={twitter}
              youtube={youtube}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Trainers;
