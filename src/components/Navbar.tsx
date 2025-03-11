import { FC, useEffect, useState } from "react";

import "./Navbar.css";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#uvod"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Úvod
        </a>
        <a
          href="#program"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Harmonogram
        </a>
        <a
          href="#misto"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Místo
        </a>
        <a
          href="#dresscode"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Dress&nbsp;code
        </a>
        <a
          href="#greetings"
          className="nav-link"
          onClick={() => setIsMenuOpen(false)}
        >
          Formulář
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
