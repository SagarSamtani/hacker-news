import { newsListActionTypes } from "./newsListActionTypes";

const { SET_NEWS_LIST, SET_COMPLETE_RESPONSE } = newsListActionTypes;

export const setCompleteResponse = payload => {
  return {
    type: SET_COMPLETE_RESPONSE,
    payload
  };
};

export const setNewsList = payload => {
  return {
    type: SET_NEWS_LIST,
    payload
  };
};
