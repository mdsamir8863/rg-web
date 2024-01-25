import { Link } from "react-router-dom";
import admissionIcon from "../assets/Icons/addmision.png";
import SchoolList from "./SchoolList";

const SearchAdmission = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col sm:my-5 mb-16 md:mb-5">
          <Link className="sm:hidden py-1" to={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <p className="flex items-center text-white text-sm py-2 pl-5 gap-3 bg-gradient-to-r to-blue-500 from-blue-800">
            <img className="h-6" src={admissionIcon} alt="" /> Admission
          </p>
          <div className="flex flex-col md:m-3 rounded gap-5 border bg-gray-100 p-5">
            <p>Search Your desire school/college/university</p>
            <div className="flex items-center relative ">
              <input
                type="text"
                placeholder="Search Your Courses Here.."
                className="border border-gray-300  rounded-md focus:outline-none focus:ring  px-8 py-2 font-bold text-sm sm:w-2/3"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4  text-gray-500 cursor-pointer absolute left-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197M9.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
                />
              </svg>
            </div>
            {/* school list */}
            

            <SchoolList />
            <SchoolList />
            <SchoolList />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchAdmission;
