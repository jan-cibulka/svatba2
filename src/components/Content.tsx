import { FC, useEffect } from "react";

import "./Content.css";
import Intro from "./Intro";
import Map from "./Map";
import Schedule from "./Schedule";
import DressCode from "./DressCode";
import Form from "./Form";
import Gifts from "./Gifts";
import Footer from "./Footer";

const Content: FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-wrapper").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="content-wrapper" id="intro">
        <div className="background"></div>
        <Intro />
      </div>
      <div className="content-wrapper dark" id="info">
        <div className="background"></div>
        <Map />
      </div>
      <div className="content-wrapper" id="schedule">
        <div className="background"></div>
        <Schedule />
      </div>
      <div className="content-wrapper dark" id="dress-code">
        <div className="background"></div>
        <DressCode />
      </div>
      <div className="content-wrapper" id="form">
        <div className="background"></div>
        <Form />
      </div>
      <div className="content-wrapper dark" id="gifts">
        <div className="background"></div>
        <Gifts />
      </div>
      <div className="content-wrapper" id="footer">
        <div className="background"></div>
        <Footer />
      </div>
    </>
  );
};

export default Content;
