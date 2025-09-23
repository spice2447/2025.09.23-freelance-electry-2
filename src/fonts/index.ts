import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "./Inter-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Inter-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Inter-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Inter-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Inter-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Inter-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    { path: "./Inter-Bold.otf", weight: "700", style: "normal" },
    {
      path: "./Inter-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Inter-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Inter-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    { path: "./Inter-Black.otf", weight: "900", style: "normal" },
    {
      path: "./Inter-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
    { path: "./Inter-Light.otf", weight: "300", style: "normal" },
    {
      path: "./Inter-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Inter-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Inter-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    { path: "./Inter-Thin.otf", weight: "100", style: "normal" },
    {
      path: "./Inter-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});