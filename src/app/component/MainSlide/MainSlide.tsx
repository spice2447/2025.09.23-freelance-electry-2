"use client";
import React, { useState } from "react";
import Image from "next/image";

const COLORS = [
  "#333333", // Черный
  "#FFFFFF", // Белый
  "#E8C594", // Бежевый
  "#24A32E", // Зеленый
  "#E6282B", // Красный
  "#2859E6", // Синий
  "#969696", // Серый
];

const COLOR_TO_IMAGE_MAP: { [key: string]: string } = {
  "#333333": "/mainSlide/image9.svg",
  "#FFFFFF": "/mainSlide/image8.svg",
  "#E8C594": "/mainSlide/image7.svg",
  "#24A32E": "/mainSlide/image6.svg",
  "#E6282B": "/mainSlide/image5.svg",
  "#2859E6": "/mainSlide/image4.svg",
  "#969696": "/mainSlide/image3.svg",
};

const ALL_IMAGES = Object.values(COLOR_TO_IMAGE_MAP);
const DEFAULT_COLOR = "#24A32E";
const DEFAULT_IMAGE_SRC = COLOR_TO_IMAGE_MAP[DEFAULT_COLOR];

const MainSlide = () => {
  const [activeColor, setActiveColor] = useState(DEFAULT_COLOR);
  const [currentImageSrc, setCurrentImageSrc] = useState(DEFAULT_IMAGE_SRC);

  const handleColorClick = (color: string) => {
    setActiveColor(color);
    setCurrentImageSrc(COLOR_TO_IMAGE_MAP[color]);
  };

  return (
    <section className="relative px-4 pb-24 bg-[url('/mainSlide/bg.png')] bg-[50%_20%] bg-cover lg:bg-[50%_110%] lg:pt-30 overflow-hidden">
      {/* Тени с новым цветом и адаптивными размерами */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#111214] to-transparent z-10" />
      <div className="absolute bottom-0 inset-x-0 h-2/3 lg:h-60 bg-gradient-to-t from-[#111214] to-transparent z-10" />

      <div className="relative flex flex-col z-20">
        <div className="flex flex-col gap-3 text-[#F8F9F8] leading-[1.15] text-center items-center lg:gap-6">
          <p className="text-[28px] lg:text-[44px] font-medium tracking-[-0.01]">
            Забудьте о перебоях с электричеством. Навсегда.
          </p>
          <p className="text-[14px] lg:max-w-[400px] text-white/80">
            VOLTS автоматически обеспечивает ваш дом стабильным электроснабжением во время отключений света и скачков напряжения, заряжаясь от электросети или солнечных панелей
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-16 items-center justify-center lg:mt-16">
          <div className="flex flex-col gap-6 text-white/60 lg:order-1 lg:gap-8 lg:*:h-[150px] lg:max-w-[290px] lg:*:p-6 lg:*:border lg:*:rounded-[16px] lg:*:border-white/20 lg:mt-[-64px]">
            <div className="flex flex-col gap-2 text-[14px] leading-[1.25] *:text-center items-center">
              <Image src={"/mainSlide/1.svg"} width={27} height={27} alt="Иконка 1" />
              <p>У соседей темно, а у вас работает всё — от котла до Wi-Fi</p>
            </div>
            <div className="flex flex-col gap-2 text-[14px] leading-[1.25] *:text-center items-center">
              <Image src={"/mainSlide/2.svg"} width={27} height={27} alt="Иконка 2" />
              <p>Не хватает мощности от сети? Включайте сауну, мастерскую и заряжайте электромобиль одновременно</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-white/60 lg:order-3 lg:gap-8 lg:*:h-[150px] lg:max-w-[290px] lg:*:p-6 lg:*:border lg:*:rounded-[16px] lg:*:border-white/20 lg:mt-[-64px]">
            <div className="flex flex-col gap-2 text-[14px] leading-[1.25] *:text-center items-center">
              <Image src={"/mainSlide/3.svg"} width={27} height={27} alt="Иконка 3" />
              <p>Защитите дорогую технику — от домашнего кинотеатра до котла отопления — от губительных скачков напряжения</p>
            </div>
            <div className="flex flex-col gap-2 text-[14px] leading-[1.25] *:text-center items-center">
              <Image src={"/mainSlide/4.svg"} width={27} height={27} alt="Иконка 4" />
              <p>Полный контроль над энергосистемой дома в вашем смартфоне, где бы вы ни были</p>
            </div>
          </div>

          <div className="mt-9 lg:order-2">
            <div className="relative w-[240px] h-[400px] lg:w-[300px] lg:h-[500px] mx-auto">
              {ALL_IMAGES.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="Накопитель энергии VOLTS"
                  layout="fill"
                  objectFit="contain"
                  className={`transition-opacity duration-700 ease-in-out ${
                    currentImageSrc === src ? "opacity-100" : "opacity-0"
                  }`}
                  unoptimized
                />
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-[-90px] lg:mt-0 relative z-10">
              <div className="flex flex-col gap-3 lg:hidden ">
                <p className="text-[28px] font-medium leading-none text-center text-white">
                  Умная энергия для вашего дома
                </p>
                <p className="text-white/60 text-[14px] leading-[1.25] text-center">
                  VOLTS автоматически обеспечивает ваш дом...
                </p>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <p className="text-white/30 text-[12px] leading-[1.25] text-center">
                  VOLTS под любой интерьер
                </p>
                <div className="flex gap-1 justify-center">
                  {COLORS.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleColorClick(item)}
                      className={`size-[26px] p-0.5 rounded-full cursor-pointer transition-opacity duration-300 ${
                        activeColor === item ? "opacity-100" : "opacity-50 hover:opacity-75"
                      }`}
                    >
                      <div
                        className="w-full h-full rounded-full border-2 border-black/50"
                        style={{ backgroundColor: item }}
                      >
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                          <div
                            className={`bg-white size-2 rounded-full transition-all duration-300 ease-in-out ${
                              activeColor === item
                                ? "scale-100 opacity-100"
                                : "scale-0 opacity-0"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlide;