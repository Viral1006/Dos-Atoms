import React from "react";
import { useMediaQuery } from "react-responsive";
import About from "./About";
import AboutMobile from "./AboutMobile";

const AboutIntegrate = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && <About />}
      {isTabletOrMobile && <AboutMobile />}
    </div>
  );
};

export default AboutIntegrate;
