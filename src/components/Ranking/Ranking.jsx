import React, { Component } from "react";

import "./styles.css";

import Contribuidor from "../Contribuidor/";

export default class Ranking extends Component {
  render() {
    return (
      <div id="ranking">
        <div className="ranking-header">
          <p>Maiores contribuidores</p>
        </div>
        <Contribuidor />
      </div>
    );
  }
}
