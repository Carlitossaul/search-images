import axios from "axios";

export const GET_IMAGES = "GET_IMAGES";
export const SEARCH_IMAGES = "SEARCH_IMAGES";

const keyPub = "nnNmLwyFeFCd7-WsoFDCPLEI-C2pQqQp3pXh_eJ8x10";

export const getImages = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=argentina&client_id=${keyPub}&per_page=30`
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
