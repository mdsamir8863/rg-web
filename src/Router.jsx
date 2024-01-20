import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";
// import Login from "./app/screens/startup/Login";
// import Registration from "./app/screens/startup/Registration";
import PreLoader from "./app/screens/startup/PreLoader";
import { useEffect, useState } from "react";
import Loader from "./app/components/Loader";
import { useDispatch, useSelector } from "react-redux";
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
// import Nav from "./app/components/Nav";
const Routing = () => {
  const user = useSelector((e) => e.user_reducer);
  const [preLoading, setPreLoading] = useState(true);
  const [loadingComponent, setLoading] = useState(false);
  const { loading } = useSelector((e) => e.loading_reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    if (user?.error) {
      toast.error(user?.error);
      dispatch({ type: "clear_error" });
    }
  }, [dispatch, user]);

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
        <div>
          <Toaster />
        </div>

        {loadingComponent || loading ? <Loader /> : ""}

        {preLoading ? (
          <PreLoader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to={"/home"} />} />
              <Route path="/home" element={<Frames />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Reg1 />} />
              <Route
                path="/register/student"
                element={<StudentForm setLoading={setLoading} />}
              />
              <Route
                path="/register/institution"
                element={<InstituteForm setLoading={setLoading} />}
              />
              <Route
                path="/register/teacher"
                element={<TeacherForm setLoading={setLoading} />}
              />
              <Route
                path="/register/jobSeeker"
                element={<SeekerForm setLoading={setLoading} />}
              />
              <Route
                path="/register/hr"
                element={<HrForm setLoading={setLoading} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        )}
        {/* <PreLoader /> */}
      </BrowserRouter>
    </>
  );
};

export default Routing;
