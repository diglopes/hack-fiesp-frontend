import React from "react";
import Routes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <div className="container">
        <div className="row">
          <div className="col-md-8" id="rota">
            <Routes />
          </div>
          <div className="col-md-4" id="side-bar" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
