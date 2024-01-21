import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
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
const StudentForm = lazy(() =>
  import("./app/screens/registrations/StudentForm")
);
const NotFound = lazy(() => import("./app/screens/404/NotFound"));

// student import
import StudentHome from "./app/screens/home/StudentHome";
import S_Notifi from "./app/screens/student/Notifi";
import S_Market from "./app/screens/student/Market";
import S_Games from "./app/screens/student/Games";
import S_Profile from "./app/screens/student/Profile";

// Teacher import
import TeacherHome from "./app/screens/home/TeacherHome";
import Tea_Notifi from "./app/screens/student/Notifi";
import Tea_Market from "./app/screens/student/Market";
import Tea_Games from "./app/screens/student/Games";
import Tea_Profile from "./app/screens/student/Profile";

// institute import
import InstituteHome from "./app/screens/home/InstituteHome";
import Ins_Notifi from "./app/screens/institute/Notifi";
import Ins_Leads from "./app/screens/institute/Leads";
import Ins_Post from "./app/screens/institute/Post";
import Ins_Profile from "./app/screens/institute/Profile";

// hr import
import RecruiterHome from "./app/screens/home/RecruiterHome";
import Hr_Notifi from "./app/screens/hr/Notifi";
import Hr_Market from "./app/screens/hr/Market";
import Hr_Post from "./app/screens/hr/Post";
import Hr_Profile from "./app/screens/hr/Profile";

// job seeker import
import JobSeekerHome from "./app/screens/home/JobSeekerHome";
import J_Notifi from "./app/screens/jobSeeker/Notifi";
import J_Market from "./app/screens/jobSeeker/Market";
import J_Jobs from "./app/screens/jobSeeker/Jobs";
import J_Profile from "./app/screens/jobSeeker/Profile";

const Routing = () => {
  const [preLoading, setPreLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => {
      setPreLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {loading ? <Loader /> : ""}

        {/* <div className="h-10 w-full flex"></div> */}
        {preLoading ? (
          <PreLoader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to={"/welcome"} />} />
              <Route path="/welcome" element={<Frames />} />
              <Route
                path="/register/student"
                element={<StudentForm setLoading={setLoading} />}
              />
              <Route
                path="/register/institution"
                element={<InstituteForm setLoading={setLoading} />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Reg1 />} />

              {/* Student screens */}
              <Route path="/student/home" element={<StudentHome />} />
              <Route path="/student/notification" element={<S_Notifi />} />
              <Route path="/student/market" element={<S_Market />} />
              <Route path="/student/games" element={<S_Games />} />
              <Route path="/student/profile" element={<S_Profile />} />

              {/* Teacher screens */}
              <Route path="/teacher/home" element={<TeacherHome />} />
              <Route path="/teacher/notification" element={<Tea_Notifi />} />
              <Route path="/teacher/market" element={<Tea_Market />} />
              <Route path="/teacher/games" element={<Tea_Games />} />
              <Route path="/teacher/profile" element={<Tea_Profile />} />
              {/* Institute screens */}
              <Route path="/institute/home" element={<InstituteHome />} />
              <Route path="/institute/notification" element={<Ins_Notifi />} />
              <Route path="/institute/market" element={<Ins_Leads />} />
              <Route path="/institute/games" element={<Ins_Post />} />
              <Route path="/institute/profile" element={<Ins_Profile />} />

              {/* Hr screens */}
              <Route path="/hr/home" element={<RecruiterHome />} />
              <Route path="/hr/notification" element={<Hr_Notifi />} />
              <Route path="/hr/market" element={<Hr_Market />} />
              <Route path="/hr/games" element={<Hr_Post />} />
              <Route path="/hr/profile" element={<Hr_Profile />} />

              {/* Job seeker screens */}
              <Route path="/jobseeker/home" element={<JobSeekerHome />} />
              <Route path="/jobseeker/notification" element={<J_Notifi />} />
              <Route path="/jobseeker/market" element={<J_Market />} />
              <Route path="/jobseeker/games" element={<J_Jobs />} />
              <Route path="/jobseeker/profile" element={<J_Profile />} />
            </Routes>
          </Suspense>
        )}
        {/* <PreLoader /> */}
      </BrowserRouter>
    </>
  );
};

export default Routing;
