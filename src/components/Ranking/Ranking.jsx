import React, { Component } from "react";

import "./styles.css";

import Contribuidor from "../Contribuidor/";

import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpeg";
import user3 from "../../assets/user3.jpg";

export default class Ranking extends Component {
  render() {
    return (
      <div id="ranking">
        <div className="ranking-header">
          <p>Maiores contribuidores</p>
        </div>
        <Contribuidor
          imagem={user1}
          nome={"Carlos Roberto"}
          pontos={"988"}
          medalha={"gold"}
        />

        <Contribuidor
          imagem={user2}
          nome={"João Pedro"}
          pontos={"865"}
          medalha={"silver"}
        />

        <Contribuidor
          imagem={user3}
          nome={"Ana Claudia"}
          pontos={"726"}
          medalha={"DarkGoldenRod"}
        />
      </div>
    );
  }
}
