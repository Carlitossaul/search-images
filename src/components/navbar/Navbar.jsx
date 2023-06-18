import React from "react";
import img from "../../helper/logo.png";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import Search from "../search/Search";
import { FaBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const isAboutOrFavorites =
    location.pathname === "/about" || location.pathname === "/favorites";

  const saved = useSelector((state) => state.saved);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to={"/"} className={styles.conteinerImg}>
          <img className={styles.img} src={img} alt="logo" />
        </Link>

        {!isAboutOrFavorites && (
          <div className={styles.Search}>
            <Search />
          </div>
        )}

        <div className={styles.links}>
          <Link
            to="/home"
            className={`${styles.link} ${
              window.location.pathname === "/home" && styles["link-active"]
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${styles.link} ${
              window.location.pathname === "/about" && styles["link-active"]
            }`}
          >
            About
          </Link>
          <Link
            to="/saved"
            className={`${styles.link} ${styles.saved} ${
              window.location.pathname === "/saved" && styles["link-active"]
            }`}
          >
            {saved.length > 0 ? (
              <span className={styles.span}>{saved.length}</span>
            ) : (
              ""
            )}
            <FaBookmark />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
