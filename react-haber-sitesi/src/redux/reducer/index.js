import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
categoriesReducer,
newsReducer,
});

export default rootReducer;