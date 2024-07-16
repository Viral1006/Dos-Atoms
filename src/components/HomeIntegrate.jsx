import React from "react";
import { useMediaQuery } from "react-responsive";
import Home from "./Home";
import HomeMobile from "./HomeMobile";

const HomeIntegrate = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && <Home />}
      {isTabletOrMobile && <HomeMobile />}
    </div>
  );
};

export default HomeIntegrate;
