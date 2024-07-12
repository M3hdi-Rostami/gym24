import { slide1, slide2, slide3, slide4 } from "../../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import "./about-us.scss";
import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";

const DesktopAboutUsSlider = () => {
  const slides = [slide1, slide2, slide3, slide4];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        pagination={{
          el: "#slider-pagination",
          clickable: true,
        }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
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
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="flex items-center justify-between mt-3">
        <div
          id="slider-pagination"
          className="flex items-center justify-start gap-2"
        />
        <div className="flex justify-end gap-3">
          <div
            ref={prevRef}
            className="cursor-pointer text-white hover:text-yellow transition duration-500"
          >
            <Icon path={mdiArrowLeft} size="24" />
          </div>
          <div
            ref={nextRef}
            className="cursor-pointer text-white hover:text-yellow transition duration-500"
          >
            <Icon path={mdiArrowRight} size="24" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopAboutUsSlider;
