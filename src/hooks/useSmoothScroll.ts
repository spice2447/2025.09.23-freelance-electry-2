"use client";
import { useEffect } from "react";

export const useSmoothScroll = ()=> {
  useEffect(() => {
    let scrollTarget = window.scrollY;
    let currentScroll = window.scrollY;
    let isTicking = false;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      scrollTarget += e.deltaY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));

      if (!isTicking) {
        requestAnimationFrame(smoothScroll);
        isTicking = true;
      }
    };

    const smoothScroll = () => {
      currentScroll += (scrollTarget - currentScroll) * 0.2; // коэффициент плавности
      window.scrollTo(0, currentScroll);

      if (Math.abs(scrollTarget - currentScroll) > 0.5) {
        requestAnimationFrame(smoothScroll);
      } else {
        isTicking = false;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);
}
