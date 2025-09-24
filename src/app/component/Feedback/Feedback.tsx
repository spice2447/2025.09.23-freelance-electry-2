"use client";
import React from "react";
import Carousel from "@/components/Carousel";
import Arrow from "./Arrow";

// Определяем тип данных для элемента отзыва
type FeedbackItemProps = {
  id: number;
  videoUrl: string;       // Путь к локальному видео
  posterImgSrc: string;   // Путь к локальному постеру
  date: string;
  title: string;
};

// Массив с данными для каждого отзыва
const feedbackData: FeedbackItemProps[] = [
  {
    id: 1,
    videoUrl: "/video_review.mp4", // Ваша ссылка на видео
    posterImgSrc: "/placeholder-video-poster.png", // Замените на путь к изображению-постеру
    date: "10.12.2024",
    title: "Отзыв клиента: Накопитель энергии Volts в загородном доме",
  },
  
  {
    id: 2,
    videoUrl: "video_review_2.mp4", // Пример с прямой ссылкой на mp4
    posterImgSrc: "/placeholder-video-poster.png",
    date: "25.11.2024",
    title: "Видеообзор: Установка системы Volts в офисе",
  },
  {
    id: 3,
    videoUrl: "video_review_3.mp4",
    posterImgSrc: "/placeholder-video-poster.png",
    date: "01.10.2024",
    title: "Интервью: Эксперты о решениях Volts",
  },
];
const FeedbackItem = ({ item }: { item: FeedbackItemProps }) => {
  return (
    <div className="relative flex flex-col w-full rounded-[12px] overflow-hidden shadow-[0_2px_4px_0_rgba(0,0,0,0.07)] border border-[#93939346] bg-[#111214]">
      <div className="relative w-full aspect-[16/9] bg-black">
        <video
          src={item.videoUrl}
          poster={item.posterImgSrc}  // <-- 1. Показывает картинку до загрузки видео
          controls
          preload="none"            // <-- 2. ГЛАВНАЯ ОПТИМИЗАЦИЯ!
          className="object-cover h-full w-full"
          aria-label={item.title}
        >
          Ваш браузер не поддерживает видео тег.
        </video>
      </div>

      {/* <div className="absolute inset-0 p-4 flex flex-col justify-between rounded-[12px] pointer-events-none">
        <p className="px-2.5 py-1 text-[#E1E1E1] ... pointer-events-auto">
          {item.date}
        </p>
        <div className="flex flex-col gap-3 text-white leading-[1.24]">
          <p className="text-[12px] font-semibold]">
            {item.title}
          </p>
          <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="flex gap-1.5 items-center pointer-events-auto">
            <div className="flex items-center justify-center bg-[#BBBAB8] size-[36px] rounded-[100%]">
              <Arrow />
            </div>
            <p className="text-[14px]">Смотреть видео</p>
          </a>
        </div>
      </div> */}
    </div>
  );
};
const Feedback = () => {
  return (
    <section className="px-4">
      <Carousel
        title="Отзывы"
        images={feedbackData} // Передаем массив объектов
        buttonTitle="Все отзывы"
        renderItem={(item) => <FeedbackItem item={item} />} // renderItem теперь принимает объект
        mediaCount={2}
      />
    </section>
  );
};

export default Feedback;