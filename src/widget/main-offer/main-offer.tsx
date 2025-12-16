"use client";

import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const CARDS_INFO = [
  {
    id: 1,
    title: "Профессиональное руководство",
    description:
      "опытные инструкторы помогут вам освоить основы и быстро совершенствоваться.",
    mainPicture: "/main-offer/main-card-photo-one.png",
    subPicture: "/main-offer/sub-card-photo-one.png",
  },
  {
    id: 2,
    title: "Качественное оборудование",
    description:
      "доски и гидрокостюмы помогут вам оставаться в безопасности и получать удовольствие.",
    mainPicture: "/main-offer/main-card-photo-two.png",
    subPicture: "/main-offer/sub-card-photo-two.png",
  },
  {
    id: 3,
    title: "Благоприятная обстановка",
    description:
      "благоприятная и безопасная обстановка в обучении с людьми со схожим опытом и целями.",
    mainPicture: "/main-offer/main-card-photo-three.png",
    subPicture: "/main-offer/sub-card-photo-three.png",
  },
  {
    id: 4,
    title: "Дополнительные услуги",
    description:
      "услуги фотографий и видео помогут вам запечатлить и поделиться опытом серфинга.",
    mainPicture: "/main-offer/main-card-photo-four.png",
    subPicture: "/main-offer/sub-card-photo-four.png",
  },
];

export default function MainOffer() {
  const reduce = useReducedMotion();

  const baseIn = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.6 }, 
      };

  return (
    <section className="max-w-desktop mx-auto lg:mt-20 px-5">
      <div className="flex flex-col">
        <motion.span
          {...baseIn}
          className="text-secondary text-xs md:text-sm lg:text-base xl:text-2xl mb-5 lg:mb-8 xl:mb-13"
        >
          ул. Черкизова 14, Москва
        </motion.span>

        <motion.h1
          {...baseIn}
          transition={reduce ? undefined : { duration: 0.7 }}
          className="text-primary tracking-[0.01em] leading-[0.9] uppercase font-black text-[40px] md:text-5xl lg:text-8xl xl:text-9xl max-w-60 md:max-w-md lg:max-w-4xl xl:max-w-[1920px]"
        >
          <span className="flex 2xl:w-[1440px]">Покоряйте волны</span>
          <span className="flex items-top gap-3 lg:gap-6">
            <span className="whitespace-nowrap hidden md:flex">вместе</span>

            <motion.span
              className="hidden lg:flex"
              initial={
                reduce ? undefined : { rotate: -6, scale: 0.92, opacity: 0 }
              }
              whileInView={
                reduce ? undefined : { rotate: 0, scale: 1, opacity: 1 }
              }
              viewport={{ once: true, amount: 0.6 }}
              transition={reduce ? undefined : { duration: 0.55 }}
            >
              <Image
                src="/online-record.png"
                alt="online-record"
                width={130}
                height={130}
              />
            </motion.span>

            <span className="whitespace-nowrap">с нами!</span>
          </span>
        </motion.h1>
      </div>

      <motion.p
        {...baseIn}
        transition={reduce ? undefined : { duration: 0.6, delay: 0.05 }}
        className="text-xs mt-10 md:mt-0 md:text-sm lg:text-base text-[#385462] max-w-3xs md:max-w-2xs lg:max-w-xs xl:max-w-md"
      >
        SurfTrainCo предлагает вам доступное, комплексное и приятное обучение
        серфингу для всех уровней навыков и возрастов.
      </motion.p>

      <div className="px-5">
        <div className="bg-background justify-center rounded-4xl py-5 flex flex-col gap-2.5 md:flex-row md:gap-4 lg:gap-5 xl:gap-7.5 mt-10 xl:mt-30">
          {CARDS_INFO.map((info, index) => (
            <motion.div
              key={info.id}
              custom={index}
              initial={reduce ? undefined : { opacity: 0, y: 14, scale: 0.985 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={
                reduce
                  ? undefined
                  : { duration: 0.45, delay: 0.08 + index * 0.08 }
              }
              whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
              whileTap={reduce ? undefined : { scale: 0.995 }}
              className={cn(
                "p-4 lg:p-5.5 xl:p-7.5 gap-4 md:max-w-72 w-full flex items-center md:flex-col space-y-7.5 rounded-3xl will-change-transform",
                index % 2 === 0
                  ? "bg-primary text-white"
                  : "bg-white text-primary",
                index === 3 && "md:hidden! xl:flex!"
              )}
            >
              <div className="relative m-0">
                <Image
                  src={info.mainPicture}
                  alt={info.title}
                  width={300}
                  height={150}
                />
                <motion.div
                  className="absolute right-0 bottom-0"
                  initial={reduce ? undefined : { scale: 0.7, opacity: 0 }}
                  whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={
                    reduce
                      ? undefined
                      : { duration: 0.35, delay: 0.15 + index * 0.06 }
                  }
                >
                  <Image
                    className="size-10 xl:size-20"
                    src={info.subPicture}
                    alt={String(info.id)}
                    width={80}
                    height={80}
                  />
                </motion.div>
              </div>

              <div className="flex flex-col gap-4 lg:gap-5">
                <h3 className="font-bold text-sm md:text-base lg:text-xl xl:text-2xl">
                  {info.title}
                </h3>
                <p className="text-xs md:text-sm xl:text-base">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
