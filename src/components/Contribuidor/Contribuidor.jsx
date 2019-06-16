import React from "react";

import "./styles.css";

const Contribuidor = props => {
  const medal = {
    color: props.medalha
  };

  return (
    <div id="contribuidor">
      <div className="info">
        <img src={props.imagem} alt="" />
        <span className="nome">{props.nome}</span>
      </div>
      <div className="pontuacao">
        <span className="ponto">{props.pontos} pts</span>
        <i className="fas fa-medal " style={medal} />
      </div>
    </div>
  );
};

export default Contribuidor;
