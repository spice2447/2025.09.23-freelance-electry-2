"use client"; 

import React, { useState } from "react";
import { PopupContext } from "@/context/PopapContext"; 

export function Providers({ children }: { children: React.ReactNode }) {
  const [activePopap, setActivePopap] = useState(false);

  return (
    // Передаем состояние и функцию для его изменения в провайдер
    <PopupContext.Provider value={{ activePopap, setActivePopap }}>
      {children}
    </PopupContext.Provider>
  );
}