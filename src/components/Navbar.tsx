import { FC, useEffect } from "react";

import "./Navbar.css";

const Navbar: FC = () => {
  useEffect(() => {
    const updateScrollProgress = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${scrolled}%`
      );
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        {/* Placeholder for logo - replace with actual SVG later */}
      </div>
      <div className="nav-links">
        <a href="#uvod" className="nav-link">
          Úvod
        </a>
        <a href="#program" className="nav-link">
          Program
        </a>
        <a href="#misto" className="nav-link">
          Místo
        </a>
        <a href="#dresscode" className="nav-link">
          Dress code
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
