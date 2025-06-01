import { FC } from "react";
import "./DressCode.css";

const DressCode: FC = () => {
  const colors = [
    { hex: "#093327", name: "Tmavá zelená" },
    { hex: "#105844", name: "Zelená" },
    { hex: "#c89881", name: "Tmavá champagne" },
    { hex: "#fdcfb8", name: "Světlá broskvová" },
    { hex: "#fcdbe2", name: "Bledě růžově levandulová" },
  ];

  return (
    <div className="section-wrapper">
      <div className="title">Dress code</div>
      <p style={{ textAlign: 'center' }}>Budeme moc rádi, když sladíte své oblečení či doplňky (kravaty, motýlky) s barvami svatby.</p>
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
          <p>Obleky a saka</p>
          <p>v tmavých barvách.</p>
          <p>Doplňky (kravaty, motýlky)</p>
          <p>v barvách svatby.</p>
          <div className="arrow-left"></div>
        </div>
        <div className="dress-code-image men-image" />
      </div>

      <div className="dress-code-section landscape-section">
        <div className="dress-code-image landscape-image" />
        <div className="dress-code-text">
          <div className="arrow-right"></div>
          <h2>Ženy:</h2>
          <p>Šaty nebo kostýmky.</p>
        </div>
      </div>

      <p className="dress-code-note">
        Také doporučujeme pohodlnou obuv, protože svatba bude venku.
      </p>
    </div>
  );
};

export default DressCode;
