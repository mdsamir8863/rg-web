import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./app/screens/startup/Login";
import Registration from "./app/screens/startup/Registration";
import BgCircle from "./app/components/BgCircle";
const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          {/* testing comp */}
          <Route path="/home" element={<BgCircle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
