import React, { Component } from "react";

import "./style.css";

export default class Form extends Component {
  render() {
    return (
      <form className="form-group" id="formulario">
        <input
          type="text"
          name="titulo"
          placeholder="Titulo da postagem"
          className="form-control"
        />
        <input
          type="text"
          name="tags"
          placeholder="Informe as tags relacionadas"
          className="form-control"
        />
        <textarea
          className="form-control"
          id="formulario-projeto"
          rows="7"
          placeholder="Informe o problema que você deseja compartilhar..."
        />
        <button type="button" className="btn btn-secondary px-5">
          Enviar
        </button>
      </form>
    );
  }
}
