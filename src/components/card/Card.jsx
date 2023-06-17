import React, { useState } from "react";
import styles from "./Card.module.css";
import { FaBookmark } from "react-icons/fa";
import { addToSaved } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Card = ({ alt, photo, id }) => {
  const dispatch = useDispatch();
  const [zoomed, setZoomed] = useState(false);

  const handleZoomClick = () => {
    if (zoomed) {
      setZoomed(false);
      document.body.style.overflow = "auto";
    } else {
      setZoomed(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleZoomClose = () => {
    setZoomed(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <img
          className={`${styles.img} ${zoomed && styles.zoomed}`}
          src={photo}
          alt={alt}
          onClick={handleZoomClick}
        />
        <button
          onClick={() => dispatch(addToSaved({ photo, id }))}
          className={styles.button}
        >
          <FaBookmark />
        </button>
        {zoomed && (
          <div className={styles.overlay} onClick={handleZoomClose}></div>
        )}
      </div>
    </div>
  );
};

export default Card;
