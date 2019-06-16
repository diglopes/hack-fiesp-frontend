import React, { Component } from "react";

import "./style.css";

import Post from "../../components/Post";

export default class Feed extends Component {
  render() {
    return (
      <section id="feed">
        <Post />
      </section>
    );
  }
}
