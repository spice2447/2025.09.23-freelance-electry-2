import { createContext, useContext, } from "react";

// Тип контекста
type PopupContextType = {
  activePopap: boolean;
  setActivePopap: (value: boolean) => void;
};

// Создаём контекст
export const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
