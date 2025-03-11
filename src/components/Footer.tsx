import { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="greetings-text">
        <p>Těšíme se na vás,</p>
        <p className="signature">Barča & Zdenda</p>
        <div className="emoji"></div>
      </div>
    </div>
  );
};

export default Footer;
