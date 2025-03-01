import { FC } from "react";

import "./Content.css";
import Intro from "./Intro";
import Map from "./Map";
import Schedule from "./Schedule";
import DressCode from "./DressCode";
import Greetings from "./Greetings";

const Content: FC = () => {
  return (
    <>
      <div className="content-wrapper" id="uvod">
        <div className="background"></div>
        <Intro />
      </div>
      <div className="content-wrapper dark" id="program">
        <div className="background"></div>
        <Schedule />
      </div>
      <div className="content-wrapper" id="misto">
        <div className="background"></div>
        <Map />
      </div>
      <div className="content-wrapper dark" id="dresscode">
        <div className="background"></div>
        <DressCode />
      </div>
      <div className="content-wrapper" id="greetings">
        <div className="background"></div>
        <Greetings />
      </div>
    </>
  );
};

export default Content;
