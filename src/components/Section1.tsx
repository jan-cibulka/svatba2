import { FC } from "react";

import "./Section1.css";

const title = "DEAR FRIENDS AND FAMILY";
const text1 =
  "This summer a very special and happy event is going to happen - our wedding";

const text2 =
  "It is impossible to imagine this day without our closest people. Thus, we ae happy to invite you to join and share this wonderful occasion with us";

const date = "29.08.23";
const place = "Krimice";
const Section1: FC = () => {
  return (
    <div className="section-wrapper section1">
      <div className="names">Barca & Zdenda</div>
      <div className="date-place">
        <div className="container">
          <div className="item-top">{date}</div>
          <div className="item-bottom">date</div>
        </div>
        <div className="container">
          <div className="item-top">{place}</div>
          <div className="item-bottom">place</div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src="/src/assets/xaxa.jpg" alt="xaxa" width={100} height={100} />
      </div>
      <div className="text">
        <div className="title">{title}</div>
        <div className="text-1">{text1}</div>
        <div className="text-2">{text2}</div>
      </div>
    </div>
  );
};

export default Section1;
