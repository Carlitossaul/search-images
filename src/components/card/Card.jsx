import React from "react";
import style from "./Card.module.css";

const Card = ({ photo, alt, description }) => {
  return (
    <div className={style.conteinerCard}>
      <div className={style.card}>
        <img className={style.img} src={photo} alt={alt} />
        {/* <p>{description}</p> */}
        {/* <p>{alt}</p> */}
      </div>
    </div>
  );
};

export default Card;
