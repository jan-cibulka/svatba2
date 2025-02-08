import { FC } from "react";

import "./Navbar.css";
const Navbar: FC = () => {
  return (
    <nav>
      <div>
        <span>Barca</span> & <span>Zdenda</span>
      </div>
      <div className="divider" />
    </nav>
  );
};

export default Navbar;
