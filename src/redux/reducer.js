import { GET_IMAGES, SEARCH_IMAGES } from "./actions";

const initialState = {
  images: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
