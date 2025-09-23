"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import React from "react";
import Arrow from "@/app/component/Media/Arrow";
import { useMedia } from "@/hooks/useMedia";
type SimpleCarouselProps = {
  title: string;
  buttonTitle?: string;
  images: string[];
  renderItem: (strg: string) => React.FC;
  mediaCount?: number;
};
const Carousel: React.FC<SimpleCarouselProps> = ({
  title,
  images,
  buttonTitle,
  renderItem,
  mediaCount = 2,
}) => {
  const { isMedia } = useMedia("(min-width: 1024px)");
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  return (
    <div className="relative flex flex-col gap-6 lg:gap-8 pb-12">
      <div className="flex justify-between gap-4 lg:gap-8 items-center">
        <h2 className="font-medium text-[22px] lg:text-[44px] leading-none text-[#F8F9F8]">
          {title}
        </h2>
        <div className="flex gap-1.5">
          <div className="absolute left-0 right-0 bottom-0 flex items-center justify-center gap-1 lg:relative">
            <button
              ref={prevRef}
              className="flex items-center justify-center bg-[#BBBAB8] shadow-lg size-[36px] rounded-[100%]"
            >
              <Arrow className="transform rotate-180" />
            </button>
            <button
              ref={nextRef}
              className="flex items-center justify-center bg-[#BBBAB8] shadow-lg size-[36px] rounded-[100%]"
            >
              <Arrow />
            </button>
          </div>
          {buttonTitle && (
            <button className="text-white cursor-pointer bg-[#3858b1] rounded-[30px] py-3 px-3 font-Inter text-[12px] font-medium leading-[1.24]">
              {buttonTitle}
            </button>
          )}
        </div>
      </div>

      <div className="relative w-full h-scree flex items-center justify-center">
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: unknown) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop
            // centeredSlides
            slidesPerGroup={1}
            slidesPerView={isMedia ? mediaCount : 1}
            // slidesPerView="auto"
            spaceBetween={12}
            effect="coverflow"
          >
            {images.map((src, i) => (
              <SwiperSlide
                key={i}
                className="relative transition-all duration-300"
              >
                {renderItem(src)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
