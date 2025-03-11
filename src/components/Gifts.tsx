import { FC } from "react";
import "./Gifts.css";

const Gifts: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Svatební Dary</div>
      <p className="gifts-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="bank-info">
        <div className="account-details">
          <p>Číslo účtu: XXXX-XXXXXXXXXX/XXXX</p>
        </div>
        <div className="qr-code">
          <img src="/qr-code.png" alt="QR kód pro platbu" />
        </div>
      </div>
    </div>
  );
};

export default Gifts;
