import { FC } from "react";

import "./Content.css";
import Intro from "./Intro";
import Map from "./Map";
import Schedule from "./Schedule";
const Content: FC = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="background"></div>
        <Intro />
      </div>
      <div className="content-wrapper dark">
        <div className="background"></div>
        <Schedule />
      </div>
      <div className="content-wrapper">
        <div className="background"></div>
        <Map />
      </div>
    </>
  );
};

export default Content;
