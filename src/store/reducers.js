import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const loading_reducer = createReducer(initialState, (builder) => {
  builder
    .addCase("loading_start", (state) => {
      state.loading = true;
    })
    .addCase("loading_stop", (state) => {
      state.loading = false;
    });
});

export const user_reducer = createReducer(initialState, (builder) => {
  builder
    .addCase("user_success", (state, action) => {
      state.user = action.payload;
    })
    .addCase("user_fail", (state, action) => {
      state.error = action.payload;
    })
    .addCase("clear_error", (state) => {
      state.error = null;
    });
});

export const error_reducer = createReducer(initialState, (builder) => {
  builder
    .addCase("error_data", (state, action) => {
      state.error = action.payload;
    })
    .addCase("clear_error1", (state) => {
      state.error = null;
    });
});

export const studentSubjectReducers = createReducer(initialState, (builder) => {
  builder.addCase("subjectData", (state, action) => {
    state.subjects = action.payload;
  });
});


export const studentCoursesReducers = createReducer(initialState, (builder) => {
  builder.addCase("coursesData", (state, action) => {
    state.courses = action.payload;
  });
});


export const studentSubjectChapterReducers = createReducer(initialState, (builder) => {
  builder.addCase("subjectChapterData", (state, action) => {
    state.subject = action.payload;
  });
});