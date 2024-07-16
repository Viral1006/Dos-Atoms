import React from "react";
import { useMediaQuery } from "react-responsive";
import Ourteam from "./Ourteam";
import OurteamMobile from "./OurteamMobile";

const OurteamIntegrate = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && <Ourteam />}
      {isTabletOrMobile && <OurteamMobile />}
    </div>
  );
};

export default OurteamIntegrate;