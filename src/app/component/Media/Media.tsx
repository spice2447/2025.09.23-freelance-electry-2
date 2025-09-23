"use client";
import React from "react";
import Carousel from "@/components/Carousel";
import Arrow from "./Arrow";

// 1. Определяем тип для объекта с данными
type MediaItem = {
  id: number;
  imgSrc: string;
  date: string;
  title: string;
  url: string;
};

// 2. Создаем массив с данными
const mediaData: MediaItem[] = [
  {
    id: 1,
    imgSrc: "/partners/forbes.webp",
    date: "23.09.2025",
    title: "Компания Volts расширяет производство инновационных накопителей энергии",
    url: "https://www.forbes.ru/forbes-agenda/499276-kompania-volts-rassiraet-proizvodstvo-innovacionnyh-nakopitelej-energii",
  },
  {
    id: 2,
    imgSrc: "/partners/commer.jpg",
    date: "15.08.2025",
    title: "«Вольтс Групп» инвестирует в расширение",
    url: "https://www.kommersant.ru/doc/6311010",
  },
  {
    id: 3,
    imgSrc: "/partners/listok.jpeg",
    date: "02.07.2025",
    title: "Как Volts помогает бизнесу экономить на электроэнергии",
    url: "https://listok.spb.ru/2023/08/09/proekt-umestnye-kopim-energiyu-po-umnomu/",
  },
  {
    id: 4,
    imgSrc: "/partners/RBK_logo.png",
    date: "25.06.2025",
    title: "Интервью с основателем Volts: будущее за автономными системами",
    url: "https://plus.rbc.ru/pressrelease/652e80b37a8aa95244d6b0e3",
  },
];

// 3. Обновляем RenderMedia для работы с объектом
const RenderMedia = ({ item }: { item: MediaItem }) => {
  return (
    <a href={item.url} className="flex items-center justify-center w-full rounded-[12px] overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.07)] border-[#93939346] bg-white">
      <div className="relative w-full">
        {item.imgSrc ? <img
          src={item.imgSrc}
          alt={item.title}
          className="object-contain object-center h-full w-full aspect-square"
        /> : <img
          src={"/1.png"}
          alt={item.title}
          className="object-cover object-top h-full w-full aspect-square"
        />}
        <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-between bg-gradient-to-t from-[#111214cc] to-[#15161700] rounded-[12px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-between rounded-[12px]">
        <p className="px-2.5 py-1 text-[#E1E1E1] leading-[1.24] text-[12px] font-medium bg-[rgba(58,58,70,.8)] rounded-[12px] self-start">
          {item.date}
        </p>
        <div className="flex flex-col gap-3 text-white leading-[1.24]">
          <p className="text-[12px] font-semibold]">
            {item.title}
          </p>
          <div className="flex gap-1.5 items-center">
            <div className="flex items-center justify-center bg-[#BBBAB8] size-[36px] rounded-[100%]">
              <Arrow />
            </div>
            <p className="text-[14px]">Читать подробнее</p>
          </div>
        </div>
      </div>
    </a>
  );
};


const Media = () => {
  return (
    <section className="px-4">
      <Carousel
        title="СМИ о нас"
        images={mediaData} // 4. Передаем новый массив объектов
        buttonTitle="Все статьи"
        renderItem={(item) => <RenderMedia item={item} />} // renderItem теперь передает весь объект
        mediaCount={3}
      />
    </section>
  );
};

export default Media;