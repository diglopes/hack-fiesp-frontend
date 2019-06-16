import React from "react";
import Routes from "./routes";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <div className="container">
        <div className="row">
          <Routes class="col-md-8" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
