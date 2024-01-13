import React from "react";

const BgCircle = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-between flex-col">
        <div className="w-60 h-60 bg-blue-300 shadow-xl rounded-full absolute top-0 left-0 blur-3xl"></div>
        <div className="w-60 h-60 bg-blue-300 shadow-xl rounded-full absolute bottom-0 right-0 blur-3xl"></div>
      </div>
    </>
  );
};

export default BgCircle;
