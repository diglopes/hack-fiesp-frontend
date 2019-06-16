import React from "react";

import "./style.css";

import tupinicode from "../../assets/tupinicode.png";

export default props => {
  return (
    <nav className="navbar navbar-light bg-light shadow-md">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={tupinicode} alt="" id="logo" />
        </a>

        <button type="button" className="btn btn-outline-success btn-sm px-4">
          Sair
        </button>
      </div>
    </nav>
  );
};
