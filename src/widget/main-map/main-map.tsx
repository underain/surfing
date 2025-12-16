"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function MainMap() {
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
    <section className="relative w-full xl:mt-20 xl:mb-40">
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 1.02 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={reduce ? undefined : { duration: 0.9 }}
          className="absolute inset-0"
        >
          <Image
            src="/main-map/map.png"
            alt="map"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.05 }}
          className="absolute inset-0 bg-white/30"
        />
      </div>

      <div className="max-w-desktop mx-auto px-5 py-10 md:py-14 lg:py-16 min-h-[720px] md:min-h-[820px]">
        <motion.div
          {...inUp(0)}
          className="bg-white rounded-4xl w-fit p-5 md:p-7 lg:p-10 xl:p-14"
        >
          <h2 className="text-primary tracking-[0.05em] leading-[0.95] uppercase font-black flex flex-col gap-2 md:gap-3 text-3xl md:text-4xl lg:text-5xl xl:text-[90px]">
            Мы на карте
            <span className="text-secondary lowercase font-semibold text-right text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
              где искать?
            </span>
          </h2>
        </motion.div>
        <div className="mt-8 md:mt-10 lg:mt-12">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={reduce ? undefined : { duration: 0.7, delay: 0.08 }}
            className="bg-white lg:relative lg:-bottom-80 text-primary rounded-4xl p-5 md:p-7 lg:p-10 w-full shadow-sm"
          >
            <div className="grid gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_auto_1.4fr_1fr] lg:items-center">
              <motion.div {...inUp(0.12)} className="flex flex-col gap-2">
                <span className="text-sm md:text-base text-center">
                  Социальные сети:
                </span>
                <div className="flex justify-center gap-3">
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
                {...inUp(0.16)}
                className="flex flex-col justify-center items-center gap-2"
              >
                <span className="text-sm md:text-base font-semibold">
                  +7 (910) 684-90-53
                </span>
                <div className="flex gap-3">
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
                initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={
                  reduce ? undefined : { duration: 0.55, delay: 0.18 }
                }
                className="flex justify-center items-center sm:justify-end lg:justify-center"
              >
                <Image
                  src="/online-record.png"
                  alt="online-record"
                  width={120}
                  height={120}
                  className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px]"
                />
              </motion.div>

              <motion.div
                {...inUp(0.2)}
                className="flex flex-col justify-center items-center gap-1"
              >
                <p className="text-sm md:text-base">ул. Черкизова 14, Москва</p>
                <span className="text-xs md:text-sm text-primary/70">
                  (ориентир: … если нужно)
                </span>
              </motion.div>

              <motion.div
                {...inUp(0.24)}
                className="flex flex-col justify-center items-center gap-1"
              >
                <p className="font-bold text-sm md:text-base">Как добраться?</p>
                <span className="text-xs md:text-sm text-primary/80">
                  Маршруты: 139, 28б
                </span>
              </motion.div>
            </div>
          </motion.div>

          <div className="hidden lg:block h-0 -mt-6" />
        </div>
      </div>
    </section>
  );
}
