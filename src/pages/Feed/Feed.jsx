import React, { Component } from "react";
import api from "../../services/api";
import io from "socket.io-client";
import { Spring } from "react-spring/renderprops";

import "./style.css";

import Post from "../../components/Post";

export default class Feed extends Component {
  state = {
    posts: []
  };

  componentDidMount = async () => {
    this.registerToSocket();

    const result = await api.get("/posts");
    this.setState({ posts: result.data.docs });
  };

  registerToSocket = () => {
    const socket = io("https://tupinicodebackend.herokuapp.com/api");
    socket.on("postsLike", likedPost => {
      this.setState({
        posts: this.state.posts.map(post =>
          post._id === likedPost._id ? likedPost : post
        )
      });
    });
  };

  render() {
    return (
      <section id="feed">
        {this.state.posts.map((postagem, index) => (
          <Spring
            from={{ opacity: 0, transform: "translate3d(0, 400px, 0)" }}
            to={{ opacity: 1, transform: "translate3d(0, 0px, 0)" }}
            config={{ delay: 100 * (index + 1) }}
          >
            {style => (
              <div style={style}>
                <Post key={postagem._id} postagem={postagem} />
              </div>
            )}
          </Spring>
        ))}
      </section>
    );
  }
}
