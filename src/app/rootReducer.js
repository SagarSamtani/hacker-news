import { combineReducers } from "redux";
import newsListReducer from "../containers/NewsList/newsListReducer";

const rootReducer = combineReducers({
  //here all the reducers of the project
  newsListReducer
});

export default rootReducer;
