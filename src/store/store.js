import { createStore } from "redux";
import { memesReducer } from "./memesReducer";

const store = createStore(memesReducer);

export default store;
