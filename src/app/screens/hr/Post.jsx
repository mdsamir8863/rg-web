import React, { useState } from "react";

const Post = () => {

  const [jobData,setJobData] = useState([])



  return (
    <section className="bg-white :bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 :text-white">
          Post a new Job
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 :text-gray-400 sm:text-xl">
          add a new job , job seekers will apply to job post .
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 :text-gray-300"
            >
              Job Title
            </label>
            <input
              type="text"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500 :shadow-sm-light"
              placeholder=""
              required
            />
          </div>
        
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 :text-gray-400"
            >
              job description
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
          >
            post 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Post;
