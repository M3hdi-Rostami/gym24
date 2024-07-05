import { slide1, slide2, slide3, slide4 } from "../../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import "./about-us.scss";
import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";

const AboutUsSlider = () => {
  const slides = [slide1, slide2, slide3, slide4];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Swiper
        pagination={{
          el: "#slider-pagination",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="rounded-[10px]"
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={`slide-${index}`}>
              <img src={slide} className="w-full bg-cover" alt="slide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center justify-between mt-3">
        <div
          id="slider-pagination"
          className="flex items-center justify-start gap-2"
        />
        <div className="flex justify-end gap-3">
          <div
            ref={prevRef}
            className="cursor-pointer text-white hover:text-yellow transition duration-300"
          >
            <Icon path={mdiArrowLeft} size="24" />
          </div>
          <div
            ref={nextRef}
            className="cursor-pointer text-white hover:text-yellow transition duration-300"
          >
            <Icon path={mdiArrowRight} size="24" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSlider;
