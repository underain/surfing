import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Покоряйте волны вместе с нами - Серфинг Академия",
  description:
    "SurfTrainCo предлагает доступное, комплексное и приятное обучение серфингу для всех уровней навыков и возрастов. Профессиональные инструкторы, качественное оборудование, благоприятная обстановка.",
  keywords:
    "серфинг, обучение серфингу, серф школа, инструкторы по серфингу, курсы серфинга, Москва, SurfTrainCo, волны, доска для серфинга",

  openGraph: {
    title: "Покоряйте волны вместе с нами - Серфинг Академия",
    description:
      "Профессиональное обучение серфингу с опытными инструкторами. Качественное оборудование и благоприятная обстановка для изучения серфинга в Москве.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
