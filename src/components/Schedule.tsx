import { FC } from "react";

import "./Schedule.css";

const Schedule: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Harmonogram</div>
      <div className="bubbles-wrapper">
        <div className="bubble left">
          <div className="bubble-title">Rano</div>
          <div className="item">11:00 - Dodelat</div>
          <div className="item">12:00 - Obrad</div>
          <div className="item">13:00 - Fotky</div>
        </div>
        <div className="divider"></div>
        <div className="bubble right">
          <div className="bubble-title">Odpoledne</div>
          <div className="item">14:00 - Obed</div>
          <div className="item">15:00 - Hazeni kytice</div>
          <div className="item">16:00 - Tanec</div>
        </div>
        <div className="divider"></div>
        <div className="bubble left">
          <div className="bubble-title">Vecer</div>
          <div className="item">17:00 - Kapela</div>
          <div className="item">18:00 - Grill</div>
          <div className="item">19:00 - Volna Zabava</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
