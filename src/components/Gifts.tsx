import { FC } from "react";
import "./Gifts.css";

const Gifts: FC = () => {
  return (
    <div className="section-wrapper">
      <div className="title">Svatební dary</div>
      <p className="gifts-description">
        Se svatebními dary si nelámte hlavu, nejdůležitější pro nás je, že dorazíte a strávíte s námi náš den. Pokud nás přece jen budete chtít nějak obdarovat,
        budeme rádi za příspěvek do začátku naší společné budoucnosti.
      </p>
      <div className="bank-info">
        <div className="account-details">
          <p>Číslo účtu: 1329637036/3030</p>
        </div>
        <div className="qr-code">
          <img src="/qr_code.png" alt="QR kód pro svatební dar." />
        </div>
      </div>
    </div>
  );
};

export default Gifts;
