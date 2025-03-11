import { FC, useEffect, useState } from "react";

import "./Intro.css";
import { desktopThreshold } from "../App";

const nonBreakingSpace = "\u00A0";
const title = `MILÁ${nonBreakingSpace}RODINO A${nonBreakingSpace}PŘÁTELÉ`;
const text1 =
  "Vítejte na našich svatebních stránkách. Náš svatební den se blíží. Tento den si bez vás nedokážeme představit, proto vás s radostí zveme, abyste byli jeho součástí a oslavili ho s námi.";

const text2 =
  "Těšíme se na vaší účast a aby vše klapalo podle plánu, připravili jsme pro vás pár informací a krátký dotazník. Brzy se uvidíme.";
const jmeno1 = "Barča";
const jmeno2 = "Zdenda";
const date = "21. 6. 2025 ve 12:00";

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
          <div className="item-top">Zámecký park Křimice</div>
          <div className="item-bottom">obřad</div>
        </div>
        <div className="container">
          <div className="item-top">Sokolovna Křimice</div>
          <div className="item-bottom">svatební hostina</div>
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
