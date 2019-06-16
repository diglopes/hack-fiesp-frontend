import React from "react";
import api from "../../services/api";

import "./style.css";

export default props => {
  const { postagem } = props;

  function handleLike(id) {
    api.post(`/postsLike/${id}`);
  }

  function handleDislike(id) {
    api.post(`/postsDislike/${id}`);
  }

  return (
    <article id="feed-card">
      <div className="body">
        <h3>{postagem.titulo}</h3>
        <p>{postagem.descricao}</p>
        <div className="tags">
          {postagem.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className="interaction">
        <div className="interaction-number">
          <p
            style={
              postagem.avaliacao > 0
                ? { color: "#2ecc71" }
                : { color: "#e74c3c" }
            }
          >
            {postagem.avaliacao}
          </p>
        </div>
        <div className="social">
          <i
            className="fas fa-thumbs-up"
            onClick={() => handleLike(postagem._id)}
          />
          <i
            className="fas fa-thumbs-down"
            onClick={() => handleDislike(postagem._id)}
          />
        </div>
      </div>
    </article>
  );
};
