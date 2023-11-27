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

  if (width <= 400) {
    logoWidth = "15%";
  } else if (width <= 600) {
    logoWidth = "22%";
  } else if (width <= 800) {
    logoWidth = "22%";
  } else if (width <= 1000) {
    logoWidth = "17%";
  } else if (width <= 1350) {
    logoWidth = "15%";
  } else if (width <= 1500) {
    logoWidth = "13%";
  } else if (width <= 1600) {
    logoWidth = "16%";
  }

  console.log(width);
  return logoWidth;
};
