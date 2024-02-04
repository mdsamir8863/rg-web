/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseScreenCard from "../../components/CourseScreenCard";
import { fetchCourses, fetchSearchedCourse } from "../../../store/action";

const Courses = ({ setPopUpforElCB }) => {
  const { courses } = useSelector((e) => e.studentCoursesReducers);
  const [allCourses, setAllCourses] = useState(courses);
  // const [searchTyped,setSearchTyped] = useState(false)
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (r) => {
    r.preventDefault();
    console.log(searchInput);
    dispatch(fetchSearchedCourse(setAllCourses, searchInput));
  };

  useEffect(() => {
    if (!courses) {
      setPopUpforElCB();
      dispatch(fetchCourses());
    } else {
      setPopUpforElCB();
      setAllCourses(courses);
    }
  }, [dispatch, courses]);

  return (
    <section className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-4/5 mt-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only .text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 .text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            placeholder="Search course name, title"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 .bg-blue-600 .hover:bg-blue-700 .focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-wrap justify-center">
        {allCourses &&
          Object.keys(allCourses).map((e, i) => (
            <CourseScreenCard
              key={i}
              data={allCourses[e]}
              redirect={"course"}
            />
          ))}
      </div>
    </section>
  );
};

export default Courses;
