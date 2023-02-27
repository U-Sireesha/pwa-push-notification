import axios from "axios";
import { createContext, useReducer, useContext, useEffect } from "react";
import { FETCH_USERS, GET_ALL_IMAGES, GET_IMAGE, POST_REQUEST } from "./action";
import reducer from "./reducer";
const AppContext = createContext();

const initialState = {
  users: [],
  currUser: {},
  img: "",
  images: [],
};

function AppProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);

  const fetchImage = async () => {
    const res = await fetch(
      "https://fastly.picsum.photos/id/866/800/400.jpg?hmac=sxL_lzsk2TVLY-OUFV2tHXWPnVHSbTjVg9TrwmVLpzM"
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    dispatch({ type: GET_IMAGE, payload: imageObjectURL });
  };

  // useEffect(() => {
  //   fetchImage();
  // }, []);
  const fetchUsers = async () => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: FETCH_USERS, payload: data });
  };
  const post = async (user) => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      user
    );
    dispatch({ type: POST_REQUEST, payload: data });
  };
  const getAllImages = async () => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/photos");
    dispatch({ type: GET_ALL_IMAGES, payload: data });
  };
  useEffect(() => {
    fetchUsers();
    getAllImages();
  }, []);
  return (
    <AppContext.Provider value={{ ...state, fetchUsers, post }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
