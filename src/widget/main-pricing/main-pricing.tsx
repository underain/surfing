"use client";

import CalendarIcon from "@/shared/icons/calendar";
import ClockIcon from "@/shared/icons/clock";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const CARDS_INFO = [
  {
    id: 1,
    title: "Easy Start",
    included: [
      { id: "a", title: "Воссозданный искусственный речной порог" },
      { id: "b", title: "Доска с плавниками, как на океане" },
      {
        id: "c",
        title:
          "Даёт возможность отработать технику поворотов, трюки на волне, развить баланс и мышечную память",
      },
      {
        id: "d",
        title:
          "Помогает подготовиться к катанию на океанских волнах (работа тела после поп-ап)",
      },
    ],
    picture: "/main-pricing/icon-one.png",
    oldPrice: "29 000",
    price: "12 990",
  },
  {
    id: 2,
    title: "Flow Rider",
    included: [
      {
        id: "e",
        title: "Напор воды, направленный вверх  по натянутой тканевой поверхности",
      },
      {
        id: "f",
        title:
          "Доска без плавников, нечто среднее между скейтбордом и сноубордом",
      },
      {
        id: "j",
        title:
          "Даёт возможность развить баланс и получить яркие эмоции от катания на волне",
      },
      {
        id: "h",
        title:
          "Возможность поймать удовольствие от движения и маневрирования на доске по водному потоку",
      },
    ],
    picture: "/main-pricing/icon-two.png",
    oldPrice: "22 000",
    price: "10 990",
  },
];

export default function MainPricing() {
  const reduce = useReducedMotion();

  const inUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.65, delay },
        };

  return (
    <section className="max-w-desktop w-full mx-auto mt-10 px-5">
      <motion.h2
        {...inUp(0)}
        className="text-primary tracking-[0.05em] leading-[0.9] max-w-desktop w-full mx-auto text-3xl md:text-4xl lg:text-5xl xl:text-[90px] uppercase mt-10 lg:mt-30 font-black flex gap-3 mb-20 flex-col lg:flex-row text-center lg:text-start"
      >
        Программы
        <span className="text-secondary text-2xl md:text-3xl lg:text-4xl xl:text-6xl lowercase font-semibold">
          обучения
        </span>
      </motion.h2>

      <div className="flex flex-col items-center justify-center lg:flex-row gap-16 lg:gap-7.5">
        {CARDS_INFO.map((card, idx) => (
          <motion.article
            key={card.id}
            initial={
              reduce ? undefined : { opacity: 0, y: 18, scale: 0.985 }
            }
            whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={
              reduce ? undefined : { duration: 0.6, delay: 0.08 + idx * 0.12 }
            }
            whileHover={reduce ? undefined : { y: -8 }}
            className="relative w-full max-w-md lg:max-w-2xl rounded-4xl bg-white pt-8 md:pt-16 xl:pt-20 px-5 lg:px-10 pb-8 shadow-[0_24px_80px_rgba(0,43,65,0.12)] will-change-transform"
          >
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.85, y: 8 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.15 + idx * 0.1 }}
              className="absolute left-1/2 top-0 size-25 md:size-32 lg:size-34 xl:size-40 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src={card.picture}
                alt={card.title}
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="flex flex-col items-center justify-between space-y-8">
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <motion.span
                  {...inUp(0.12 + idx * 0.06)}
                  className="text-xs md:text-base xl:text-xl leading-[1.2] text-[#385462]"
                >
                  -тариф-
                </motion.span>

                <motion.h3
                  {...inUp(0.16 + idx * 0.06)}
                  className="text-2xl xl:text-5xl font-bold leading-[1.2] text-primary"
                >
                  {card.title}
                </motion.h3>

                <motion.div
                  {...inUp(0.2 + idx * 0.06)}
                  className="flex w-full justify-between gap-4 text-primary"
                >
                  <div className="flex items-center gap-3">
                    <CalendarIcon />
                    <div className="flex flex-col gap-1 text-xs md:text-sm">
                      <span className="text-start">длительность курса</span>
                      <span className="font-bold text-start">5 уроков</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon />
                    <div className="flex flex-col gap-1 text-xs md:text-sm">
                      <span className="text-start">длительность урока</span>
                      <span className="font-bold text-start">45 минут</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col space-y-4 mt-5 w-full">
                {card.included.map((item, j) => (
                  <motion.div
                    key={item.id}
                    initial={reduce ? undefined : { opacity: 0, x: -10 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={
                      reduce
                        ? undefined
                        : { duration: 0.4, delay: 0.18 + idx * 0.1 + j * 0.06 }
                    }
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex size-8 items-center justify-center">
                      <svg
                        width="35"
                        height="33"
                        viewBox="0 0 35 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="3.04346"
                          width="29"
                          height="29"
                          rx="4.5"
                          stroke="#002B41"
                          strokeOpacity="0.2"
                        />
                        <path
                          d="M2 13.9477L14.127 26.7037C15.0186 27.6414 16.5524 27.4986 17.2555 26.4124L34 0.543457"
                          stroke="url(#paint0_linear_1_415)"
                          strokeWidth="2"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_415"
                            x1="4.17938"
                            y1="14.5622"
                            x2="33.9999"
                            y2="14.5622"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF372A" />
                            <stop offset="1" stopColor="#FF1514" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <p className="text-xs xl:text-base leading-[1.2] text-[#385462]">
                      {item.title}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                {...inUp(0.25 + idx * 0.08)}
                className="flex flex-col items-center"
              >
                <p className="text-base lg:text-xl xl:text-3xl leading-[36px] text-[#385462] line-through">
                  {card.oldPrice} руб.
                </p>
                <p className="text-2xl lg:text-3xl xl:text-5xl font-bold leading-[60px] text-primary">
                  {card.price} руб.
                </p>
              </motion.div>

              <motion.div {...inUp(0.3 + idx * 0.08)} className="w-full">
                <Button
                  variant={"secondary"}
                  className="w-full py-4 text-base xl:text-xl"
                >
                  Выбрать тариф
                </Button>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
