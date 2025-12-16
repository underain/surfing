"use client";

import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function MainStocks() {
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

  const CARDS = [
    { src: "/main-stocks/content-one.png", alt: "Акция 1" },
    { src: "/main-stocks/content-two.png", alt: "Акция 2" },
    { src: "/main-stocks/content-three.png", alt: "Акция 3" },
  ];

  return (
    <>
      <section
        className="bg-cover mt-10 md:mt-14 overflow-hidden lg:mt-20 xl:mt-40 px-5 pt-5 pb-10 lg:pb-40"
        style={{ backgroundImage: "url('/main-stocks/bg.png')" }}
      >
        <div className="flex items-center justify-between max-w-desktop w-full mx-auto">
          <motion.h2
            {...inUp(0)}
            className="text-primary text-center w-full lg:w-fit tracking-[0.05em] leading-[0.9] text-3xl md:text-4xl lg:text-5xl xl:text-[90px] uppercase mt-10 lg:mt-30 font-black flex flex-col lg:flex-row gap-3 mb-5 md:mb-7 lg:mb-10"
          >
            Акции
            <span className="text-secondary text-2xl md:text-3xl lg:text-4xl xl:text-6xl lowercase font-semibold">
              и скидки
            </span>
          </motion.h2>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.25 },
                  transition: { duration: 0.55, delay: 0.05 },
                })}
            className="items-center gap-4 hidden lg:flex text-primary"
          >
            <motion.button
              whileTap={reduce ? undefined : { scale: 0.96 }}
              whileHover={reduce ? undefined : { y: -2 }}
              className="rounded-full flex items-center justify-center size-12 bg-background cursor-pointer"
              type="button"
              aria-label="prev"
            >
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.0229 9.40299L1.41425 9.40299M1.41425 9.40299L10.1099 18.0986M1.41425 9.40299L10.1099 0.707354"
                  stroke="#002B41"
                  strokeWidth="2"
                />
              </svg>
            </motion.button>

            <motion.button
              whileTap={reduce ? undefined : { scale: 0.96 }}
              whileHover={reduce ? undefined : { y: -2 }}
              className="rounded-full flex items-center justify-center size-12 bg-background cursor-pointer"
              type="button"
              aria-label="next"
            >
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9.40267H22.6087M22.6087 9.40267L13.913 0.707031M22.6087 9.40267L13.913 18.0983"
                  stroke="#002B41"
                  strokeWidth="2"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-desktop w-full mx-auto relative">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: -40 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduce ? undefined : { duration: 0.7, delay: 0.05 }}
            className="absolute -left-50 -top-30 hidden lg:block"
          >
            <Image
              src="/main-stocks/surf-desk.png"
              alt="desk"
              width={170}
              height={500}
            />
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, x: 40 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reduce ? undefined : { duration: 0.7, delay: 0.05 }}
            className="absolute -right-50 -top-30 rotate-y-180 hidden lg:block"
          >
            <Image
              src="/main-stocks/surf-desk.png"
              alt="desk"
              width={170}
              height={500}
            />
          </motion.div>
          {CARDS.map((c, idx) => (
            <motion.div
              key={c.src}
              initial={reduce ? undefined : { opacity: 0, y: 16, scale: 0.985 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={
                reduce ? undefined : { duration: 0.55, delay: 0.08 + idx * 0.1 }
              }
              whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
              className="p-5 bg-background max-w-sm rounded-3xl mx-auto w-full flex items-center justify-center will-change-transform"
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={428}
                height={428}
                className="h-auto w-auto max-w-full"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.25 },
                transition: { duration: 0.55, delay: 0.1 },
              })}
        >
          <Button
            variant={"secondary"}
            className="mx-auto flex py-3 text-base md:text-lg lg:text-xl xl:text-2xl my-5 w-full max-w-sm lg:hidden"
          >
            Показать больше
          </Button>
        </motion.div>
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
          Помните, что каждый ваш выход на доску - это возможность выйти за
          пределы своих комфортных зон и стать лучше, сильнее и увереннее.
          Поверьте в себя, стремитесь к новым вершинам и не забывайте
          наслаждаться каждым мгновением на доске.
        </p>
      </motion.div>
    </>
  );
}
