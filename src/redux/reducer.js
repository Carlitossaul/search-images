import {
  DELETE_IMAGE,
  GET_IMAGES,
  GET_SAVED,
  SEARCH_IMAGES,
  SET_SAVED,
} from "./actions";

const initialState = {
  images: [],
  saved: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case SEARCH_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case GET_SAVED:
      const imagesItems =
        JSON.parse(window.localStorage.getItem("saved")) || [];
      return {
        ...state,
        saved: imagesItems,
      };
    case SET_SAVED:
      return {
        ...state,
        saved: action.payload,
      };
    case DELETE_IMAGE:
      return {
        ...state,
        saved: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
