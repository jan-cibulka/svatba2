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
    </div>
  );
};

export default DressCode;
