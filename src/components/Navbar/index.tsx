"use client";

import { useState, useEffect, useRef } from 'react'; // Изменено
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

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
  
  const calculateButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateButtonRef.current?.click();
    }, 120*1000); 

    return () => clearTimeout(timer);
  }, []); 

  const navLinks = {
    drives: [
      { href: "https://voltsbattery.ru", label: "Для загородного дома" },
      { href: "https://voltsbattery.ru", label: "Для квартиры" },
      { href: "https://voltsbattery.ru", label: "Для дачи" },
      { href: "https://voltsbattery.ru", label: "Автономные решения" },
    ],
    main: [
      { href: "https://voltsbattery.ru", label: "Характеристики" },
      { href: "https://voltsbattery.ru", label: "Каталог" },
      { href: "https://voltsbattery.ru", label: "Наши проекты" },
      { href: "https://voltsbattery.ru", label: "Отзывы" },
    ],
    implementation: [
      { href: "https://voltsbattery.ru", label: "Оплата и доставка" },
      { href: "https://voltsbattery.ru", label: "Гарантии" },
      { href: "https://voltsbattery.ru", label: "Сравнение с ИБП" },
      { href: "https://voltsbattery.ru", label: "Сравнение с генератором" },
      { href: "https://voltsbattery.ru", label: "Калькулятор" },
    ],
    company: [
      { href: "https://voltsbattery.ru", label: "О нас" },
      { href: "https://voltsbattery.ru", label: "СМИ о нас" },
      { href: "https://voltsbattery.ru", label: "Статьи" },
      { href: "https://voltsbattery.ru", label: "Вакансии" },
      { href: "https://voltsbattery.ru", label: "Стать агентом" },
    ],
  };

  const logoUrl = "https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/67375a170366040ede30c370_Vector%20logo.svg";
  
  const pillLinkClass = "bg-white/10 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-white/20  whitespace-nowrap";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] hidden lg:block">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/90 to-black/0" />

      <nav className="relative max-w-[1920px] mx-auto px-6 sm:px-10 lg:px-16 py-4">
        <div className="flex items-center justify-between h-12">
          
          <div className="hidden lg:flex flex-1 items-center justify-start gap-[1vw]">
            <NavDropdown title="Накопители" className="bg-white/10 rounded-full px-[1vw] py-2 hover:bg-white/20 ">
              {navLinks.drives.map(link => <DropdownLink key={link.href} href={link.href}>{link.label}</DropdownLink>)}
            </NavDropdown>
            {navLinks.main.map(link => (
               <Link key={link.href} href={link.href} className={pillLinkClass}>{link.label}</Link>
            ))}
          </div>
          
          <div className="hidden lg:block">
            <Link href="/" className="flex-shrink-0">
              <Image src={logoUrl} alt="Volts Logo" width={100} height={24} priority />
            </Link>
          </div>

          <div className="max-[1400px]:hidden min-[1400px]:flex flex-1 items-center justify-end gap-4">
            <NavDropdown title="Реализация" className="pb-1 border-b border-white/80 hover:border-white">
              {navLinks.implementation.map(link => <DropdownLink  key={link.href} href={link.href}>{link.label}</DropdownLink>)}
            </NavDropdown>
             <NavDropdown title="О компании" className="pb-1 border-b border-white/80 hover:border-white">
              {navLinks.company.map(link => <DropdownLink key={link.href} href={link.href}>{link.label}</DropdownLink>)}
            </NavDropdown>
            <a href="tel:88007079046" className="text-sm font-medium text-white/80 hover:text-white transition-colors whitespace-nowrap">8 (800) 707-90-46</a>
            <a
              ref={calculateButtonRef}
              href="#popup:marquiz_68bc138ede46c100197a6379"
              className="text-white text-sm font-bold py-2 px-3 rounded-full transition-all duration-300 bg-gradient-to-r from-[#FF6217] to-[#F59465] hover:shadow-lg hover:shadow-orange-500/30"
            >
              Рассчитать
            </a>
          </div>

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

      <div className={`fixed top-0 left-0 w-full h-dvh bg-gray-900/95 backdrop-blur-sm z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
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
            <a href="#popup:marquiz_68bc138ede46c100197a6379" className="bg-gradient-to-r from-[#FF6217] to-[#F59465] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-colors" onClick={toggleMobileMenu}>
              Рассчитать
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}