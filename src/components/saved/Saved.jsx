import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemSaved } from "../../redux/actions";
import styles from "./Saved.module.css";
import Loading from "../loading/Loading";

export const Saved = () => {
  const saved = useSelector((state) => state.saved);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Saved Images</h1>
      {saved.length > 0 ? (
        <div className={styles.containerCard}>
          {saved.length > 0 &&
            saved.map((ele, index) => (
              <div className={styles.card} key={index}>
                <img className={styles.img} src={ele.photo} alt="image" />
                <button
                  className={styles.button}
                  onClick={() => dispatch(deleteItemSaved(ele.id))}
                >
                  X
                </button>
              </div>
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
