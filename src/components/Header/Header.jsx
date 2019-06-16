import React from "react";

import "./style.css";

import tupinicode from "../../assets/tupinicode.png";

export default props => {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={tupinicode} alt="" id="logo" />
        </a>

        <button type="button" class="btn btn-outline-success btn-sm">
          Sair
        </button>
      </div>
    </nav>
  );
};
