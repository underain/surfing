"use client";

import { DotButton, useDotButton } from "@/shared/ui/carousel-dots";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import "./main-awards.css";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };
const SLIDE_INFO = [
  {
    id: 1,
    title: "«Лучший инструктор по серфингу 2022»",
    description: "от международной организации Surfers Against Sewage (SAS)",
    picture: "/main-awards/slide-one.png",
    year: "2022",
  },
  {
    id: 2,
    title: "«За исключительные достижения в серфинге»",
    description: "от международной организации World Surf League (WSL)",
    picture: "/main-awards/slide-two.png",
    year: "2021",
  },
  {
    id: 3,
    title: "«За успешное продвижение серфинга»",
    description: "от Международного Олимпийского Комитета",
    picture: "/main-awards/slide-three.png",
    year: "2019",
  },
];

export default function MainAwards() {
  const reduce = useReducedMotion();

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const handleYearClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  return (
    <section
      className="object-contain mt-10 md:mt-14 lg:mt-20 xl:mt-40 px-5 pt-5 pb-10 lg:pb-40"
      style={{ backgroundImage: "url('/main-awards/bg.png')" }}
    >
      <div className="flex lg:items-center lg:justify-between max-w-desktop w-full mx-auto">
        <motion.h2
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={reduce ? undefined : { duration: 0.65 }}
          className="text-primary w-full lg:w-fit text-center tracking-[0.05em] leading-[0.9] text-3xl md:text-4xl lg:text-5xl xl:text-[90px] uppercase mt-10 lg:mt-30 font-black flex flex-col lg:flex-row gap-3 mb-5 md:mb-7 lg:mb-10"
        >
          Награды
          <span className="text-secondary text-2xl md:text-3xl lg:text-4xl xl:text-6xl lowercase font-semibold">
            нашего клуба
          </span>
        </motion.h2>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.05 }}
          className="items-center gap-4 hidden lg:flex text-primary"
        >
          {SLIDE_INFO.map((slide, index) => (
            <motion.button
              key={slide.id}
              type="button"
              onClick={() => handleYearClick(index)}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className={cn(
                "text-base transition-colors duration-200 cursor-pointer",
                selectedIndex === index
                  ? "font-semibold text-secondary"
                  : "text-primary/60 hover:text-primary"
              )}
            >
              {slide.year}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="w-full mx-auto">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {SLIDE_INFO.map((slide, i) => (
                <div
                  className="embla__slide max-w-desktop bg-background rounded-3xl p-2.5 md:p-4 lg:p-6 xl:p-7.5"
                  key={slide.id}
                >
                  <div className="bg-white h-full rounded-3xl text-primary flex flex-col items-center md:flex-row gap-7.5">
                    <div className="shrink-0">
                      <Image
                        src={slide.picture}
                        alt={slide.title}
                        width={500}
                        height={500}
                      />
                    </div>

                    <div className="p-4 flex flex-col space-y-4">
                      <span className="text-xs md:text-sm lg:text-base xl:text-xl">
                        Награда
                      </span>
                      <h4 className="font-bold tracking-[0.01em] leading-[0.9] text-lg md:text-xl lg:text-3xl xl:text-5xl">
                        {slide.title}
                      </h4>
                      <p className="text-xs md:text-sm lg:text-base xl:text-xl">
                        {slide.description}
                      </p>
                      <span className="text-xs md:text-sm lg:text-base xl:text-xl">
                        ({slide.year})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__controls hidden lg:block">
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.05 }}
            className="embla__controls block lg:hidden"
          >
            <div className="embla__dots">
              {SLIDE_INFO.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleYearClick(index)}
                  className={cn(
                    "text-base transition-colors duration-200 cursor-pointer",
                    selectedIndex === index
                      ? "font-semibold text-secondary"
                      : "text-primary/60 hover:text-primary"
                  )}
                >
                  {slide.year}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
