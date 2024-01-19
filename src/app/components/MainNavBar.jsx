import { useState, useEffect } from "react";
import DeskNav from "./DeskNav";
import MbNav from "./MbNav";

const NavBar = () => {
  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if the window width is above 768px
  const isDesktop = windowWidth > 768;

  return (
    <div>
      {isDesktop ? (
        // Render DeskNav for desktop
        <DeskNav />
      ) : (
        // Render MbNav for mobile
        <MbNav />
      )}
    </div>
  );
};

export default NavBar;
