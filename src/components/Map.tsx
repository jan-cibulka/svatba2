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
          náměstí (vyznačeno na mapě: <a href="https://www.google.com/maps/dir//49.7579676,13.3060301" target="_blank" rel="noopener noreferrer">Zámek Křimice - vchod</a>). Vchod bude také označen směrovkou
          „svatba“. <strong>Příjezd hostů v 11:00.</strong> Parkování je možné na
          Zámeckém náměstí (vyznačeno v mapě: <a href="https://www.google.com/maps/dir//49.7581496,13.3095283" target="_blank" rel="noopener noreferrer">Parkoviště 1</a>) a na Křimickém náměstí (vyznačeno v mapě: <a href="https://www.google.com/maps/dir//49.7576815,13.3064222" target="_blank" rel="noopener noreferrer">Parkoviště 2</a>). Alternativně lze parkovat
          před Sokolovnou Křimice na ulici Plzeňská (vyznačeno v mapě: <a href="https://www.google.com/maps/dir//49.7574194,13.3130011">Parkoviště 3</a> a <a href="https://www.google.com/maps/dir//49.7583185,13.3132885" target="_blank" rel="noopener noreferrer">Parkoviště 4</a>). Po obřadu budou následovat gratulace a focení svatebčanů s
          novomanželi v Zámeckém parku.
        </p>
      </div>
      <div className="info-section">
        <h2>Svatební Hostina</h2>
        <p>
          Po focení se přesuneme na svatební hostinu do Sokolovny Křimice (přibližně
          500 metrů - v mapě: <a href="https://www.google.com/maps/dir//49.7575776,13.3130105" target="_blank" rel="noopener noreferrer">Sokolovna Křimice</a>). Zde bude následovat slavnostní oběd a nadcházející program
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

      <div className="info-section" style={{ marginTop: '15px', marginBottom: '15px' }}>
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
