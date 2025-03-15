import { FC } from "react";
import "./Form.css";

const Form: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Formulář</div>
      <p className="form-description">
      Abychom mohli svatbu co nejlépe naplánovat, prosíme vás o vyplnění krátkého
      formuláře.
      </p>
      <a
        href="https://forms.gle/7giHGQveLMorRnso9"
        target="_blank"
        rel="noopener noreferrer"
        className="form-link"
      >
        Vyplnit formulář
      </a>
    </div>
  );
};

export default Form;
