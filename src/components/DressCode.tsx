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
      <p>Budeme moc rádi, když sladíte své oblečení s barvami svatby.</p>
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
          <h2>Muži:</h2>
          <p>Obleky, saka, košile.</p>
          <p>Šedá a modrá jsou také možné!</p>
          <div className="arrow-left"></div>
        </div>
        <div className="dress-code-image men-image" />
      </div>

      <div className="dress-code-section landscape-section">
        <div className="dress-code-image landscape-image" />
      </div>

      <div className="dress-code-section">
        <div className="dress-code-image women-image" />
        <div className="dress-code-text">
          <h2>Ženy:</h2>
          <p>Koktejlové šaty nebo kostýmky.</p>
          <p>Stříbrná je také možná!</p>
          <div className="arrow-right"></div>
        </div>
      </div>

      <p className="dress-code-note">
        Také doporučujeme pohodlnou obuv, protože svatba bude venku.
      </p>
    </div>
  );
};

export default DressCode;
