import { FC } from "react";

import "./Navbar.css";

const Navbar: FC = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
