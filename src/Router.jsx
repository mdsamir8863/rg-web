import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Login from "./app/screens/startup/Login";
// import Registration from "./app/screens/startup/Registration";
import PreLoader from "./app/screens/startup/PreLoader";
import { useEffect, useState } from "react";
import Loader from "./app/components/Loader";
import Navbar from "./app/components/Navbar";
const Frames = lazy(() => import("./app/screens/startup/Frames"));
const Login = lazy(() => import("./app/screens/startup/Login"));
const Reg1 = lazy(() => import("./app/screens/registrations/Reg1"));
const InstituteForm = lazy(() =>
  import("./app/screens/registrations/InstituteForm")
);
const TeacherForm = lazy(() =>
  import("./app/screens/registrations/TeacherForm")
);
const StudentForm = lazy(() =>
  import("./app/screens/registrations/StudentForm")
);
const HrForm = lazy(() => import("./app/screens/registrations/HrForm"));
const SeekerForm = lazy(() => import("./app/screens/registrations/SeekerForm"));
const NotFound = lazy(() => import("./app/screens/404/NotFound"));

// student import
const StudentHome = lazy(() => import("./app/screens/home/StudentHome"));
const S_Notifi = lazy(() => import("./app/screens/student/Notifi"));
const S_Market = lazy(() => import("./app/screens/student/Market"));
const S_Games = lazy(() => import("./app/screens/student/Games"));
const S_Profile = lazy(() => import("./app/screens/student/Profile"));

// Teacher import
const TeacherHome = lazy(() => import("./app/screens/home/TeacherHome"));
const Tea_Notifi = lazy(() => import("./app/screens/teacher/Notifi"));
const Tea_Market = lazy(() => import("./app/screens/teacher/Market"));
const Tea_Post = lazy(() => import("./app/screens/teacher/Post"));
const Tea_Profile = lazy(() => import("./app/screens/teacher/Profile"));

// institute import
const InstituteHome = lazy(() => import("./app/screens/home/InstituteHome"));
const Ins_Notifi = lazy(() => import("./app/screens/institute/Notifi"));
const Ins_Leads = lazy(() => import("./app/screens/institute/Leads"));
const Ins_Post = lazy(() => import("./app/screens/institute/Post"));
const Ins_Profile = lazy(() => import("./app/screens/institute/Profile"));

// hr import
const RecruiterHome = lazy(() => import("./app/screens/home/RecruiterHome"));
const Hr_Notifi = lazy(() => import("./app/screens/hr/Notifi"));
const Hr_Market = lazy(() => import("./app/screens/hr/Market"));
const Hr_Post = lazy(() => import("./app/screens/hr/Post"));
const Hr_Profile = lazy(() => import("./app/screens/hr/Profile"));

// job seeker import
const JobSeekerHome = lazy(() => import("./app/screens/home/JobSeekerHome"));
const J_Notifi = lazy(() => import("./app/screens/jobSeeker/Notifi"));
const J_Market = lazy(() => import("./app/screens/jobSeeker/Market"));
const J_Jobs = lazy(() => import("./app/screens/jobSeeker/Jobs"));
const J_Profile = lazy(() => import("./app/screens/jobSeeker/Profile"));

import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import { fetch_me } from "./store/action";

const Routing = () => {
  const { user, error } = useSelector((e) => e.user_reducer);
  const [preLoading, setPreLoading] = useState(true);
  const [loadingComponent, setLoading] = useState(false);
  const { loading } = useSelector((e) => e.loading_reducer);
  const dispatch = useDispatch();



  const handleSubjectRedirect =(e)=>{
    console.log(e)

  }

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setPreLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!user) {
      dispatch(fetch_me());
    }
  }, [user]);

  

  useEffect(() => {
    try {
      if (error) {
        toast.error(error);
        dispatch({ type: "clear_error" });
      }
    } catch (err) {
      toast.error(err);
    }
  }, [dispatch, user, error]);

  return (
    <>
      <BrowserRouter>
        <div>
          <Toaster />
        </div>
        {loading || loadingComponent ? <Loader /> : ""}
        {preLoading ? <PreLoader /> : ""}
        {!preLoading && user ? <Navbar user={user} /> : ""}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route
              path="/home"
              element={
                user ? <Navigate to={`/${user.role}/home`} /> : <Frames />
              }
            />
            <Route
              path="/login"
              element={user ? <Navigate to={"/home"} /> : <Login />}
            />
            {/* <Route path="/registration" element={<Registration />} /> */}

            {/* testing comp */}
            {/* <Route path="/home/profile" element={<MyProfilePage />} /> */}
            <Route
              path="/register"
              element={user ? <Navigate to={"/home"} /> : <Reg1 />}
            />
            <Route
              path="/register/student"
              element={
                user ? (
                  <Navigate to={"/home"} />
                ) : (
                  <StudentForm setLoading={setLoading} />
                )
              }
            />
            <Route
              path="/register/institution"
              element={
                user ? (
                  <Navigate to={"/home"} />
                ) : (
                  <InstituteForm setLoading={setLoading} />
                )
              }
            />
            <Route
              path="/register/teacher"
              element={
                user ? (
                  <Navigate to={"/home"} />
                ) : (
                  <TeacherForm setLoading={setLoading} />
                )
              }
            />
            <Route
              path="/register/jobSeeker"
              element={
                user ? (
                  <Navigate to={"/home"} />
                ) : (
                  <SeekerForm setLoading={setLoading} />
                )
              }
            />
            <Route
              path="/register/hr"
              element={
                user ? (
                  <Navigate to={"/home"} />
                ) : (
                  <HrForm setLoading={setLoading} />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/login"
              element={user ? <Navigate to={"/home"} /> : <Login />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to={"/home"} /> : <Reg1 />}
            />

            {/* Student screens */}
            <Route
              path="/student/home"
              element={
                user && user.role === "student" ? (
                  <StudentHome handleSubjectRedirect={handleSubjectRedirect}/>
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/student/notification"
              element={
                user && user.role === "student" ? (
                  <S_Notifi />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/student/market"
              element={
                user && user.role === "student" ? (
                  <S_Market />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/student/games"
              element={
                user && user.role === "student" ? (
                  <S_Games />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/student/profile"
              element={
                user && user.role === "student" ? (
                  <S_Profile />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />

            {/* Teacher screens */}
            <Route
              path="/teacher/home"
              element={
                user && user.role === "teacher" ? (
                  <TeacherHome />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/teacher/notification"
              element={
                user && user.role === "teacher" ? (
                  <Tea_Notifi />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/teacher/market"
              element={
                user && user.role === "teacher" ? (
                  <Tea_Market />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/teacher/course"
              element={
                user && user.role === "teacher" ? (
                  <Tea_Post />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/teacher/profile"
              element={
                user && user.role === "teacher" ? (
                  <Tea_Profile />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            {/* Institute screens */}
            <Route
              path="/institute/home"
              element={
                user && user.role === "institute" ? (
                  <InstituteHome />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/institute/notification"
              element={
                user && user.role === "institute" ? (
                  <Ins_Notifi />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/institute/market"
              element={
                user && user.role === "institute" ? (
                  <Ins_Leads />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/institute/games"
              element={
                user && user.role === "institute" ? (
                  <Ins_Post />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/institute/profile"
              element={
                user && user.role === "institute" ? (
                  <Ins_Profile />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />

            {/* Hr screens */}
            <Route
              path="/hr/home"
              element={
                user && user.role === "hr" ? (
                  <RecruiterHome />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/hr/notification"
              element={
                user && user.role === "hr" ? (
                  <Hr_Notifi />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/hr/market"
              element={
                user && user.role === "hr" ? (
                  <Hr_Market />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/hr/games"
              element={
                user && user.role === "hr" ? (
                  <Hr_Post />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/hr/profile"
              element={
                user && user.role === "hr" ? (
                  <Hr_Profile />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />

            {/* Job seeker screens */}
            <Route
              path="/jobseeker/home"
              element={
                user && user.role === "seeker" ? (
                  <JobSeekerHome />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/jobseeker/notification"
              element={
                user && user.role === "seeker" ? (
                  <J_Notifi />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/jobseeker/market"
              element={
                user && user.role === "seeker" ? (
                  <J_Market />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/jobseeker/games"
              element={
                user && user.role === "seeker" ? (
                  <J_Jobs />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
            <Route
              path="/jobseeker/profile"
              element={
                user && user.role === "seeker" ? (
                  <J_Profile />
                ) : (
                  <Navigate to={"/home"} />
                )
              }
            />
          </Routes>
        </Suspense>
        {/* <PreLoader /> */}
      </BrowserRouter>
    </>
  );
};

export default Routing;
