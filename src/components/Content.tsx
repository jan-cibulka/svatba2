import { FC } from "react";

import "./Content.css";
import Intro from "./Intro";
import Map from "./Map";
import Schedule from "./Schedule";
import DressCode from "./DressCode";
import Form from "./Greetings";

const Content: FC = () => {
  return (
    <>
      <div className="content-wrapper" id="intro">
        <div className="background"></div>
        <Intro />
      </div>
      <div className="content-wrapper dark" id="schedule">
        <div className="background"></div>
        <Schedule />
      </div>
      <div className="content-wrapper" id="location">
        <div className="background"></div>
        <Map />
      </div>
      <div className="content-wrapper dark" id="dress-code">
        <div className="background"></div>
        <DressCode />
      </div>
      <div className="content-wrapper" id="form">
        <div className="background"></div>
        <Form />
      </div>
    </>
  );
};

export default Content;
