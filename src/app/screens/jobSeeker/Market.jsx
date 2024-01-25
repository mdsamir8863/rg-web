import market from "../../assets/Icons/market.png";
import E_learning from "../../assets/Icons/e-learning.png";
import admission from "../../assets/Icons/addmision.png";
import Community from "../../assets/Icons/Community.png";
import newsUpdate from "../../assets/Icons/newsUpdate.png";
import jobs from "../../assets/Icons/Jobs.png";
import games from "../../assets/Icons/games.png";
import kid from "../../assets/lady.png";
import Category from "../../assets/Category.png";
import mathCourse from "../../assets/mathCourse.jpg";
import graphicCourse from "../../assets/graphicsCourse.jpg";

const Market = () => {
  return (
    <>
      <div className="flex flex-col gap-5 h-full w-[95%] mx-auto my-3">
        <div className=" flex flex-col gap-3">
          <p className="flex items-center gap-1">
            <img className="h-5" src={market} alt="" />
            <span className="text-red-400 font-bold">Market Place</span>
          </p>

          <div className="flex items-center relative ">
            <input
              type="text"
              placeholder="Search Your Courses Here.."
              className="border border-gray-300  rounded-md focus:outline-none focus:ring focus:border-blue-300 px-8 py-2 font-bold text-sm w-full sm:w-2/3"
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
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-800 to-purple-600 rounded  flex justify-evenly w-full items-center">
          <div className="flex flex-col gap-3 pl-3">
            <p className="font-bold text-xl text-white">Grow Professionally </p>
            <p className=" text-white">
              Learn New Skills and grow your earnings
            </p>
            <button className="rounded bg-yellow-400 text-sm w-fit p-1 px-2 text-black font-semibold">
              Explore Courses
            </button>
          </div>
          <img className="h-[15rem] sm:h-full" src={kid} alt="" />
        </div>

        <div className="p-5 pt-0">
          <p className="flex items-center gap-2 my-5 text-black ">
            <img className="h-7" src={Category} alt="" /> Recommended Courses
          </p>

          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-evenly w-full gap-4">
              <div className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img className="h-8" src={E_learning} alt="" />

                <p className="text-center text-white text-sm mt-1">
                  E Learning
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img className="h-8" src={admission} alt="" />

                <p className="text-center text-white text-sm mt-1">Admission</p>
              </div>
              <div className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6.5rem] h-[5.5rem]  flex flex-col items-center justify-center">
                <img className="h-8" src={jobs} alt="" />

                <p className="text-center text-white text-sm mt-1">Jobs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-16 gap-3 sm:w-2/3 mx-auto bg-gray-100">
          <p className="flex items-center gap-2 rounded bg-gradient-to-tr bg-yellow-500 p-3 text-white font-bold text-lg from-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            News Update
          </p>
          <div className="">
            <div className="flex gap-2 border-black p-1 border-[1px]">
              <div className="w-16 h-12 bg-black"></div>
              <div className="w-full flex flex-col gap-2 justify-center ">
                <p className="h-5 w-full bg-gray-500"></p>
                <p className="h-5 w-1/2 bg-gray-400"></p>
              </div>
            </div>
            {/* <div className="border border-black"></div> */}
            <div className="flex gap-2 border-black p-1 border-[1px]">
              <div className="w-16 h-12 bg-black"></div>
              <div className="w-full flex flex-col gap-2 justify-center ">
                <p className="h-5 w-full bg-gray-500"></p>
                <p className="h-5 w-1/2 bg-gray-400"></p>
              </div>
            </div>
            {/* <div className="border border-black"></div> */}
            <div className="flex gap-2 border-black p-1 border-[1px]">
              <div className="w-16 h-12 bg-black"></div>
              <div className="w-full flex flex-col gap-2 justify-center ">
                <p className="h-5 w-full bg-gray-500"></p>
                <p className="h-5 w-1/2 bg-gray-400"></p>
              </div>
            </div>
            {/* <div className="border border-black"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
