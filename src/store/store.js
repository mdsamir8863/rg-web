import { configureStore } from "@reduxjs/toolkit";
import { loading_reducer, user_reducer, error_reducer } from "./reducers";

const store = configureStore({
  reducer: {
    loading_reducer,
    user_reducer,
    error_reducer,
  },
});

export default store;
