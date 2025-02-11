import { FC, useState } from "react";

import "./Section1.css";

const nonBreakingSpace = "\u00A0";
const title = `MILÍ${nonBreakingSpace}PŘÁTELÉ A${nonBreakingSpace}RODINO`;
const text1 =
  "Toto léto se chystá velmi zvláštní a radostná událost – naše svatba.";

const text2 =
  "Tento den si nedokážeme představit bez našich nejbližších. Proto vás s radostí zveme, abyste byli součástí tohoto krásného okamžiku a oslavili ho s námi.";
const jmeno1 = "Barča";
const jmeno2 = "Zdeněk";
const date = "21.06.25";
const place = "Křimice";

const Section1: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth < 768);
  });

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

export default Section1;
