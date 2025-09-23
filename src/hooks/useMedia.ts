import React from "react";

type useMediaProps = {
    media: string;
}

export const useMedia = (media = "(min-width: 768px)") =>{
      const [isMedia, setIsMedia] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(media);

    // Устанавливаем начальное значение
    setIsMedia(mediaQuery.matches);

    // Подписка на изменения
    const handler = (e: MediaQueryListEvent) => setIsMedia(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  
  return {
    isMedia
  }
}