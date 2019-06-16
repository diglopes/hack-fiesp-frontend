import React, { Component } from "react";

import "./style.css";

export default class Form extends Component {
  render() {
    return (
      <form class="form-group" id="formulario">
        <label for="formulario-projeto">
          Descreva a sua proposta de problema
        </label>
        <textarea class="form-control" id="formulario-projeto" rows="7" />
        <button type="button" class="btn btn-secondary">
          Enviar
        </button>
      </form>
    );
  }
}
