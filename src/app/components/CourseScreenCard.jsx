import React from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CourseScreenCard = ({ data,redirect }) => {
  const { sub, _id, thumbnail, description } = data[0];


  return (
    <div className="w-80  m-5 bg-white border   border-gray-200 rounded-lg shadow-xl :bg-gray-800 :border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full aspect-video object-cover"
          src={thumbnail}
          alt=""
        />
      </a>
      <div className="p-5 justify-between flex h-44 flex-col marker:">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 :text-white">
            {sub?.slice(0, 20)}...
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 text-sm :text-gray-400">
          {description?.slice(0, 44)} ...
        </p>
        <Link
          to={`/${redirect}/${_id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
        >
          Explore course
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const cm = React.memo(CourseScreenCard);

export default cm;
