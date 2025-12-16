"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function MainAbout() {
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
    <>
      <section
        className="object-contain mt-10 md:mt-14 lg:mt-20 xl:mt-40 px-5 pt-5 pb-10 lg:pb-40"
        style={{ backgroundImage: "url('/main-about/bg.png')" }}
      >
        <motion.h2
          {...inUp(0)}
          className="text-primary tracking-[0.05em] leading-[0.9] max-w-desktop w-full mx-auto text-3xl md:text-4xl lg:text-5xl xl:text-[90px] uppercase mt-10 lg:mt-30 font-black flex flex-col mb-5 md:mb-7 lg:mb-10"
        >
          Серфинг
          <motion.span
            initial={reduce ? undefined : { opacity: 0, x: -12 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.08 }}
            className="text-secondary text-2xl md:text-3xl lg:text-4xl xl:text-6xl lowercase font-semibold ml-10"
          >
            это стиль жизни
          </motion.span>
        </motion.h2>

        <div className="max-w-desktop w-full mx-auto flex flex-col md:flex-row gap-2.5">
          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 14, scale: 0.99 },
                  whileInView: { opacity: 1, y: 0, scale: 1 },
                  viewport: { once: true, amount: 0.25 },
                  transition: { duration: 0.6, delay: 0.05 },
                })}
            className="w-full"
          >
            <Image
              src={"/main-about/about-logo.png"}
              alt="about-logo"
              width={300}
              height={300}
              className="w-full max-h-[300px] md:max-h-none"
              priority
            />
          </motion.div>

          <div className="flex flex-col-reverse md:flex-col gap-2.5 w-full md:max-w-70 xl:max-w-md">
            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.25 },
                    transition: { duration: 0.6, delay: 0.12 },
                  })}
              className="bg-primary p-5 xl:p-10 rounded-3xl"
            >
              <h4 className="font-bold text-2xl lg:text-4xl xl:text-5xl">
                SurfTrainCo —
              </h4>
              <p className="text-xs md:text:sm lg:text-lg xl:text-xl">
                это компания по обучению серфингу, расположенная в Москве,
                которая открылась в 2018 году. Ее миссия состоит в том, чтобы
                обеспечить доступное, всестороннее и приятное обучение серфингу
                для всех уровней навыков и возрастов.
              </p>
            </motion.div>

            <motion.div
              {...(reduce
                ? {}
                : {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, amount: 0.25 },
                    transition: { duration: 0.6, delay: 0.18 },
                  })}
              whileHover={reduce ? undefined : { y: -4 }}
              className="border border-primary p-5 xl:p-10 rounded-3xl text-primary flex items-center justify-between will-change-transform"
            >
              <Image
                src={"/main-about/avatars.png"}
                alt="avatars"
                width={120}
                height={100}
              />
              <p className="font-bold text-2xl lg:text-4xl xl:text-5xl flex flex-col">
                2000+
                <span className="text-xs md:text:sm lg:text-lg xl:text-xl">
                  учеников
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 18 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.25 },
              transition: { duration: 0.7, delay: 0.05 },
            })}
        className="text-xl font-medium md:text-3xl lg:text-4xl xl:text-5xl mx-auto text-primary my-10 xl:my-30 max-w-desktop px-5"
      >
        <p>
          Не бойтесь испытать себя и свои возможности - поддайтесь волнам и
          пусть они помогут вам раскрыть свой истинный потенциал. Погрузитесь в
          мир серфинга и почувствуйте, как ваша жизнь наполняется яркими
          эмоциями и волнующими приключениями. Погнали волну!
        </p>
      </motion.div>
    </>
  );
}
