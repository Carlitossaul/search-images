import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchImages } from "../../redux/actions";
import style from "./Hashtag.module.css";

const Hashtag = () => {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState("");

  const tags = [
    { label: "Code", value: "Code" },
    { label: "Honda", value: "honda" },
    { label: "Web design", value: "Web design" },
    { label: "Tennis", value: "tennis" },
    { label: "Artificial intelligence", value: "Artificial intelligence" },
    { label: "Rio de Janeiro", value: "rio" },
    { label: "Machine learning", value: "Machine learning" },
    { label: "Sound", value: "sound" },
    { label: "Cybersecurity", value: "Cybersecurity" },
    { label: "Mobile development", value: "Mobile development" },
    { label: "Desktop", value: "computadora" },
    { label: "Gafas", value: "gafas" },
  ];

  const handleTagClick = (tag) => {
    setSelectedTag(tag.value);
    dispatch(searchImages(tag.value));
    // window.scrollTo(0, 0);
  };

  const renderTags = () => {
    return tags.map((tag, index) => (
      <span
        key={index}
        className={`${style.tag} ${
          selectedTag === tag.value ? style.activeTag : ""
        }`}
        onClick={() => handleTagClick(tag)}
      >
        #{tag.label}
      </span>
    ));
  };

  return (
    <div>
      <div>{renderTags()}</div>
    </div>
  );
};

export default Hashtag;
