import React from "react";

import "./quem.css";

const QuemSomos = () => {
  return (
    <div className="QuemSomos">
      <h1>Há mais de 7 anos apoiando o mercado cervejeiro! 🍻</h1>
      <img src={require("../../images/quemsomos.png")} width="1000px"></img>
      <p>
        Somos um grupo de 60 mulheres que se reuniu, em 2015, para conhecer mais
        sobre a cultura cervejeira e compartilhar momentos, confraternizando e
        fortalecendo amizades. O grupo, criado pela sommelière Lindslei Antunes,
        já realizou mais de 46 eventos, entre encontros e viagens, sempre
        relacionados ao universo da cerveja artesanal.
      </p>
      <h2>Como são os encontros das Lulupulinhas 🍻</h2>
      <img src={require("../../images/encontros.png")} width="1000px"></img>
      <p>
        Os encontros das Lulupulinhas são sempre divididos em 3 momentos:
        <p> Aprendizado | Degustação | Confraternização </p>
      </p>

      <h2>Nossas cervejas 🍻</h2>
      <img src={require("../../images/cervejas.png")} width="300px"></img>
      <p>
        Além de conhecer e consumir cervejas artesanais em suas visitas à bares
        e cervejarias, as Lulupulinhas já lançaram 5 rótulos próprios de
        cervejas artesanais.
      </p>

      <h2>Por onde as Lulupulinhas já passaram 🍻 </h2>
      <img src={require("../../images/rpc.png")} width="500px"></img>
      <p>
        Hausbier | Saborearte | Bierhof | Crazy4Beer | Mestre Cervejeiro |
        Bastards Brewery | Sapopemba | Gauden Bier | Beer ́Brew | Nut Beer |
        CWBest Beer | B33R Club | Drakkar | Beer Garage | Red Face | Fermentaria
        | HomeBrewers | Mercado da Cerveja | Fritz Cervejaria | Mucha Breja |
        Maniacs Beer | Klein | Filosofia Cachaçaria | Ol Beer | Clube do Malte |
        Lohn Bier (SC) | Alright Beer | Usimalte | Bier Wit | Bencke Bier |
        Cervejaria Porto de Cima | Agraria Maltaria | Fog Beer & Souce
        Experience | Locomotive Brew (SC) | Villa Batel Mix | Cervejaria Farol
        (RS) | Société de La Meuse (RS) | Rasen Bier (RS) | Taberna MF (RS) |
        Cervejaria Yule | NutBier | Cervejaria Ovelha | Turbinada | Joy Brewery
        Project
      </p>
    </div>
  );
};

export default QuemSomos;
