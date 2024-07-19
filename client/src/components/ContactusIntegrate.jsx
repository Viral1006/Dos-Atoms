import React from "react";
import { useMediaQuery } from "react-responsive";
import Contactus from "./Contactus";
import ContactusMobile from "./ContactusMobile";

const ContactusIntegrate = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && <Contactus />}
      {isTabletOrMobile && <ContactusMobile />}
    </div>
  );
};

export default ContactusIntegrate;