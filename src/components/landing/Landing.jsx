import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.container}>
        <h1 className={style.title}>
          Discover the best images & photos for your project...
        </h1>
        <NavLink to={"/home"}>
          <button className={style.button}>Start</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
