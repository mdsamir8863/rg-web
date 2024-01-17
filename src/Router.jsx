import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import Login from "./app/screens/startup/Login";
// import Registration from "./app/screens/startup/Registration";
import PreLoader from "./app/screens/startup/PreLoader";
import { useEffect, useState } from "react";
import Frames from "./app/screens/startup/Frames";
import Login from "./app/screens/startup/Login";
import Reg1 from "./app/screens/registrations/Reg1";
import StudentForm from "./app/screens/registrations/StudentForm";
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
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Frames />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/registration" element={<Registration />} /> */}

            {/* testing comp */}
            {/* <Route path="/register" element={<Registration />} /> */}
            <Route path="/register" element={<Reg1 />} />
            <Route path="/register/student" element={<StudentForm />} />
          </Routes>
        )}
        {/* <PreLoader /> */}
      </BrowserRouter>
    </>
  );
};

export default Routing;
