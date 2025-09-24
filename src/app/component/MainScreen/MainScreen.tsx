"use client";
import React, { useState } from "react"; // 1. Импортируем useState
import Image from "next/image";
import { usePopup } from "@/context/PopapContext";

const MainScreen = () => {
  // 2. Создаем состояние для отслеживания загрузки
  const [isLoading, setIsLoading] = useState(true);
    const { activePopap, setActivePopap } = usePopup();


  const handleOpenPopup = () => {
    setActivePopap(!activePopap);
  }

  
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 right-0 lg:left-[3.75%] lg:right-[3.75%] -z-10">
        <Image
          src={"/mainBg.png"}
          layout="fill"
          objectFit="cover"
          alt="Современный дом с системой накопления энергии"
          priority
          // 3. Добавляем обработчик onLoad, который сработает после загрузки картинки
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#111214)]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#111214]/80 to-transparent z-10" />

      {/* 4. Оборачиваем весь контент в div с анимацией */}
      <div
        className={`relative mx-auto flex min-h-screen flex-col pt-10 transition-opacity duration-700 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 lg:left-6 lg:right-6">
          <div className="relative flex h-full flex-col justify-end pb-12 lg:justify-between lg:pt-30">
            <p className="hidden relative left-[3.75%] right-[3.75%] text-[12px] font-medium text-white/30 lg:flex">
              Главная / <span className="text-white/60">О нас</span>
            </p>
            <div className="flex flex-col max-w-[1332px] relative mx-auto justify-between gap-6 pt-20 lg:flex-row">
              <div className="absolute bottom-[10%] left-0 right-0 z-0 m-auto w-full max-w-[360px] lg:max-w-[460px] px-8 lg:m-0 lg:left-auto lg:right-[0%] lg:bottom-[-80%]">
                <Image
                  src={"/mainSlide/image9.svg"}
                  width={460}
                  height={380}
                  alt="Накопитель энергии Volts"
                  className="h-auto w-full"
                />
              </div>

              <div className="z-20 flex flex-1 flex-col items-center gap-6 lg:items-start">
                <h1 className="px-4 text-center text-[26px] font-medium leading-[1.15] text-white lg:px-0 lg:text-start lg:text-[52px]">
                  Ищете альтернативу генератору или ИБП?
                </h1>
                <button onClick={handleOpenPopup} className="h-[52px] flex justify-center items-center w-fit rounded-[24px] border-0 bg-gradient-to-r from-[#2859e6] to-[#5279e8] p-4 text-[16px] font-medium text-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#ff6116] hover:to-[#f49364]">
                  Заказать консультацию
                </button>
              </div>

              <div className="z-20 mt-auto flex h-fit flex-col items-center justify-center gap-2 px-4 lg:flex-1 lg:flex-row lg:items-start lg:gap-4.5 lg:*:text-start">
                <div className="flex max-w-[220px] items-start gap-2 text-center text-[14px] font-light leading-[1.25] text-white/80">
                  <span className="text-white/50">&gt;</span>
                  <p>Интеллектуальная защита от отключений и скачков напряжения</p>
                </div>
                <div className="flex max-w-[220px] items-start gap-2 text-center text-[14px] font-light leading-[1.25] text-white/80">
                  <span className="text-white/50">&gt;</span>
                  <p>Высокая мощность от 2 до 200 кВт</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
// 111