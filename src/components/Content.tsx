import { FC } from "react";

import "./Content.css";
import Section1 from "./Section1";
import Map from "./Map";
const Content: FC = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="background"></div>
        <Section1 />
      </div>
      <div className="content-wrapper dark">
        <div className="background"></div>
        <Map />
      </div>
    </>
  );
};

export default Content;
