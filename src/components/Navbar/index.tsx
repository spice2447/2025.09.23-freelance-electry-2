// components/Navbar.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react'; // Добавили иконку ChevronDown

// Обновленный компонент Dropdown с кастомными стилями и иконкой
const NavDropdown = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) => (
  <div className="relative group">
    <button className={`flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white ${className}`}>
      <span>{title}</span>
      <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
    </button>
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-neutral-900/80 backdrop-blur-sm rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 invisible group-hover:visible z-20">
      {children}
    </div>
  </div>
);

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="block whitespace-nowrap w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
    {children}
  </Link>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Данные для навигации
  const navLinks = {
    drives: [
      { href: "/house", label: "Для загородного дома" },
      { href: "/apartment", label: "Для квартиры" },
      { href: "/cottage", label: "Для дачи" },
      { href: "/solar-station", label: "Автономные решения" },
    ],
    main: [
      { href: "/features", label: "Характеристики" },
      { href: "/catalog", label: "Каталог" },
      { href: "/all-projects", label: "Наши проекты" },
      { href: "/reviews", label: "Отзывы" },
    ],
    implementation: [
      { href: "/company/oplata-i-dostavka", label: "Оплата и доставка" },
      { href: "/guarantee", label: "Гарантии" },
      { href: "/ibp", label: "Сравнение с ИБП" },
      { href: "/generator", label: "Сравнение с генератором" },
      { href: "/calculator", label: "Калькулятор" },
    ],
    company: [
      { href: "/about-us", label: "О нас" },
      { href: "/smi-o-nas", label: "СМИ о нас" },
      { href: "/statii", label: "Статьи" },
      { href: "/vacancies", label: "Вакансии" },
      { href: "/agent", label: "Стать агентом" },
    ],
  };

  const logoUrl = "https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/67375a170366040ede30c370_Vector%20logo.svg";
  
  // Базовые классы для ссылок в "пилюлях"
  const pillLinkClass = "bg-white/10 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-white/20  whitespace-nowrap";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] hidden lg:block">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/90 to-black/0" />

      <nav className="relative max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
        <div className="flex items-center justify-between h-12">
          
          {/* 1. Левая группа навигации (flex-1 для выравнивания) */}
          <div className="hidden lg:flex flex-1 items-center justify-start gap-[1vw]">
            <NavDropdown title="Накопители" className="bg-white/10 rounded-full px-[1vw] py-2 hover:bg-white/20 ">
              {navLinks.drives.map(link => <DropdownLink key={link.href} href={link.href}>{link.label}</DropdownLink>)}
            </NavDropdown>
            {navLinks.main.map(link => (
               <Link key={link.href} href={link.href} className={pillLinkClass}>{link.label}</Link>
            ))}
          </div>
          
          {/* 2. Логотип по центру */}
          <div className="hidden lg:block">
            <Link href="/" className="flex-shrink-0">
              <Image src={logoUrl} alt="Volts Logo" width={100} height={24} priority />
            </Link>
          </div>

          {/* 3. Правая группа навигации (flex-1 и justify-end) */}
          <div className="max-[1400px]:hidden min-[1400px]:flex flex-1 items-center justify-end gap-4">
            <NavDropdown title="Реализация" className="pb-1 border-b border-white/80 hover:border-white">
              {navLinks.implementation.map(link => <DropdownLink  key={link.href} href={link.href}>{link.label}</DropdownLink>)}
            </NavDropdown>
             <NavDropdown title="О компании" className="pb-1 border-b border-white/80 hover:border-white">
              {navLinks.company.map(link => <DropdownLink key={link.href} href={link.href}>{link.label}</DropdownLink>)}
            </NavDropdown>
            <a href="tel:88007079046" className="text-sm font-medium text-white/80 hover:text-white transition-colors whitespace-nowrap">8 (800) 707-90-46</a>
            <Link href="#calculate" className="text-white text-sm font-bold py-2 px-3 rounded-full transition-all duration-300 bg-gradient-to-r from-[#FF6217] to-[#F59465] hover:shadow-lg hover:shadow-orange-500/30">
              Рассчитать
            </Link>
          </div>

          {/* Мобильная версия: Логотип слева, кнопка-бургер справа */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link href="/" className="flex-shrink-0">
                <Image src={logoUrl} alt="Volts Logo" width={100} height={24} priority />
            </Link>
            <button onClick={toggleMobileMenu} className="text-white p-2" aria-label="Open menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Панель мобильного меню (без изменений) */}
      <div className={`fixed top-0 left-0 w-full h-dvh bg-gray-900/95 backdrop-blur-sm z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        {/* ...содержимое мобильного меню осталось прежним для простоты и удобства на мобильных... */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
           <Link href="/" onClick={toggleMobileMenu}>
              <Image src={logoUrl} alt="Volts Logo" width={100} height={24} />
            </Link>
          <button onClick={toggleMobileMenu} className="text-white p-2" aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-5 text-lg">
          {[...navLinks.drives, ...navLinks.main, ...navLinks.implementation, ...navLinks.company].map(link => (
            <Link key={link.href} href={link.href} className="text-white py-2" onClick={toggleMobileMenu}>{link.label}</Link>
          ))}
          <hr className="border-gray-700 my-4" />
          <div className="flex flex-col gap-4 text-center">
            <a href="tel:88007079046" className="text-white">8 (800) 707-90-46</a>
            <Link href="#calculate" className="bg-gradient-to-r from-[#FF6217] to-[#F59465] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-colors" onClick={toggleMobileMenu}>
              Рассчитать
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}