import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../redux/actions";
import style from "./Home.module.css";
import Endpoints from "../endpoints/Enpoints";
import Hashtag from "../hashtag/Hashtag";
import { FaAngleDoubleUp } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  const [showScrollButton, setShowScrollButton] = useState(false);

  // Función que lleva al usuario al inicio de la página
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Función para mostrar u ocultar el botón según la posición del usuario en la página
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 400) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.divImage}>
        <Hashtag />
      </div>
      <div className={style.endpoints}>
        <Endpoints />
      </div>
      <div className={style.conteinerCard}>
        {images &&
          images.map((photo) => (
            <Card
              key={photo.id}
              alt={photo.alt_description}
              photo={photo.urls.regular}
              description={photo.description}
            />
          ))}
      </div>
      {showScrollButton && (
        <button className={style.scrollToTopButton} onClick={handleScrollToTop}>
          <FaAngleDoubleUp />
        </button>
      )}
    </div>
  );
};

export default Home;
