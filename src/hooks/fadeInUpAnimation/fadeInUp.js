// hooks.js
import { useState, useEffect } from "react";

export const useFadeInUpAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add your logic to determine when the element should be visible
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};
