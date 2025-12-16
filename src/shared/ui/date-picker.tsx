"use client";

import * as React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";

import { Popover } from "@base-ui-components/react/popover";
import { Calendar } from "./calendar";
import { cn } from "../lib/utils";

type DatePickerProps = {
  name?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
};

export function DatePicker({
  name,
  value,
  onChange,
  placeholder = "Выберите дату",
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    value
  );

  React.useEffect(() => {
    if (value !== undefined) setInternalDate(value);
  }, [value]);

  const selected = value ?? internalDate;

  const handleSelect = (selectedDate?: Date) => {
    if (!selectedDate) return;
    setInternalDate(selectedDate);
    onChange?.(selectedDate);
    setOpen(false);
  };

  return (
    <>
      {name ? (
        <input
          type="hidden"
          name={name}
          value={selected ? format(selected, "yyyy-MM-dd") : ""}
        />
      ) : null}

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger
          render={
            <button
              type="button"
              className={cn(
                "px-7.5 py-6 md:py-7 items-center text-xl text-primary rounded-[100px] flex h-9 w-full min-w-0 border border-primary/40 bg-transparent shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
            >
              <span className="flex items-center gap-3">
                <CalendarIcon className="h-5 w-5" />
                {selected
                  ? format(selected, "dd.MM.yyyy", { locale: ru })
                  : placeholder}
              </span>
              <ChevronDownIcon className="h-5 w-5 flex-shrink-0" />
            </button>
          }
        />

        <Popover.Portal>
          <Popover.Positioner sideOffset={8}>
            <Popover.Popup
              className={cn(
                "origin-[var(--transform-origin)] rounded-2xl bg-white p-3 text-primary shadow-lg shadow-slate-200",
                "outline outline-slate-200",
                "transition-[transform,scale,opacity]",
                "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
                "data-[starting-style]:scale-95 data-[starting-style]:opacity-0"
              )}
            >
              <Calendar
                mode="single"
                selected={selected}
                onSelect={handleSelect}
                initialFocus
              />
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
