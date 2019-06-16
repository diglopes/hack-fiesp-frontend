import React from "react";
import "./style.css";
import imgUser from "../../assets/user.jpg";

export default props => {
  return (
    <div className="jumbotron jumbotron-fluid" id="banner">
      <div className="profile-image">
        <img src={imgUser} alt="" />
      </div>
    </div>
  );
};
