import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchImages } from "../../redux/actions";

import style from "./Search.module.css";

const Search = () => {
  const [image, setImages] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchImages(image));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setImages(e.target.value);
    window.scrollTo(0, 0);
  };

  return (
    <form className={style.Search} onSubmit={handleSearch}>
      <input
        value={image}
        onChange={handleChange}
        type="search"
        className={style.input}
        placeholder="Find a image"
      />
      <button type="submit" className={style.button}>
        Search
      </button>
    </form>
  );
};

export default Search;
