import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import MembershipCard from "./MembershipCard";

const MemberShips = () => {
  const memberships = [
    {
      title: "Trial",
      price: 0,
      items: [
        {
          caption: "Access to the gym from 8:00 to 14:00",
        },
        {
          caption: "The trainer on duty will introduce you to the gym",
        },
      ],
    },
    {
      title: "Easy Start",
      price: 119,
      items: [
        {
          caption: "Visit without restrictions 24/7",
        },
        {
          caption: "Individual training program",
        },
        {
          caption: "Access to the VTRAINER application",
        },
        {
          caption: "Trainer support",
        },
      ],
    },
    {
      title: "Free Time",
      price: 49,
      items: [
        {
          caption: "The entrance time to the gym is from 14:00 to 16:00",
        },
        {
          caption: "Without suspension of gym membership",
        },
        {
          caption: "The trainer on duty will introduce you to the gym",
        },
      ],
    },
    {
      title: "1 Month 24/7",
      price: 85,
      items: [
        {
          caption: "Visit without restrictions 24/7",
        },
        {
          caption: "The trainer on duty will introduce you to the gym",
        },
      ],
    },
    {
      title: "In Shape (AM)",
      price: 165,
      items: [
        {
          caption: "Training in mini-groups until 14:00",
        },
        {
          caption: "Without suspension of gym membership",
        },
        {
          caption: "Classes with a trainer in a mini-group 3 times a week",
        },
        {
          caption: "Trainer support",
        },
      ],
    },
    {
      title: "In Shape (PM)",
      price: 195,
      items: [
        {
          caption: "Training in mini-groups until 17:00",
        },
        {
          caption: "Without suspension of gym membership",
        },
        {
          caption: "Classes with a trainer in a mini-group 3 times a week",
        },
        {
          caption: "Trainer support",
        },
      ],
    },
  ];
  return (
    <section className="flex items-center justify-center flex-col w-full mb-10 md:px-[100px]">
      <div className="text-[3rem] text-white mb-28 text-center md:text-left px-10 md:px-0">
        Gym membership
      </div>
      <div className="hidden md:flex items-center justify-center gap-16 flex-wrap">
        {memberships.map(({ title, price, items }, index) => {
          return (
            <MembershipCard
              key={`membership-${index}`}
              title={title}
              price={price}
              items={items}
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
            320: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
            580: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.7,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="md:rounded-[10px] w-full"
        >
          {memberships.map(({ title, price, items }, index) => {
            return (
              <SwiperSlide key={`membership-slide-${index}`}>
                <MembershipCard
                  key={`membership-${index}`}
                  title={title}
                  price={price}
                  items={items}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default MemberShips;
