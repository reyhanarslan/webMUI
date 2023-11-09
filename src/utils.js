import { useState, useEffect } from "react";
export const useLogoWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let logoWidth = "100%";

  if (width <= 1400) {
    logoWidth = "37%";
  } else if (width <= 1000) {
    logoWidth = "33%";
  } else if (width <= 600) {
    logoWidth = "30%";
  }
  console.log(width);
  return logoWidth;
};
