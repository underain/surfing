"use client";

import { useState } from "react";
import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  "Главная",
  "О нас",
  "Награды",
  "Тарифы",
  "Акции",
  "Запись",
  "Контакты",
];

export function MobileNavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#002B4133] bg-white"
        aria-label="Открыть меню"
      >
        <span className="flex flex-col gap-1.5">
          <span className="h-0.5 w-5 bg-primary rounded-full" />
          <span className="h-0.5 w-5 bg-primary rounded-full" />
          <span className="h-0.5 w-5 bg-primary rounded-full" />
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-72 max-w-[80%] bg-white shadow-2xl p-5",
          "flex flex-col gap-6 lg:hidden transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-primary tracking-[0.12em] uppercase">
            Меню
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-[#002B4133]"
            aria-label="Закрыть меню"
          >
            <span className="relative flex items-center justify-center size-4">
              <span className="absolute top-3/6 inset-0 h-0.5 bg-primary rotate-45 translate-y-1/2" />
              <span className="absolute top-3/6 inset-0 h-0.5 bg-primary -rotate-45 translate-y-1/2" />
            </span>
          </button>
        </div>

        <NavigationMenu.Root className="text-primary">
          <NavigationMenu.List className="flex flex-col gap-2">
            {NAV_ITEMS.map((label) => (
              <NavigationMenu.Item
                key={label}
                className="cursor-pointer rounded-3xl px-4 py-3 hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {label}
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </>
  );
}
