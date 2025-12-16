"use client";

import { MobileNavMenu } from "@/shared/ui/burger-menu";
import { Button } from "@/shared/ui/button";
import { NavMenu } from "@/shared/ui/nav-menu";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Header() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      initial={reduce ? undefined : { opacity: 0, y: -14 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={reduce ? undefined : { duration: 0.6 }}
      className="gap-3 mx-auto p-5 flex items-center justify-between max-w-desktop"
    >
      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: -14 }}
        animate={reduce ? undefined : { opacity: 1, x: 0 }}
        transition={reduce ? undefined : { duration: 0.55, delay: 0.05 }}
        className="header-logo"
      >
        <Image src="/logo.png" alt="logo" width={80} height={50} />
      </motion.div>
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: -6 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={reduce ? undefined : { duration: 0.55, delay: 0.12 }}
        className="hidden md:block"
      >
        <NavMenu />
      </motion.div>
      <motion.div
        initial={reduce ? undefined : { opacity: 0, x: 14 }}
        animate={reduce ? undefined : { opacity: 1, x: 0 }}
        transition={reduce ? undefined : { duration: 0.55, delay: 0.08 }}
        className="header-contacts flex items-center gap-2"
      >
        <motion.div
          className="flex items-center gap-2"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.4, delay: 0.18 }}
        >
          {[["/telegram.png", "telegram"], ["/whatsapp.png", "whatsapp"], ["/viber.png", "viber"]].map(
            ([src, alt]) => (
              <motion.div
                key={alt}
                whileHover={reduce ? undefined : { y: -2, scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="cursor-pointer"
              >
                <Image src={src} alt={alt} width={30} height={30} />
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: -6 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.22 }}
        >
          <Button className={"hidden md:flex"}>
            Подробнее
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.335318 12.2461L12.7097 1.0531M12.7097 1.0531L1.66252 0.499303M12.7097 1.0531L12.1559 12.1003"
                stroke="white"
              />
            </svg>
          </Button>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.18 }}
          className="md:hidden"
        >
          <MobileNavMenu />
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
