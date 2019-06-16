import React from "react";

import "./styles.css";
import user from "../../assets/user.jpg";

const Contribuidor = () => {
  return (
    <div id="contribuidor">
      <div className="info">
        <img src={user} alt="" />
        <span className="nome">Carlos Roberto</span>
      </div>
      <div className="pontuacao">
        <span className="ponto">589 pts</span>
        <i className="fas fa-medal gold" />
      </div>
    </div>
  );
};

export default Contribuidor;
