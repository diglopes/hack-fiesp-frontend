import React, { Component } from "react";

import "./style.css";

export default class Post extends Component {
  render() {
    return (
      <article id="feed-card">
        <div className="body">
          <h3>Titulo de um projeto</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nostrum optio sequi ex, quo inventore fugit porro quos eius cum!
          </p>
          <div className="tags">
            <span>#saude</span>
            <span>#sus</span>
          </div>
        </div>
        <div className="interaction">
          <div className="interaction-number">
            <p>0</p>
          </div>
          <div className="social">
            <i class="fas fa-thumbs-up" />
            <i class="fas fa-thumbs-down" />
          </div>
        </div>
      </article>
    );
  }
}
