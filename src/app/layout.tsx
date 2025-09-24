import type { Metadata } from "next";
import { inter } from "@/fonts";
import "./globals.css";
import Metrics from "@/components/Metrics";
import { Providers } from "./providers";

export const metadata: Metadata = {
  
  title: "О компании VOLTS — эксперты в резервном электроснабжении: 7 лет опыта, 600+ установок",
  description: "VOLTS – международный производитель современных систем накопления электроэнергии для загородных домов и промышленных объектов. Более 30 представительств в России, СНГ и Европе. Узнайте о наших инновациях в области возобновляемой энергетики, стандартах качества",

  openGraph: {
    title: "О компании VOLTS – эксперты в резервном электроснабжении: 7 лет опыта, 600+ установок",
    description: "VOLTS – международный производитель современных систем накопления энергии в области возобновляемой энергетики, соответствующий высоким стандартам качества.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "О компании VOLTS – эксперты в резервном электроснабжении: 7 лет опыта, 600+ установок",
    description: "VOLTS – международный производитель современных систем накопления энергии в области возобновляемой энергетики, соответствующий высоким стандартам качества.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru"> {/* Изменено на 'ru' для русскоязычного сайта */}
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
        <Metrics />
      </body>
    </html>
  );
}