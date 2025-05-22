import { FC } from "react";

import "./Schedule.css";

const Schedule: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Harmonogram</div>
      <div className="bubbles-wrapper">
        <div className="bubble left">
          <div className="bubble-title">Dopoledne</div>
          <div className="item">11:00 - Příjezd hostů</div>
          <div className="item">12:00 - Obřad</div>
          <div className="item">12:30 - Fotografování svatebčanů s novomanželi</div>
          <div className="item">13:00 - Přesun na slavnostní oběd</div>
        </div>
        <div className="divider" />
        <div className="bubble right">
          <div className="bubble-title">Odpoledne</div>
          <div className="item">13:30 - Slavnostní oběd</div>
          <div className="item">15:00 - Hod kyticí</div>
          <div className="item">15:30 - Krájení dortu</div>
          <div className="item">17:00 - První tanec novomanželů</div>
        </div>
        <div className="divider" />
        <div className="bubble left">
          <div className="bubble-title">Večer</div>
          <div className="item">17:00 - Začátek hudebního programu</div>
          <div className="item">18:30 - Grilování a raut</div>
          <div className="item">19:40 - Tombola</div>
          <div className="item">22:00 - Večerní překvapení</div>
          <div className="item">23:00 - Volná zábava</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
