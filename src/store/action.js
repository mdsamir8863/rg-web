/* eslint-disable no-undef */
import axios from "axios";
let api = "/api/v1";
const token = localStorage.getItem("token");

export const login_user = (email, password) => async (dispatch) => {
  try {
    const API = api + "/login/user";
    console.log(API);
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(
      API,
      { email, password },
      { headers: { token } }
    );
    data?.token ? localStorage.setItem("token", data?.token) : "";
    if (data?.user) {
      dispatch({ type: "user_success", payload: data.user });
      dispatch({ type: "loading_stop" });
    }
    dispatch({ type: "loading_stop" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "loading_stop" });
    dispatch({
      type: "user_fail",
      payload:
        error?.response?.data?.message ||
        "something went wrong try again later",
    });
  }
};

export const fetch_me = () => async (dispatch) => {
  try {
    const API = api + "/user";
    dispatch({ type: "user_request" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      dispatch({ type: "user_success", payload: data.data });
      // data?.token ? localStorage.setItem("token", data?.token) : "";
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  }
};

export const signUP = (postData, role) => async (dispatch) => {
  try {
    const API = api + `/new/${role}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API, postData, { headers: { token } });
    console.log(data);
    if (data?.user) {
      dispatch({ type: "user_success", payload: data.user });
      data?.token ? localStorage.setItem("token", data?.token) : "";
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchSubjectData = () => async (dispatch) => {
  try {
    const API = api + `/allsubjects`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      dispatch({ type: "subjectData", payload: data?.data });
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchChapter = (subject) => async (dispatch) => {
  try {
    const API = api + `/get/chapter`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(
      API,
      { subject: subject },
      { headers: { token } }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
