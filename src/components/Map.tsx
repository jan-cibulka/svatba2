import { FC } from "react";

import "./Map.css";

const Map: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Informace</div>

      <div className="info-section">
        <h2>Obřad</h2>
        <p>
          Obřad se bude konat dne 21. 6. 2025 v Zámeckém parku v Křimicích ve
          12:00 hodin. Vchod do zámeckého parku se nachází z ulice Křimické
          náměstí. (je vyznačen na mapě …). Vchod bude také označen směrovkou
          „svatba“. Příjezd hostů od 11:00 do 11:30. Parkování je možné na
          Zámeckém náměstí a na Křimickém náměstí. Alternativně lze parkovat
          před Sokolovnou Křimice na ulici Plzeňská. – udělat custom body v
          mapě. Po obřadu budou následovat gratulace a focení svatebčanů s
          novomanželi v zámeckém parku.
        </p>
      </div>

      <div className="info-section">
        <h2>Svatební Hostina</h2>
        <p>
          Po focení se přesuneme na svatební hostinu do Sokolovny Křimice (cca
          500 metrů). Zde bude následovat slavnostní oběd a nadcházející program
          (viz harmonogram). Oběd bude servírovaný, v průběhu celého dne se
          můžete těšit na bohatý raut, sladký bar, sushi bar a klasický
          alkoholický/nealkoholický bar 😉. Mimo jiné se můžete těšit na
          tombolu, svatební hry, vodní dýmku a skvělou hudbu pod taktovkou
          kapely Wocaties band.
        </p>
      </div>

      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2077.229199696126!2d13.31328149210469!3d49.75813441150119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af3b00b9b32c5%3A0xf21128a3c14f272d!2sRestaurace%20Sokolovna%20K%C5%99imice!5e0!3m2!1scs!2scz!4v1739305871885!5m2!1scs!2scz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="info-section">
        <h2>Přenocování</h2>
        <p>
          Vzhledem k tomu, že většina naší rodiny a přátel jsou z Plzně nebo
          blízkého okolí, nocleh prosím řešte individuálně. V případě, že byste
          měli zájem o ubytování, kontaktujte nás.
        </p>
      </div>
    </div>
  );
};

export default Map;
