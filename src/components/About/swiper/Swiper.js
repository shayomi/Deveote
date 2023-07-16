import React from "react";

import classes from "./Swiper.module.css";
// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Collage1 from "../collages/Collage1";
import Collage2 from "../collages/Collage2";

const About = () => {
  return (
    <div className={classes.swiper}>
      <Swiper
        className={classes.containerSwiper}
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={classes.aboutSwiper}>
          <Collage1 />
        </SwiperSlide>
        <SwiperSlide className={classes.aboutSwiper}>
          <Collage2 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
