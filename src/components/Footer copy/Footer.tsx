"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="footer product_footer bg-black pt-[55px] pb-[200px] relative flex flex-col items-center bg-[url(https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/67af12f19549fc8a7e029a14_main%20page%20black.jpg)] bg-center bg-cover">
        <div className="footer_container flex flex-col items-center w-full max-w-[1440px] px-[66px]">
          <div className="faq_questions flex flex-col items-center mb-[210px]">
            <div className="flex flex-col items-center mb-[24px] gap-1.5">
              <p className="text-[#F8F9F8] font-semibold text-[22px] lg:text-[32px] leading-[1.24]">
                Остались вопросы?
              </p>
              <p className="text-[#F8F9F8] opacity-50 leading-[1.24] text-[14px] text-center">
                Оставьте ваши контактные данные и мы на них ответим
              </p>
            </div>
            <div className="form-block w-form flex flex-col items-center w-full max-w-[470px]">
              <form
                id="wf-form-Footer-form"
                name="wf-form-Footer-form"
                data-name="Footer form"
                method="get"
                className="form flex flex-col items-center w-full"
                aria-label="Footer form"
              >
                <div className="flex flex-col gap-1.5 w-full">
                  <input
                    className="text-black border bg-[#F8F9F8] border-[#ebebeb] rounded-[40px] w-full h-[52px] mb-0 py-[15px] px-[16px] font-Inter text-[12px] shadow-[0_0_10px_#0000000d]"
                    maxLength={256}
                    name="name-2"
                    data-name="Name 2"
                    placeholder="Имя"
                    type="text"
                    id="name-2"
                    required
                  />
                  <input
                    className="text-black border bg-[#F8F9F8] border-[#ebebeb] rounded-[40px] w-full h-[52px] mb-0 py-[15px] px-[16px] font-Inter text-[12px] shadow-[0_0_10px_#0000000d]"
                    name="phone"
                    data-name="phone"
                    placeholder="+7"
                    type="tel"
                    id="phone"
                    required
                    inputMode="text"
                  />
                  <input
                    type="submit"
                    data-wait="Отправка..."
                    className="w-full text-white bg-gradient-to-r from-[#2859e6] to-[#5279e8] rounded-[40px] h-[52px] py-0 px-[38px] font-Inter text-[16px] font-[400] hover:bg-gradient-to-r hover:from-[#ff6116] hover:to-[#f49364] transition-colors duration-200"
                    value="Оставить заявку"
                  />
                </div>
                <label className="flex items-start mt-3 text-[#F8F9F8] opacity-40">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    data-name="Checkbox"
                    className="mr-2 mt-1 w-[18px] h-[18px] bg-transparent"
                  />
                  <span className="checkbox-label w-form-label max-w-[400px] font-Inter font-[300] leading-[16px]">
                    Я даю согласие на обработку моих персональных данных
                    <a href="company/politika-konfidencialnosti.html">
                      согласно политике обработки персональных данных
                    </a>
                  </span>
                </label>
              </form>
              <div
                className="success-message w-form-done bg-[#ddd0] mt-[10px] py-[20px] px-0 text-center hidden"
                tabIndex="-1"
                role="region"
                aria-label="Footer form success"
              >
                <div className="popup-text-copy text-black text-center w-auto font-Inter text-[16px] font-[300]">
                  Спасибо! Ваша заявка получена!
                </div>
              </div>
              <div
                className="error-message w-form-fail bg-[#ffb6b6] rounded-[50px] mt-[10px] py-[10px] px-[20px] hidden"
                tabIndex="-1"
                role="region"
                aria-label="Footer form failure"
              >
                <div className="popup-text-error text-black text-center w-auto font-Inter text-[16px] font-[300]">
                  Упс! Что-то пошло не так.
                </div>
              </div>
            </div>
          </div>
          <h2 className="footer_header text-center text-transparent bg-gradient-to-b from-[#f5f9fc] to-[#cacaca] bg-clip-text font-Inter text-[36px] lg:text-[52px] font-semibold leading-[100%] mb-[62px]">
            Сердце вашего <br />
            дома
          </h2>
          <div className="footer_info grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full max-w-[1060px]">
            <div className="footer_column flex flex-col gap-[24px]">
              <div className="footer_wrapper flex flex-col items-start gap-[6px]">
                <p className="footer_text_heading text-[#f8f9f880] uppercase mb-0 font-Inter text-[12px] font-[300] leading-[124%]">
                  Офис в вашем городе
                </p>
                <p className="footer_text2 text-[#f8f9f8] mb-0 font-Inter font-[500] leading-[124%]">
                  Более 20 представительств по всей России
                </p>
                <Link
                  href="company/cervis-i-obsluzhivanie.html"
                  className="footer_btn text-white cursor-pointer bg-[#3858b1] rounded-[30px] mt-[6px] py-[8px] px-[10px] font-Inter text-[12px] font-[500] leading-[15px] no-underline inline-block"
                >
                  Найти офис
                </Link>
              </div>
              <div className="footer_wrapper flex flex-col items-start gap-[6px]">
                <p className="footer_text_heading text-[#f8f9f880] uppercase mb-0 font-Inter text-[12px] font-[300] leading-[124%]">
                  СЕРВИСНЫЕ ЦЕНТРЫ
                </p>
                <Link
                  href="company/cervis-i-obsluzhivanie.html"
                  className="footer_btn text-white cursor-pointer bg-[#3858b1] rounded-[30px] mt-[6px] py-[8px] px-[10px] font-Inter text-[12px] font-[500] leading-[15px] no-underline inline-block"
                >
                  Найти сервис
                </Link>
              </div>
            </div>

            {/* Column 2: Address & Socials */}
            <div className="footer_column_adress flex flex-col items-start">
              <address className="flex flex-col items-start relative not-italic">
                <p className="text-[#f8f9f880] uppercase mb-0 font-Inter text-[12px] font-[400] leading-[124%] gap-1.5">
                  Центральные офисы:
                </p>
                <p className="footer_text3 text-[#f8f9f8] text-left mb-0 font-Inter font-[400] leading-[124%]">
                  <strong>Москва</strong>
                  <br />
                  тер инновационного центра Сколково, б-р Большой, 42 строение 1
                </p>
                <p className="footer_text3 text-[#f8f9f8] text-left mb-0 font-Inter font-[400] leading-[124%]">
                  <strong>Санкт-Петербург</strong>
                  <br />
                  Державинский переулок, 5
                </p>
              </address>
              <div className="footer_wrapper_sm flex flex-col items-start w-full mb-[60px] pt-[28px] pb-[28px] border-t border-white border-b border-white gap-[6px]">
                <p className="footer_text1 text-[#f8f9f880] uppercase mb-0 font-Inter text-[12px] font-[300] leading-[124%]">
                  НАШИ СОЦИАЛЬНЫЕ СЕТИ
                </p>
                <div className="footer_links flex items-center gap-[12px] mt-[6px]">
                  <a
                    rel="nofollow"
                    href="https://vk.com/voltsru"
                    target="_blank"
                    className="footer_link w-inline-block"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/6745ba42922d8c2e8d16e44c_vk-svgrepo-com.svg"
                      width={24}
                      height={24}
                      alt="Логотип ВК"
                      className="footer_icon cursor-pointer"
                    />
                  </a>
                  <a
                    rel="nofollow"
                    href="https://t.me/volts_nakopitel"
                    target="_blank"
                    className="footer_link w-inline-block"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/6745ba423a830968c54d8b06_telegram-plane-svgrepo-com%201.svg"
                      width={24}
                      height={24}
                      alt="Логотип Telegram"
                      className="footer_icon cursor-pointer"
                    />
                  </a>
                  <a
                    rel="nofollow"
                    href="https://wa.me/79523524680"
                    target="_blank"
                    className="footer_link w-inline-block"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/6745ba42fd48bd81c2f7f0fc_whatsapp-whats-app-svgrepo-com.svg"
                      width={24}
                      height={24}
                      alt="Логотип WhatsApp"
                      className="footer_icon cursor-pointer"
                    />
                  </a>
                  <a
                    rel="nofollow"
                    href="https://www.youtube.com/@VoltsRu"
                    target="_blank"
                    className="footer_link w-inline-block"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/6745ba4298a69bfb61f4ee73_youtube-168-svgrepo-com.svg"
                      width={24}
                      height={24}
                      alt="Логотип YouTube"
                      className="footer_icon cursor-pointer"
                    />
                  </a>
                  <a
                    rel="nofollow"
                    href="https://dzen.ru/volts"
                    target="_blank"
                    className="footer_link w-inline-block"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/6745ba42dc0a05bc6bcd8958_Yandex_Zen_logo_icon.svg"
                      width={24}
                      height={24}
                      alt="Логотип Дзен"
                      className="footer_icon cursor-pointer"
                    />
                  </a>
                  <a
                    rel="nofollow"
                    href="https://vc.ru/volts"
                    target="_blank"
                    className="footer_link w-inline-block"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/6745ba42922d8c2e8d16e450_Page-1.svg"
                      width={24}
                      height={24}
                      alt="Логотип vc.ru"
                      className="footer_icon cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Contacts */}
            <div className="footer_column_contacts flex flex-col gap-[24px] w-full">
              <div className="footer_wrapper_contacts flex flex-col items-start gap-[6px]">
                <p className="footer_text1 text-[#f8f9f880] uppercase mb-0 font-Inter text-[12px] font-[300] leading-[124%]">
                  бесплатный звонок по России
                </p>
                <a
                  href="tel:88007079046"
                  className="footer_text4 text-[#f8f9f8] cursor-pointer mb-0 font-Inter text-[32px] font-[500] leading-[105%] no-underline"
                >
                  8 (800) 707-90-46
                </a>
              </div>
              <div className="footer_wrapper_contacts flex flex-col items-start gap-[6px]">
                <p className="footer_text1 text-[#f8f9f880] uppercase mb-0 font-Inter text-[12px] font-[300] leading-[124%]">
                  ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
                </p>
                <a
                  href="tel:88007079086"
                  className="footer_text4 text-[#f8f9f8] cursor-pointer mb-0 font-Inter text-[32px] font-[500] leading-[105%] no-underline"
                >
                  8 (800) 707-90-86
                </a>
              </div>
              <div className="footer_wrapper_contacts flex flex-col items-start gap-[6px]">
                <p className="footer_text1 text-[#f8f9f880] uppercase mb-0 font-Inter text-[12px] font-[300] leading-[124%]">
                  ТЕХНИЧЕСКАЯ ПОДДЕРЖКА
                </p>
                <a
                  href="mailto:office@voltsbattery.com"
                  className="footer_text5 text-[#f8f9f8] cursor-pointer mb-0 font-Inter text-[26px] font-[500] leading-[124%] no-underline"
                >
                  office@voltsbattery.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Menu */}
      <footer className="footer-menu bg-[#131417] pt-[55px] pb-[46px] relative flex flex-col items-center">
        <div className="absolute top-0 w-full h-[0.6px] opacity-50 bg-gradient-to-r from-transparent via-[#999] to-transparent"></div>
        <div className="flex flex-col items-center w-full max-w-[1440px] px-[66px] gap-[32px]">
          <div className="footer-menu_up flex justify-between items-start w-full relative">
            <div className="footer_navigation flex gap-[3px]">
              <Link href="features.html" className="header_link w-inline-block">
                <p className="header_link_text text-white text-[14px] leading-[17px] no-underline">
                  Характеристики
                </p>
              </Link>
              <Link href="catalog.html" className="header_link w-inline-block">
                <p className="header_link_text text-white text-[14px] leading-[17px] no-underline">
                  Каталог
                </p>
              </Link>
              <Link
                href="all-projects.html"
                className="header_link w-inline-block"
              >
                <p className="header_link_text text-white text-[14px] leading-[17px] no-underline">
                  Наши проекты
                </p>
              </Link>
              <Link
                href="reviews/otzyv-o-energonakopitele-volts-ot-antona.html"
                className="header_link w-inline-block"
              >
                <p className="header_link_text text-white text-[14px] leading-[17px] no-underline">
                  Отзывы
                </p>
              </Link>
            </div>
            <div className="footer_menu grid grid-cols-2 gap-x-[16px] gap-y-[6px]">
              <Link
                href="about-us.html"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                О компании
              </Link>
              <Link
                href="company/sertifikaty.html"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                Сертификаты
              </Link>
              <Link
                href="statii.html"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                Статьи
              </Link>
              <a
                href="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/67a849702a06105228294c65_%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F.pdf"
                target="_blank"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                Инструкция
              </a>
              <Link
                href="guarantee.html#service"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                Сервисные центры
              </Link>
              <Link
                href="vacancies.html"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                Вакансии
              </Link>
              <Link
                href="company/oplata-i-dostavka.html"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                Оплата и доставка
              </Link>
              <Link
                href="agent.html"
                className="footer_text6 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer"
              >
                Стать агентом
              </Link>
            </div>
          </div>
          <Link href="index.html" className="w-inline-block">
            <Image
              src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/6745bea98639ce104d18dabb_Vector%20white%20  (1)%2012.svg"
              width={120}
              height={40}
              alt="Логотип VOLTS"
              className="footer_logo max-w-full"
            />
          </Link>
          <div className="footer_policy flex justify-between items-center w-full">
            <a
              href="company/politika-konfidencialnosti.html"
              target="_blank"
              className="footer_text8 text-[#fff9] text-[11px] leading-[105%] no-underline cursor-pointer w-[15%]"
            >
              Мы используем cookie
            </a>
            <p className="footer_text9 text-[#f8f9f880] text-[11px] font-[300] leading-[124%] text-center max-w-[250px]">
              © 2025 VOLTS официальный сайт накопителей электроэнергии. Все
              права защищены.
            </p>
            <a
              href="company/politika-konfidencialnosti.html"
              target="_blank"
              className="footer_text7 text-[#fff9] text-right text-[11px] leading-[105%] no-underline cursor-pointer w-[15%]"
            >
              Политика конфиденциальности
            </a>
          </div>
          <Link
            href="house.html#main"
            className="footer_menu_link_up w-inline-block absolute top-[60px] left-1/2 transform -translate-x-1/2"
          >
            <Image
              src="https://cdn.prod.website-files.com/6737524e57a558bf6c0d64ef/67503da885656d5a7b45f0ad_Group%202087325912.svg"
              width={40}
              height={40}
              alt=""
              className="footer-menu_link_img max-w-full"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
