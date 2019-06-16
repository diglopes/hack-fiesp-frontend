import React from "react";
import Routes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Ranking from "./components/Ranking";
import HashtagList from "./components/HashtagList";

import { BrowserRouter } from "react-router-dom";

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
            <HashtagList />
            <Ranking />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
