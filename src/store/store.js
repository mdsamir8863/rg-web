import { configureStore } from "@reduxjs/toolkit";
import { loading_reducer, user_reducer, error_reducer, studentSubjectReducers ,studentCoursesReducers} from "./reducers";

const store = configureStore({
  reducer: {
    loading_reducer,
    user_reducer,
    error_reducer,
    studentSubjectReducers,
    studentCoursesReducers
  },
});

export default store;
