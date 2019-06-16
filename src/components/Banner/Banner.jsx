import React from "react";
import "./style.css";
import imgUser from "../../assets/user.jpg";

export default props => {
  return (
    <div class="jumbotron jumbotron-fluid" id="banner">
      <div class="profile-image">
        <img src={imgUser} alt="" />
      </div>
    </div>
  );
};
