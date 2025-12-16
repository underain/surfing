"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Footer() {
  const reduce = useReducedMotion();

  const inUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.6, delay },
        };

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      <motion.div
        initial={reduce ? undefined : { opacity: 0, scale: 1.02 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={reduce ? undefined : { duration: 0.9 }}
        className="absolute inset-0 z-10 pointer-events-none select-none"
      >
        <Image
          src="/footer/bg.png"
          alt="Контакты"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="relative z-20 max-w-desktop mx-auto px-5 pt-10 pb-8 lg:py-16">
        <div className="flex flex-row-reverse justify-center-safe md:flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <motion.div {...inUp(0)} className="flex flex-col gap-6 max-w-xs">
            <div className="flex flex-col gap-2">
              <Image
                className="hidden md:block"
                src="/logo.png"
                alt="logo"
                width={80}
                height={50}
              />
              <p className="text-sm hidden md:flex text-primary/70">
                Свяжитесь с нами любым удобным способом
              </p>
            </div>

            <div className="items-center hidden md:flex gap-3">
              <Image
                src="/telegram.png"
                alt="telegram"
                width={30}
                height={30}
              />
              <Image
                src="/whatsapp.png"
                alt="whatsapp"
                width={30}
                height={30}
              />
              <Image src="/viber.png" alt="viber" width={30} height={30} />
            </div>
          </motion.div>
          <motion.div
            {...inUp(0.08)}
            className="flex flex-col gap-3 text-primary"
          >
            <h4 className="text-lg font-bold">Контакты</h4>
            <a href="tel:+79106849053" className="text-base hover:underline">
              +7 (910) 684-90-53
            </a>
            <a
              href="mailto:SurfCocommerce@yandex.ru"
              className="text-xs md:text-base hover:underline"
            >
              SurfCocommerce@yandex.ru
            </a>
            <p className="text-sm text-primary/70">
              г. Москва, ул. Черкасова 14
              <br />
              Работаем с 8:00 до 22:00
            </p>

            <Image
              src="/logo.png"
              className="md:hidden"
              alt="logo"
              width={80}
              height={50}
            />
          </motion.div>
          <motion.div
            {...inUp(0.16)}
            className="flex flex-col gap-3 text-primary"
          >
            <h4 className="text-lg font-bold">Для клиентов</h4>
            <nav className="flex flex-col gap-1 text-sm md:text-base">
              <a href="#about" className="hover:underline">
                О нас
              </a>
              <a href="#awards" className="hover:underline">
                Награды
              </a>
              <a href="#pricing" className="hover:underline">
                Тарифы
              </a>
              <a href="#stocks" className="hover:underline">
                Акции
              </a>
              <a href="#contacts" className="hover:underline">
                Контакты
              </a>
            </nav>
          </motion.div>
        </div>
        <motion.div
          {...inUp(0.22)}
          className="mt-2 w-full justify-between border-t border-primary/10 pt-4 flex flex-col-reverse items-center gap-3 md:flex-row"
        >
          <a
            href="#privacy"
            className="text-xs md:text-sm text-primary/70 hover:underline"
          >
            (с) SurfTrainCo, 2023
          </a>
          <a
            href="#privacy"
            className="text-xs md:text-sm text-primary/70 hover:underline md:mt-10"
          >
            Политика конфиденциальности
          </a>
          <a
            href="#privacy"
            className="text-xs md:text-sm text-primary/70 hover:underline"
          >
            Публичная оферта
          </a>
        </motion.div>
      </div>
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={reduce ? undefined : { y: -3 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        className="absolute right-5 bottom-6 z-30 flex size-16 items-center justify-center rounded-full bg-white shadow-[0_24px_80px_rgba(0,43,65,0.12)] cursor-pointer"
        aria-label="Наверх"
      >
        <svg
          width="28"
          height="39"
          viewBox="0 0 28 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6147 38.3379L13.6147 2.24192M13.6147 2.24192L1.11475 16.125M13.6147 2.24192L26.1147 16.125"
            stroke="#002B41"
            strokeWidth="3"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
