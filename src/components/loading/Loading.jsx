import React from "react";
import img from "../../helper/loading1.gif";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={img} alt="loading" />
    </div>
  );
};

export default Loading;
