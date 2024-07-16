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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
      <div className="sm:text-[48px] text-[28px] text-white mb-28 text-center">
        Trainers staff
      </div>
      <div className="hidden md:flex items-center justify-center gap-5 flex-wrap">
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
      <div className="w-full block md:hidden">
        <Swiper
          slidesPerView={2.5}
          centeredSlides={true}
          spaceBetween={36}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            375: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            412: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 36,
            },
          }}
          modules={[Autoplay]}
          className="rounded-[10px] w-full"
        >
          {trainers.map(
            ({ name, image, instagram, twitter, youtube }, index) => {
              return (
                <SwiperSlide key={`trainer-slide-${index}`}>
                  <TrainerCard
                    key={`trainer-${index}`}
                    image={image}
                    name={name}
                    instagram={instagram}
                    twitter={twitter}
                    youtube={youtube}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Trainers;
