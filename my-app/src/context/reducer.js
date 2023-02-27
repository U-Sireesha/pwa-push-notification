import { FETCH_USERS, GET_ALL_IMAGES, GET_IMAGE, POST_REQUEST } from "./action";
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case POST_REQUEST: {
      console.log(action.payload);
      return {
        ...state,
        currUser: action.payload,
      };
    }
    case GET_IMAGE: {
      console.log(action.payload);
      return {
        ...state,
        img: action.payload,
      };
    }
    case GET_ALL_IMAGES: {
      return {
        ...state,
        images: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};
export default reducer;
