"use client";

import { useState } from "react"; // 1. Импортируем useState
import Line from "../Line/Line";

const Mediaps = [
  "/media/vk.svg",
  "/media/telegram.svg",
  "/media/whatsapp.svg",
  "/media/youtube.svg",
  "/media/zen.svg",
  "/media/vcru.svg",
];
const MediaList = () => {
  return (
    <div className="flex flex-col gap-1.5 items-center text-[#F8F9F8] leading-[1.05] lg:items-start">
      <p className="text-[10px] font-medium opacity-50 uppercase">
        НАШИ СОЦИАЛЬНЫЕ СЕТИ
      </p>
      <div className="flex gap-2 items-center">
        {Mediaps.map((item) => (
          <img src={item} key={item} />
        ))}
      </div>
    </div>
  );
};

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        setStatus("success");
        setName(""); // Очищаем поля после успеха
        setPhone("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  // Определяем текст для кнопки в зависимости от статуса
  const getButtonValue = () => {
    if (status === "loading") return "Отправка...";
    if (status === "success") return "Отправлено!";
    if (status === "error") return "Ошибка, попробуйте снова";
    return "Оставить заявку";
  };
  return (
    <footer className="px-4 py-8 pb-6 bg-[url('/footerBg.jpg')] bg-[50%] bg-[auto_102%]">
      <div className="flex flex-col gap-1.5 lg:max-w-[840px] m-auto">
        {/* --- Форма --- */}
        <div className="flex flex-col gap-1.5 text-[#F8F9F8] leading-[1.24] ">
          <p className="text-[22px] lg:text-[32px] font-semibold text-center">
            Остались вопросы?
          </p>
          <p className="text-[14px] text-center opacity-50">
            Оставьте ваши контактные данные и мы на них ответим
          </p>
        </div>
        {/* 4. Оборачиваем инпуты в тег <form> и добавляем onSubmit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 mt-6 lg:flex-row ">
          <input
            className="text-black/60 border bg-[#F8F9F8] border-[#ebebeb] rounded-[24px] w-full h-[52px] p-4 text-[14px]"
            maxLength={256}
            placeholder="Имя"
            type="text"
            id="name-2"
            required
            value={name} // 5. Связываем инпуты с состоянием
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'loading'}
          />
          <input
            className="text-black/60 border bg-[#F8F9F8] border-[#ebebeb] rounded-[24px] w-full h-[52px] p-4 text-[14px]"
            maxLength={256}
            placeholder="+7"
            type="tel" // Лучше использовать type="tel" для телефонов
            id="phone"
            required
            value={phone} // 5. Связываем инпуты с состоянием
            onChange={(e) => setPhone(e.target.value)}
            disabled={status === 'loading'}
          />
          <input
            type="submit"
            className="w-full text-white bg-gradient-to-r from-[#2859e6] to-[#5279e8] rounded-[24px] h-[52px] p-4 font-medium text-[16px] hover:bg-gradient-to-r hover:from-[#ff6116] hover:to-[#f49364] transition-colors duration-200 disabled:opacity-50"
            value={getButtonValue()} // 6. Динамически меняем текст
            disabled={status === 'loading'}
          />
        </form>
        {status === 'success' && <p className="text-center text-green-400 mt-2">Спасибо! Мы скоро с вами свяжемся.</p>}
        {status === 'error' && <p className="text-center text-red-400 mt-2">Произошла ошибка при отправке.</p>}
        <label className="flex items-start mt-3 text-[#F8F9F8] opacity-40 m-auto max-w-[400px]">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            className="box-border text-white mr-2 w-[18px] min-w-[18px] h-[18px] appearance-none bg-transparent border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-blue-500"
          />
          <span className="text-[12px] leading-[1.2]">
            Я даю согласие на обработку моих персональных данных{" "}
            <a href="company/politika-konfidencialnosti.html">
              согласно политике обработки персональных данных
            </a>
          </span>
        </label>
      </div>

      {/* --- Контакты и соцсети --- */}
      <div className="flex flex-col gap-10 mt-30 lg:mt-40 lg:gap-16 ">
        <p className="text-[24px] lg:text-[52px] font-semibold text-center leading-[1] text-[#F8F9F8]">
          Сердце вашего дома
        </p>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-21 lg:max-w-[1058px] m-auto ">
            <div className="flex flex-col gap-1.5 lg:order-2 ">
              <p className="text-[12px] uppercase font-medium leading-[1.05] text-[#F8F9F8] opacity-50">
                Центральные офисы:
              </p>
              <div className="flex gap-4 *:flex-1 text-[12px] lg:text-[14px] leading-[1.24] text-[#F8F9F8] lg:flex-col">
                <p>
                  <strong>Москва</strong>
                  <br />
                  51 км МКАД, ТВК "Элитстрой Материалы", 3-й этаж
                </p>
                <p>
                  <strong>Санкт-Петербург</strong>
                  <br />
                  Державинский переулок, 5
                </p>
                <div className="hidden lg:flex">
                  <MediaList />
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 *:flex-1 lg:order-1 lg:flex-col">
              <div className="flex flex-col gap-2 lg:gap-3">
                <p className="text-[12px] uppercase font-medium leading-[1.05] text-[#F8F9F8] opacity-50">
                  Офис в вашем городе
                </p>
                <button className="px-5 py-2 cursor-pointer leading-[1.25] font-medium rounded-[30px] text-white bg-[#3858b1] text-[12px] w-fit">
                  Найти офис
                </button>
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 justify-between: justify-baseline">
                <p className="text-[12px] uppercase font-medium leading-[1.05] text-[#F8F9F8] opacity-50 ">
                  СЕРВИСНЫЕ ЦЕНТРЫ
                </p>
                <button className="lg:hidden px-5 py-2 cursor-pointer leading-[1.25] font-medium rounded-[30px] text-white bg-[#3858b1] text-[12px] w-fit">
                  Найти сервис
                </button>
                <button className="hidden lg:inline-block px-5 py-2 cursor-pointer leading-[1.25] font-medium rounded-[30px] text-white bg-[#3858b1] text-[12px] w-fit">
                  Выбрать сервисный центр
                </button>
              </div>
            </div>
            <div className="flex-col hidden lg:flex lg:order-3  gap-4">
              <div className="lg:hidden">
                <MediaList />
              </div>
              <div className="flex flex-col gap-1.5 items-center text-[#F8F9F8] leading-[1.05]">
                <p className="text-[10px] font-medium opacity-50 uppercase">
                  бесплатный звонок по России
                </p>
                <p className="text-[24px] font-medium ">8 (800) 707-90-46</p>
              </div>
              <div className="flex flex-col gap-1.5 items-center text-[#F8F9F8] leading-[1.05]">
                <p className="text-[10px] font-medium opacity-50 uppercase">
                  ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
                </p>
                <p className="text-[24px] font-medium ">8 (800) 707-90-46</p>
              </div>
              <div className="flex flex-col gap-1.5 items-center text-[#F8F9F8] leading-[1.05]">
                <p className="text-[10px] font-medium opacity-50 uppercase">
                  ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
                </p>
                <p className="text-[18px] font-medium">
                  office@voltsbattery.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="lg:hidden flex flex-col gap-4">
            <div className="lg:hidden">
              <MediaList />
            </div>
            <div className="flex flex-col gap-1.5 items-center text-[#F8F9F8] leading-[1.05]">
              <p className="text-[10px] font-medium opacity-50 uppercase">
                бесплатный звонок по России
              </p>
              <p className="text-[24px] font-medium ">8 (800) 707-90-46</p>
            </div>
            <div className="flex flex-col gap-1.5 items-center text-[#F8F9F8] leading-[1.05]">
              <p className="text-[10px] font-medium opacity-50 uppercase">
                ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
              </p>
              <p className="text-[24px] font-medium ">8 (800) 707-90-46</p>
            </div>
            <div className="flex flex-col gap-1.5 items-center text-[#F8F9F8] leading-[1.05]">
              <p className="text-[10px] font-medium opacity-50 uppercase">
                ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
              </p>
              <p className="text-[18px] font-medium">office@voltsbattery.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-10 lg:px-16">
            <div className="flex flex-col gap-10 lg:gap-13">
              <Line />
              <div className="hidden lg:flex justify-between items-start w-full relative">
                <div className="flex gap-[3px] text-white text-[14px] leading-[1.25] *:px-2.5 *:py-1 *:bg-white/10 *:rounded-[30px]">
                  <p>Характеристики</p>
                  <p>Каталог</p>
                  <p>Наши проекты</p>
                  <p>Отзывы</p>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-[6px] text-[12px] leading-[1.25] text-white/60">
                  <p>О компании</p>
                  <p>Сертификаты</p>
                  <p>Статьи</p>
                  <a>Инструкция</a>
                  <p>Сервисные центры</p>
                  <p>Вакансии</p>
                  <p>Оплата и доставка</p>
                  <p>Стать агентом</p>
                </div>
              </div>
              <img src={"/logo.svg"} className="w-[110px] m-auto" />
              <div className="flex flex-col gap-3 *:text-center *:last:mt-1 lg:flex-row w-full justify-between">
                <p className="text-[12px] text-white/60 leading-[1.24] lg:order-3">
                  Политика конфиденциальности
                </p>
                <p className="text-[12px] text-white/60 leading-[1.24] lg:order-1">
                  Мы используем cookie
                </p>
                <p className="text-[10px] lg:text-[12px] text-white/30 leading-[1.24] lg:order-2">
                  © 2025 VOLTS официальный сайт накопителей электроэнергии. Все
                  права защищены.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
