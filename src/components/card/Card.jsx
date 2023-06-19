import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { addToSaved, deleteItemSaved } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Card = ({ alt, photo, id }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const saved = useSelector((state) => state.saved);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    saved.map((save) => {
      if (save.id === id) {
        setIsSaved(true);
      }
    });
  }, []);

  const handleSaved = () => {
    if (isSaved) {
      setIsSaved(false);
      dispatch(deleteItemSaved(id));
    } else {
      setIsSaved(true);
      dispatch(addToSaved({ photo, id }));
    }
  };

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

  const handleShareFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      photo
    )}`;
    window.open(shareUrl, "_blank");
  };

  const handleShareTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      photo
    )}`;
    window.open(shareUrl, "_blank");
  };

  const handleShareLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      photo
    )}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <div className={styles.containerCard}>
      <div
        className={`${styles.card}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className={`${styles.img} ${zoomed && styles.zoomed}`}
          src={photo}
          alt={alt}
          onClick={handleZoomClick}
        />
        <div className={styles.buttonSavedContainer}>
          {isSaved ? (
            <button
              onClick={handleSaved}
              className={`${styles.buttonSaved} ${
                isHovered ? "" : styles.hidden
              } `}
            >
              <FaBookmark />
            </button>
          ) : (
            <button
              onClick={handleSaved}
              className={`${styles.buttonSaved} ${
                isHovered ? "" : styles.hidden
              } `}
            >
              <FaRegBookmark />
            </button>
          )}
        </div>
        <div
          className={`${styles.divButtonsRed} ${
            isHovered ? "" : styles.hidden
          }`}
        >
          <button className={styles.buttonRed} onClick={handleShareFacebook}>
            <FaFacebook />
          </button>
          <button className={styles.buttonRed} onClick={handleShareTwitter}>
            <FaTwitterSquare />
          </button>
          <button className={styles.buttonRed} onClick={handleShareLinkedIn}>
            <FaLinkedin />
          </button>
        </div>
        {zoomed && (
          <div className={styles.overlay} onClick={handleZoomClose}></div>
        )}
      </div>
    </div>
  );
};

export default Card;
