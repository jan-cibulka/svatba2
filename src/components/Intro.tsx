import { FC, useEffect, useState } from "react";

import "./Intro.css";
import { desktopThreshold } from "../App";

const nonBreakingSpace = "\u00A0";
const title = `MILÍ${nonBreakingSpace}PŘÁTELÉ A${nonBreakingSpace}RODINO`;
const text1 =
  "Test push - léto se chystá velmi zvláštní a radostná událost – naše svatba.";

const text2 =
  "Tento den si nedokážeme představit bez našich nejbližších. Proto vás s radostí zveme, abyste byli součástí tohoto krásného okamžiku a oslavili ho s námi.";
const jmeno1 = "Barča";
const jmeno2 = "Zdenda";
const date = "21. 6. 2025";
const place = "Plzeň - Křimice";

const Intro: FC = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= desktopThreshold
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= desktopThreshold);
    };

    // Call immediately on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="section-wrapper section1">
      <div className="names">
        {jmeno1} & {jmeno2}
      </div>
      <img src={isMobile ? "na_vysku.png" : "/landscape_reduced.png"} />
      <div className="date-place">
        <div className="container">
          <div className="item-top">{date}</div>
          <div className="item-bottom">datum</div>
        </div>
        <div className="container">
          <div className="item-top">{place}</div>
          <div className="item-bottom">místo</div>
        </div>
      </div>
      <div className="text">
        <p className="title">{title}</p>
        <p className="text-1">{text1}</p>
        <p className="text-2">{text2}</p>
      </div>
    </div>
  );
};

export default Intro;
