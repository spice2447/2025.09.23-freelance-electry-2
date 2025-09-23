'use client'
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import phoneIcon from "@/../public/svg/phone.svg";
import logoIcon from "@/../public/svg/Logo.svg";
import dotsIcon from "@/../public/svg/dots.svg";
import Link from "next/link";
import { usePopup } from "@/context/PopapContext";
import cn from "classnames";
import { MenuItem } from "./MenuItem/MenuItem";
// import { twMerge as cn } from "tailwind-merge";
interface ISubNav {
  id: number;
  text: string;
  link: string;
}

export interface INav {
  id: number;
  text: string;
  subNav: ISubNav[] | null;
  link: null | string;
}

export const Header = () => {
  const navList: INav[] = [
    {
      id: 1,
      text: "Накопители",
      link: null,
      subNav: [
        {
          id: 1,
          text: "Для загородного дома",
          link: "https://voltsbattery.ru/house",
        },
        {
          id: 2,
          text: "Для квартиры",
          link: "https://voltsbattery.ru/apartment",
        },
        { id: 3, text: "Для дачи", link: "https://voltsbattery.ru/cottage" },
        {
          id: 4,
          text: "Автономные решения",
          link: "https://voltsbattery.ru/solar-station",
        },
      ],
    },
    {
      id: 2,
      text: "Характеристики",
      subNav: null,
      link: "https://voltsbattery.ru/features",
    },
    {
      id: 3,
      text: "Каталог",
      subNav: null,
      link: "https://voltsbattery.ru/catalog",
    },
    {
      id: 4,
      text: "Наши проекты",
      subNav: null,
      link: "https://voltsbattery.ru/all-projects",
    },
    {
      id: 5,
      text: "Отзывы",
      subNav: null,
      link: "https://voltsbattery.ru/reviews",
    },
    {
      id: 6,
      text: "Реализация",
      link: null,
      subNav: [
        {
          id: 1,
          text: "Оплата и доставка",
          link: "https://voltsbattery.ru/company/oplata-i-dostavka ",
        },
        { id: 2, text: "Гарантии", link: "https://voltsbattery.ru/guarantee" },
        { id: 3, text: "Сравнение с ИБП", link: "https://voltsbattery.ru/ibp" },
        {
          id: 4,
          text: "Сравнение с генератором",
          link: "https://voltsbattery.ru/generator",
        },
        {
          id: 5,
          text: "Калькулятор",
          link: "https://voltsbattery.ru/calculator",
        },
      ],
    },
    {
      id: 7,
      text: "О компании",
      link: null,
      subNav: [
        { id: 1, text: "О нас", link: "https://voltsbattery.ru/about-us" },
        { id: 2, text: "СМИ о нас", link: "https://voltsbattery.ru/smi-o-nas" },
        { id: 3, text: "Статьи", link: "https://voltsbattery.ru/statii" },
        { id: 4, text: "Вакансии", link: "https://voltsbattery.ru/vacancies" },
        { id: 5, text: "Стать агентом", link: "https://voltsbattery.ru/agent" },
      ],
    },
  ];
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  // const { activePopap, setActivePopap } = usePopup();

  // const togglePopap = () => {
  //   setActivePopap(!activePopap);
  // };

  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeMenu]);

  return (
    <header className={cn(styles.header, 'lg:hidden')}>
      <div className={styles.headerBlur}></div>
      <div className={styles.headerSubstrate}>
        <button className={styles.headerButton}>
          <Image
            src={phoneIcon}
            className={styles.headerPhoneIcon}
            alt="phone-icon"
          />
        </button>

        <Link className={styles.headerLogoLink} href="https://voltsbattery.ru">
          <Image
            src={logoIcon}
            className={styles.headerLogoIcon}
            alt="logo-icon"
          />
        </Link>

        <button
          className={styles.headerButton}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <Image
            src={dotsIcon}
            className={styles.headerDotsIcon}
            alt="dots-icon"
          />
        </button>
      </div>

      <div
        className={cn(styles.headerMenu, activeMenu && styles.headerMenuActive)}
      >
        <div className={styles.headerMenuSubstrate}>
          {navList.map((el) => (
            <MenuItem
              key={el.id}
              text={el.text}
              subNav={el.subNav}
              id={el.id}
              link={el.link}
            />
          ))}

          <p className={styles.headerMenuPhone}>8 (800) 707-90-46</p>
          <a
            href="#popup:marquiz_68bc138ede46c100197a6379"
            className={styles.headerMenuButton}
          >
            Рассчитать
          </a>
        </div>
      </div>
    </header>
  );
};
