import { FC } from "react";
import "./DressCode.css";

const DressCode: FC = () => {
  const colors = [
    { hex: "#E6D7C3", name: "Beige" },
    { hex: "#E6BCB0", name: "Dusty Pink" },
    { hex: "#C3B1A5", name: "Taupe" },
    { hex: "#D4C1B8", name: "Light Mauve" },
    { hex: "#B7A99A", name: "Warm Gray" },
  ];

  return (
    <div className="section-wrapper">
      <div className="title">Dress code</div>
      <p>
        We would be very happy if your outfit is in the colours of the wedding
        theme.
      </p>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-swatch"
            style={{ backgroundColor: color.hex }}
            data-color={color.name}
          />
        ))}
      </div>

      <div className="dress-code-section">
        <div className="dress-code-text">
          <h2>Men:</h2>
          <p>Suits, jackets, shirts.</p>
          <p>Grey, blue colours are allowed too!</p>
        </div>
        <div className="dress-code-image men-image" />
      </div>

      <div className="dress-code-section landscape-section">
        <div className="dress-code-image landscape-image" />
      </div>

      <div className="dress-code-section">
        <div className="dress-code-image women-image" />
        <div className="dress-code-text">
          <h2>Women:</h2>
          <p>Cocktail dresses or suits.</p>
          <p>Silver is possible too!</p>
        </div>
      </div>

      <p className="dress-code-note">
        Also we recommend to wear comfortable shoes because the wedding will be
        outdoors.
      </p>
    </div>
  );
};

export default DressCode;
