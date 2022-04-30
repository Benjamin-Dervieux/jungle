import React from "react";
import "../styles/banner.css";
import logo from "../assets/logo.png";

function Banner() {
  const title = "La maison Jungle";
  return (
    <div className="banner">
      <img className="logo-jungle" src={logo} alt="logo-jungle" />
      <h1 className="title">{title}</h1>
    </div>
  );
}

export default Banner;
