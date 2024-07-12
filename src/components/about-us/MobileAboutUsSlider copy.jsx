import { slide1, slide2, slide3, slide4 } from "../../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";
import "./about-us.scss";

const MobileAboutUsSlider = () => {
  const slides = [slide1, slide2, slide3, slide4];

  return (
    <>
      <Swiper
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="md:rounded-[10px] w-full"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={`slide-${index}`}>
              <img src={slide} className="w-full bg-cover" alt="slide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default MobileAboutUsSlider;
