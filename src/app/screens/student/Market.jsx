/* eslint-disable react/prop-types */
import market from "../../assets/Icons/market.png";
import E_learning from "../../assets/Icons/e-learning.png";
import admission from "../../assets/Icons/addmision.png";
import Community from "../../assets/Icons/Community.png";
import jobs from "../../assets/Icons/Jobs.png";
import games from "../../assets/Icons/games.png";
import newsUpdate from "../../assets/Icons/newsUpdate.png";
import kid from "../../assets/kid.png";
import Category from "../../assets/Category.png";
import mathCourse from '../../assets/mathCourse.jpg'
import graphicCourse from '../../assets/graphicsCourse.jpg'
import { Link } from "react-router-dom";

const Market = ({setPopUpforEl}) => {
  return (
    <>
      <div className="flex flex-col gap-5 h-full w-[98%] mx-auto my-3">
        <div className=" flex flex-col gap-3">
          <p className="flex items-center gap-1">
            <img className="h-5" src={market} alt="" />
            <span className="text-red-400 font-bold">Market Place</span>
          </p>

          {/* <div className="flex items-center relative ">
            <input
              type="text"
              placeholder="Search Your Courses Here.."
              className="border border-gray-300  rounded-md focus:outline-none focus:ring focus:border-blue-300 px-8 py-2 font-bold text-sm w-2/3"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5  text-gray-500 cursor-pointer absolute left-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197M9.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
              />
            </svg>
          </div> */}
        </div>

        <div className="bg-gradient-to-br from-blue-800 to-purple-600 rounded pt-5 flex justify-evenly w-full items-center">
          <div className="flex flex-col gap-2 pl-1">
            <p className="font-bold text-xl text-white">NEET/ JEE </p>
            <p className=" text-white">Class 7 planned Strategic Course</p>
            <button className="rounded bg-yellow-400 text-sm w-fit p-1 px-2 text-black font-semibold">
              Book Now
            </button>
          </div>
          <img src={kid} alt="" />
        </div>

        <div className="p-5 pt-0 mb-10">
          <p className="flex items-center gap-2 my-5 text-black ">
            <img src={Category} alt="" /> Category
          </p>

          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-evenly w-full gap-4">
              <div onClick={()=>setPopUpforEl(e=>!e)} className="bg-gradient-to-br cursor-pointer from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img src={E_learning} alt="" />

                <p className="text-center text-white text-sm mt-1">E Learning</p>
              </div>
              <Link to={"/admission"} className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img src={admission} alt="" />

                <p className="text-center text-white text-sm mt-1">Admission</p>
              </Link>
              <div className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img src={jobs} alt="" />

                <p className="text-center text-white text-sm mt-1">Jobs</p>
              </div>
            </div>
            <div className="flex items-center justify-evenly w-full gap-4">
              <Link to="/coming/soon" className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img src={games} alt="" />

                <p className="text-center text-white text-sm mt-1">Games</p>
              </Link>
              <Link to="/coming/soon"  className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img src={Community} alt="" />

                <p className="text-center text-white text-sm mt-1">Community</p>
              </Link>
              <Link to="/coming/soon" className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img src={newsUpdate} alt="" />

                <p className="text-center text-white text-sm mt-1">News Update</p>
              </Link>
            </div>
            <div className="flex gap-2 w-full">
              <Link to="/s/courses" className="flex-1 border bg-pink-100 font-bold rounded">
                <p className="text-center text-red-900 text-sm sm:text-lg p-3">Learn Mathematics </p>
                <img className="rounded w-full" src={mathCourse} alt="" />
              </Link>
              <Link to="/s/courses" className="flex-1 border bg-pink-100 font-bold rounded">
                <p className="text-center text-red-900 text-sm sm:text-lg p-3">Learn Graphic Design</p>
                <img className="rounded w-full" src={graphicCourse} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
