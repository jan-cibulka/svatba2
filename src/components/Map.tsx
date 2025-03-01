import { FC } from "react";

import "./Map.css";

const Map: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Kde nás najdete</div>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2077.229199696126!2d13.31328149210469!3d49.75813441150119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af3b00b9b32c5%3A0xf21128a3c14f272d!2sRestaurace%20Sokolovna%20K%C5%99imice!5e0!3m2!1scs!2scz!4v1739305871885!5m2!1scs!2scz"
          width="100%"
          height="450px"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
