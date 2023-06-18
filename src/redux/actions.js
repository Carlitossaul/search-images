import axios from "axios";
import { toast } from "react-hot-toast";
export const GET_SAVED = "GET_SAVED";
export const SET_SAVED = "SET_SAVED";
export const GET_IMAGES = "GET_IMAGES";
export const SEARCH_IMAGES = "SEARCH_IMAGES";
export const DELETE_IMAGE = "DELETE_IMAGE";

const keyPub = "nnNmLwyFeFCd7-WsoFDCPLEI-C2pQqQp3pXh_eJ8x10";

export const getImages = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=argentina&client_id=${keyPub}&per_page=28`
      );
      dispatch({
        type: GET_IMAGES,
        payload: response.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchImages = (searchTerm) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${keyPub}&per_page=30`
    );
    dispatch({
      type: SEARCH_IMAGES,
      payload: response.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSaved = () => {
  return {
    type: GET_SAVED,
  };
};

export const addToSaved = (obj) => {
  let imagesItems = JSON.parse(localStorage.getItem("saved")) || [];
  const existingItem = imagesItems.find((item) => item.id === obj.id);
  if (existingItem) {
    toast.error("Error: Item already saved as a favorite.");
  } else {
    imagesItems.push(obj);
    toast.success("Item successfully added to favorites!");
  }
  localStorage.setItem("saved", JSON.stringify(imagesItems));
  return {
    type: SET_SAVED,
    payload: imagesItems,
  };
};

export const deleteItemSaved = (id) => {
  let imagesItems = JSON.parse(localStorage.getItem("saved")) || [];
  let filtered = imagesItems.filter((ele) => ele.id !== id);
  localStorage.setItem("saved", JSON.stringify(filtered));
  return {
    type: DELETE_IMAGE,
    payload: filtered,
  };
};
