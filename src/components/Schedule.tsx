import { FC } from "react";

import "./Schedule.css";

const Schedule: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Harmonogram</div>
      <div className="bubbles-wrapper">
        <div className="bubble left">
          <div className="bubble-title">Dopoledne</div>
          <div className="item">11:00 - 11:30 - Příjezd hostů</div>
          <div className="item">12:00 - Obřad</div>
          <div className="item">12:45 - Focení svatebčanů s novomanželi</div>
        </div>
        <div className="divider" />
        <div className="bubble right">
          <div className="bubble-title">Odpoledne</div>
          <div className="item">13:30 - Slavnostní oběd</div>
          <div className="item">15:30 - Krájení dortu</div>
          <div className="item">16:00 - Házení kytice a podvazku</div>
          <div className="item">16:30 - První tanec novomanželů</div>
        </div>
        <div className="divider" />
        <div className="bubble left">
          <div className="bubble-title">Večer</div>
          <div className="item">17:00 - Začátek hudebního programu</div>
          <div className="item">18:00 - Grilování a raut</div>
          <div className="item">19:30 - Zábavný program (hry, proslovy)</div>
          <div className="item">21:00 - Půlnoční překvapení</div>
          <div className="item">22:00 - Volná zábava a tanec</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
