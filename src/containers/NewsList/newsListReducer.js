import { newsListActionTypes } from "./newsListActionTypes";

const { SET_NEWS_LIST, SET_COMPLETE_RESPONSE } = newsListActionTypes;

let initialState = {
  newsList: [],
  completeResponse: null
};

const newsListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMPLETE_RESPONSE:
      return {
        ...state,
        ...{ completeResponse: payload }
      };
    case SET_NEWS_LIST:
      return {
        ...state,
        ...{ newsList: payload }
      };
    default:
      return state;
  }
};

export default newsListReducer;
