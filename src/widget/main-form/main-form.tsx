"use client";

import Image from "next/image";
import { Form } from "@base-ui-components/react/form";
import { Field } from "@base-ui-components/react/field";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { DatePicker } from "@/shared/ui/date-picker";
import { Input } from "@/shared/ui/input";
import Select from "@/shared/ui/select";
import { motion, useReducedMotion } from "motion/react";

const SERVICES = [
  { label: "Easy Start", value: "easy" },
  { label: "Flow Rider", value: "flow" },
];

export default function MainForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
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
    <section
      className="object-contain mt-10 md:mt-14 lg:mt-20 xl:mt-40 px-5 pt-5 pb-10 lg:pb-40"
      style={{ backgroundImage: "url('/main-awards/bg.png')" }}
    >
      <motion.h2
        {...inUp(0)}
        className="text-primary max-w-desktop mx-auto w-full tracking-[0.05em] leading-[0.9] text-3xl md:text-4xl lg:text-5xl xl:text-[90px] uppercase mt-10 lg:mt-30 font-black flex flex-col lg:flex-row gap-3 mb-5 md:mb-7 lg:mb-10"
      >
        Запись
        <span className="text-secondary text-2xl md:text-3xl lg:text-4xl xl:text-6xl lowercase font-semibold">
          на занятие
        </span>
      </motion.h2>

      <div className="max-w-desktop w-full mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center justify-between">
        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.25 },
                transition: { duration: 0.65, delay: 0.05 },
              })}
          className="w-full max-w-[720px]"
        >
          <Form
            className="w-full flex flex-col gap-6"
            errors={errors}
            onSubmit={async (event) => {
              event.preventDefault();
              const formEl = event.currentTarget as HTMLFormElement;
              const formData = new FormData(formEl);

              const nextErrors: Record<string, string> = {};
              if (!formData.get("time")) nextErrors.time = "Выберите время";
              if (!formData.get("tariff")) nextErrors.tariff = "Выберите тариф";
              if (!formData.get("name")) nextErrors.name = "Укажите имя";
              if (!formData.get("phone")) nextErrors.phone = "Укажите телефон";

              setErrors(nextErrors);
              if (Object.keys(nextErrors).length > 0) return;

              setLoading(true);

              const payload = {
                date: String(formData.get("date") || ""),
                time: String(formData.get("time") || ""),
                tariff: String(formData.get("tariff") || ""),
                name: String(formData.get("name") || ""),
                phone: String(formData.get("phone") || ""),
              };

              try {
                const res = await fetch("/api/telegram", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                });

                const data = await res.json();

                if (!res.ok) {
                  if (data?.errors) setErrors(data.errors);
                  return;
                }
                setErrors({});
                formEl.reset();
              } finally {
                setLoading(false);
              }
            }}
          >
            <motion.div {...inUp(0.08)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field.Root name="date" className="flex flex-col gap-1">
                <DatePicker name="date" />
                <Field.Error className="text-xs text-red-700" />
              </Field.Root>

              <Field.Root name="time" className="flex flex-col gap-1">
                <Input
                  name="time"
                  type="time"
                  className="w-full rounded-[100px] px-7.5 py-6 md:py-7 text-xl leading-[1.2] text-primary"
                />
                <Field.Error className="text-xs text-red-700" />
              </Field.Root>
            </motion.div>
            <motion.div {...inUp(0.12)}>
              <Field.Root name="tariff" className="flex flex-col gap-1">
                <Select data={SERVICES} />
                <Field.Error className="text-xs text-red-700" />
              </Field.Root>
            </motion.div>
            <motion.div {...inUp(0.16)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field.Root name="name" className="flex flex-col gap-1">
                <Input
                  name="name"
                  placeholder="Иванов Иван"
                  type="text"
                  className="w-full rounded-[100px] px-7.5 py-6 md:py-7 text-xl leading-[1.2] text-primary"
                />
                <Field.Error className="text-xs text-red-700" />
              </Field.Root>

              <Field.Root name="phone" className="flex flex-col gap-1">
                <Input
                  name="phone"
                  placeholder="8(999) 999-99-99"
                  type="tel"
                  className="w-full rounded-[100px] px-7.5 py-6 md:py-7 text-xl leading-[1.2] text-primary"
                />
                <Field.Error className="text-xs text-red-700" />
              </Field.Root>
            </motion.div>
            <motion.div
              {...inUp(0.2)}
              className="mt-4 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8"
            >
              <motion.div
                whileTap={reduce ? undefined : { scale: 0.985 }}
                className="w-full md:w-auto"
              >
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 rounded-[100px] text-lg font-bold text-white shadow-[0_24px_80px_rgba(255,21,20,0.35)] bg-gradient-to-r from-[#FF372A] to-[#FF1514]"
                >
                  {loading ? "Отправка..." : "Записаться онлайн"}
                </Button>
              </motion.div>

              <p className="text-[11px] md:text-xs leading-snug text-primary/70 max-w-xs text-center md:text-left">
                Нажимая на кнопку, вы соглашаетесь{" "}
                <span className="text-secondary">с политикой обработки данных</span>
              </p>
            </motion.div>
          </Form>
        </motion.div>
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 18, scale: 0.99 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={reduce ? undefined : { duration: 0.7, delay: 0.1 }}
          className="w-full max-w-[520px]"
        >
          <div className="relative w-full aspect-[4/3] rounded-[60px] overflow-hidden">
            <Image
              src="/main-form/img.png"
              alt="Юная серфингистка"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
