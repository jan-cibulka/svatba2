import { FC } from "react";
import "./Greetings.css";

const Greetings: FC = () => {
  return (
    <div className="section-wrapper">
      <a href="https://forms.gle/7giHGQveLMorRnso9" target="_blank" rel="noopener noreferrer" className="form-link">
        Vyplňte formulář
      </a>
      <div className="greetings-text">
        <p>Těšíme se na vás,</p>
        <p className="signature">Barča & Zdenda</p>
        <div className="emoji"></div>
      </div>
    </div>
  );
};

export default Greetings;
