import React from "react";
import { useMediaQuery } from "react-responsive";
import Whatwedo from "./Whatwedo";
import WhatwedoMobile from "./WhatwedoMobile";

const WhatwedoIntegrate = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && <Whatwedo />}
      {isTabletOrMobile && <WhatwedoMobile />}
    </div>
  );
};

export default WhatwedoIntegrate;