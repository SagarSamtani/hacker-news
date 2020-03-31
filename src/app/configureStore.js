import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "reduxStore",
    storage
  },
  persistedReducer = persistReducer(persistConfig, rootReducer),
  enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(thunk))
      : composeWithDevTools(applyMiddleware(thunk));

export default () => {
  let store = createStore(persistedReducer, enhancer),
    persistor = persistStore(store);
  return { store, persistor };
};
