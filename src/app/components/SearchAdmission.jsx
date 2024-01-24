import { Link } from "react-router-dom";
import admissionIcon from "../assets/Icons/addmision.png";

const SearchAdmission = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col  sm:my-5">
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
          <div className="flex flex-col m-3 rounded gap-5 border bg-gray-100 p-5">
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
                className="w-5 h-5  text-gray-500 cursor-pointer absolute left-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197M9.5 16a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
                />
              </svg>
            </div>
            {/* school list */}
            <div className="box border p-2 flex items-center w-full gap-3">
              <div className="left w-[9rem] h-[9rem] bg-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="gray"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </div>
              <div className="right">
                <p className="font-semibold text-[#4E4E4E] text-lg">
                  Lipin School
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Time: 5:30pm to 6pm
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Scholarship Up to Per Year 1 Lakh
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Per Month 10 thousand
                </p>
                <p className="text-sm text-[#4E4E4E] fs12"> Seats Available</p>
                <button className="text-white font-bold px-4 rounded text-sm bg-gradient-to-br bg-purple-600 from-pink-400 fs12">
                  Apply
                </button>
              </div>
            </div>
            <div className="box border p-2 flex items-center w-full gap-3">
              <div className="left w-[9rem] h-[9rem] bg-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="gray"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </div>
              <div className="right">
                <p className="font-semibold text-[#4E4E4E] text-lg">
                  Lipin School
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Time: 5:30pm to 6pm
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Scholarship Up to Per Year 1 Lakh
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Per Month 10 thousand
                </p>
                <p className="text-sm text-[#4E4E4E] fs12"> Seats Available</p>
                <button className="text-white font-bold px-4 rounded text-sm bg-gradient-to-br bg-purple-600 from-pink-400 fs12">
                  Apply
                </button>
              </div>
            </div>
            <div className="box border p-2 flex items-center w-full gap-3">
              <div className="left w-[9rem] h-[9rem] bg-gray-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="gray"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                  />
                </svg>
              </div>
              <div className="right">
                <p className="font-semibold text-[#4E4E4E] text-lg">
                  Lupin School
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Time: 5:30pm to 6pm
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Scholarship Up to Per Year 1 Lakh
                </p>
                <p className="text-sm text-[#4E4E4E] fs12">
                  Per Month 10 thousand
                </p>
                <p className="text-sm text-[#4E4E4E] fs12"> Seats Available</p>
                <button className="text-white font-bold px-4 rounded text-sm bg-gradient-to-br bg-purple-600 from-pink-400 fs12">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchAdmission;
