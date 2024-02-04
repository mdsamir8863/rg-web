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
    dispatch({
      type: "user_fail",
      payload:
        error?.response?.data?.message?.message ||
        error?.response?.data?.message ||
        "Something went wrong ",
    });
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

export const fetchCourses = () => async (dispatch) => {
  try {
    const API = api + `/allcourses`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      dispatch({ type: "coursesData", payload: data?.data });
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fethc_subject = (subject, func) => async (dispatch) => {
  try {
    const API = api + `/get/chapter`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API, { subject }, { headers: { token } });
    console.log(data);
    if (data?.data) {
      dispatch({ type: "subjectChapterData", payload: data?.data });
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchChapterDetails = (id, func) => async (dispatch) => {
  try {
    const API = api + `/subject/chapter/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const fetchCourseDetails = (id, func) => async (dispatch) => {
  try {
    const API = api + `/get/course/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchLibDetails = (id, func) => async (dispatch) => {
  try {
    const API = api + `/get/library/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchSearchedCourse = (func, inp) => async (dispatch) => {
  try {
    const API = api + `/course/${inp}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const fetchSearchLibrary = (func, inp) => async (dispatch) => {
  try {
    const API = api + `/library/${inp}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchAllLibrary = (func) => async (dispatch) => {
  try {
    const API = api + `/alllibrary`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const fetchAllInst = (func) => async (dispatch) => {
  try {
    const API = api + `/get/near/institute`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const fetchAllTeacher = (func) => async (dispatch) => {
  try {
    const API = api + `/get/near/teacher`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const AddOnInte = (id, func) => async (dispatch) => {
  try {
    const API = api + `/show/inst/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.put(API, {}, { headers: { token } });
    console.log(data);
    if (data?.data) {
      func((e) => !e);
      console.log(data.data, "shdchsc");
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchSearchInst = (func, inp) => async (dispatch) => {
  try {
    const API = api + `/search/inst/${inp}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const fetchALlLeads = (func) => async (dispatch) => {
  try {
    const API = api + `/fetchallleadsa`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const getInstDetailsById = (id, func, invert) => async (dispatch) => {
  try {
    const API = api + `/get/inst/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data?.data);
      invert(true);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const followUser = (id, invert) => async (dispatch) => {
  try {
    const API = api + `/follow/teacher/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API, {}, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      invert(true);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};

export const finTeacherOnMail = (email, func) => async (dispatch) => {
  try {
    const API = api + `/find/teacher`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(
      API,
      { email: email },
      { headers: { token } }
    );
    console.log(data);
    if (data?.data) {
      // inverter(true)
      console.log(data.data, "shdchsc");
      func(data.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const findStudentFromId = (id, func) => async (dispatch) => {
  try {
    const API = api + `/find/student`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API, { id: id }, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)`
      console.log(data.data, "shdchsc");
      func(data.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const postNewJob = (postData, func) => async (dispatch) => {
  try {
    const API = api + `/postNewJob`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API, postData, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)`
      console.log(data.data, "shdchsc");
      func();
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const getMyCreatedJob = (func) => async (dispatch) => {
  try {
    const API = api + `/getMyCreatedJobs`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)`
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const getJobsNearMe = (func) => async (dispatch) => {
  try {
    const API = api + `/getJobs`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API,{}, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)`
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const ApplyForJob = (id,func) => async (dispatch) => {
  try {
    const API = api + `/applyForJob/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.post(API,{}, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)`
      console.log(data.data, "shdchsc");
      func(e=>!e);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
export const GetJobDetails = (id,func) => async (dispatch) => {
  try {
    const API = api + `/getJobDetails/${id}`;
    dispatch({ type: "loading_start" });
    const { data } = await axios.get(API, { headers: { token } });
    console.log(data);
    if (data?.data) {
      // inverter(true)`
      console.log(data.data, "shdchsc");
      func(data?.data);
    }
  } catch (error) {
    console.log(error);
    console.log("actions err>>>", error?.response?.data?.message);
    dispatch({ type: "user_fail", payload: error?.response?.data?.message });
  } finally {
    dispatch({ type: "loading_stop" });
  }
};
