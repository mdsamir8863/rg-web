import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Login from "./app/screens/startup/Login";
// import Registration from "./app/screens/startup/Registration";
import PreLoader from "./app/screens/startup/PreLoader";
import { useEffect, useState } from "react";
import Loader from "./app/components/Loader";
const Frames = lazy(() => import("./app/screens/startup/Frames"));
const Login = lazy(() => import("./app/screens/startup/Login"));
const Reg1 = lazy(() => import("./app/screens/registrations/Reg1"));
const InstituteForm = lazy(() => import("./app/screens/registrations/InstituteForm"));
const StudentForm = lazy(() =>
  import("./app/screens/registrations/StudentForm")
);
const NotFound = lazy(() => import("./app/screens/404/NotFound"));
// import Nav from "./app/components/Nav";
const Routing = () => {
  const [preLoading, setPreLoading] = useState(true);

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
        {preLoading ? (
          <PreLoader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to={"/home"} />} />
              <Route path="/home" element={<Frames />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/registration" element={<Registration />} /> */}

              {/* testing comp */}
              {/* <Route path="/register" element={<Registration />} /> */}
              <Route path="/register" element={<Reg1 />} />
              <Route path="/register/student" element={<StudentForm />} />
              <Route path="/register/institution" element={<InstituteForm />} />
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
