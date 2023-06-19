import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  const location = useLocation();

  return (
    location.pathname !== "/" && (
      <div className={styles.container}>
        <NavLink
          target={"_blank"}
          className={styles.Navlink}
          to={"https://github.com/Carlitossaul/search-images"}
        >
          <p className={styles.p}>
            <GoMarkGithub className={styles.iconos} /> Built & Designed by
            Carlos Lovey
          </p>
        </NavLink>
      </div>
    )
  );
};

export default Footer;
