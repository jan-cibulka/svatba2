import { FC } from "react";

import "./Content.css";
import Section1 from "./Section1";
const Content: FC = () => {
  return (
    <div className="content-wrapper">
      <div className="background"></div>
      <Section1 />
    </div>
  );
};

export default Content;
