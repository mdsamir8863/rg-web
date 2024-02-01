/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ElearningPop = ({ setPopUpforEl }) => {
  return (
    <section className="w-full flex  h-screen fixed top-0 z-50">
      <div className="flex w-full relative justify-center items-center h-full">
        <div className="absolute w-full h-full bg-black opacity-55 z-10"></div>
        <div
          onClick={() => setPopUpforEl((e) => !e)}
          className="flex absolute top-10 cursor-pointer phone:right-2 phone:top-2 right-10 z-50 bg-red-100 px-5 py-2 rounded-3xl text-red-700 "
        >
          cancel
        </div>
        <div className="flex z-20 phone:flex-col w-full gap-10 h-full justify-center items-center">
          <Link to={`/s/library`} className="flex cursor-pointer  items-center text-center w-44 justify-center bg-purple-200 rounded-lg p-5 text-black flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <span>Study materials and Guide</span>
          </Link>
          <Link to="/s/courses" className="flex items-center w-44 cursor-pointer text-center justify-center bg-blue-200 rounded-lg p-5 text-black flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <span>Courses and others</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ElearningPop;
