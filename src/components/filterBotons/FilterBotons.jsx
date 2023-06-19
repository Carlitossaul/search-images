import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchImages } from "../../redux/actions";
import style from "./FilterBotons.module.css";

const FilterBotons = () => {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState("");

  const tags = [
    { label: "technology", value: "technology" },
    { label: "beach", value: "beach" },
    { label: "landscapes", value: "landscapes" },
    { label: "animals", value: "animals" },
    { label: "primavera", value: "primavera" },
    { label: "food", value: "food" },
    { label: "city", value: "city" },
    { label: "weddings", value: "weddings" },
    { label: "fashion", value: "fashion" },
    { label: "Background", value: "Background" },
    { label: "love", value: "love" },
    { label: "Negocios", value: "negocios" },
    { label: "Random", value: "random" },
    // Agrega más etiquetas según tus necesidades
  ];

  const handleTagClick = (tag) => {
    setSelectedTag(tag.value);
    dispatch(searchImages(tag.value));
    // window.scrollTo(0, 0);
  };

  const renderTags = () => {
    return tags.map((tag, index) => (
      <button
        key={index}
        className={`btn ${
          selectedTag === tag.value ? "btn-primary" : "btn-outline-primary"
        } mx-2 mb-2`}
        onClick={() => handleTagClick(tag)}
      >
        {tag.label}
      </button>
    ));
  };

  return (
    <div className={style.endpoints}>
      <div className={style.btnGroup}>{renderTags()}</div>
    </div>
  );
};

export default FilterBotons;
