import React from "react";
import Routes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Ranking from "./components/Ranking";
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
            <Form />
            <Routes />
          </div>
          <div className="col-md-4" id="side-bar">
            <div id="taglist">
              <div className="taglist-body">
                <div className="taglist-body-item">
                  <a href="#">#saude</a>
                  <span className="badge badge-pill badge-secondary">30</span>
                </div>

                <div className="taglist-body-item">
                  <a href="#">#educação</a>
                  <span className="badge badge-pill badge-secondary">27</span>
                </div>

                <div className="taglist-body-item">
                  <a href="#">#documentos</a>
                  <span className="badge badge-pill badge-secondary">18</span>
                </div>

                <div className="taglist-body-item">
                  <a href="#">#empresas</a>
                  <span className="badge badge-pill badge-secondary">9</span>
                </div>

                <div className="taglist-body-item">
                  <a href="#">#previdencia</a>
                  <span className="badge badge-pill badge-secondary">4</span>
                </div>
              </div>
            </div>

            <Ranking />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
