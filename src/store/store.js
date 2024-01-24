import { configureStore } from "@reduxjs/toolkit";
import { loading_reducer, user_reducer, error_reducer, studentSubjectReducers } from "./reducers";

const store = configureStore({
  reducer: {
    loading_reducer,
    user_reducer,
    error_reducer,
    studentSubjectReducers
  },
});

export default store;
