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
          12:00 hodin. Vchod do Zámeckého parku se nachází z ulice Křimické
          náměstí (vyznačeno na mapě: Zámek Křimice - vchod). Vchod bude také označen směrovkou
          „svatba“. Příjezd hostů od 11:00 do 11:30. Parkování je možné na
          Zámeckém náměstí (vyznačeno v mapě: Parkoviště 1) a na Křimickém náměstí (vyznačeno v mapě: Parkoviště 2). Alternativně lze parkovat
          před Sokolovnou Křimice na ulici Plzeňská (vyznačeno v mapě: Parkoviště 3 a Parkoviště 4). Po obřadu budou následovat gratulace a focení svatebčanů s
          novomanželi v Zámeckém parku.
        </p>
      </div>
      <div className="info-section">
        <h2>Svatební Hostina</h2>
        <p>
          Po focení se přesuneme na svatební hostinu do Sokolovny Křimice (cca
          500 metrů - v mapě: Sokolovna Křimice). Zde bude následovat slavnostní oběd a nadcházející program
          (viz <a href="#schedule">Harmonogram</a>). Oběd bude servírovaný, v průběhu celého dne se
          můžete těšit na bohatý raut, sladký bar, sushi bar a klasický
          alkoholický/nealkoholický bar ;). Mimo jiné se můžete těšit na
          tombolu, svatební hry, vodní dýmku a skvělou hudbu pod taktovkou
          kapely Wocaties band.
        </p>
      </div>
      <div className="map-wrapper">
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
          <iframe
            src="https://www.google.com/maps/d/u/1/embed?mid=1OnO0_3h96D0pJ6D8H3g5nQXePSMzHHo&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
          ></iframe>
        </div>
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
