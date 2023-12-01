"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CaseCard } from "../CaseCard/CaseCard";
import SlideNextButton from "./Navigation";
import cases from "@/app/data/cases.json";
import "swiper/css";

export const Slider = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => setCount(swiper.realIndex + 1)}
        style={{ paddingTop: "90px" }}
      >
        <SlideNextButton count={count} />
        {cases.map((onecase) => (
          <SwiperSlide key={onecase.id}>
            <CaseCard onecase={onecase} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
