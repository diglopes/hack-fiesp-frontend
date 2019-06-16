import React, { Component } from "react";

import "./styles.css";

export default class HashtagList extends Component {
  render() {
    return (
      <div id="taglist">
        <div className="taglist-header">
          <p>Maiores contribuidores</p>
        </div>
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
    );
  }
}
