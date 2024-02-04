import { Link } from "react-router-dom";

import category from "../../assets/Category.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMyCreatedJob } from "../../../store/action";

const Post = () => {
  const [postedData, setPostedData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCreatedJob(setPostedData));
  }, []);

  return (
    <>
      <div className="flex flex-col bg-slate-50 my-5 mb-16">
        <p className="flex items-center justify-start gap-2 font-bold uppercase pl-2">
          <Link className="" to={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <img
            src="https://raw.githubusercontent.com/mdsamir8863/rg-web/fd5913a861a1a2cdbc93d1dbdc576551324f14fa/src/app/assets/Icons/market.png?token=GHSAT0AAAAAACNWX6SRQUL5CEMTC2TAYBRWZN6NNNQ"
            alt=""
          />
          Job Application Responses
        </p>
        <p className="flex items-center justify-start gap-2 my-10 pl-3">
          <img className="h-6" src={category} alt="" />
          Recent Posts
        </p>

        <div className="flex w-full  gap-5 p-5  flex-wrap">
          {postedData &&
            postedData.map((e) => (
              <div
                key={e._id}
                className="flex items-start w-3/4 justify-start gap-2 border py-5 px-2"
              >
                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                   {e?.posterCompany.slice(0,2)}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{e?.title}</p>
                  <p className="fs12 text-black font-semibold">
                    {e?.posterCompany}
                  </p>
                  <p className="fs12 text-[#3C3C43]">{e?.location}</p>
                  <p className="fs12 text-gray-600 font-bold">{e?.description}</p>
                  <p className="fs12 text-black f">{e?.created_at}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                    {e?.applied.length} Responses
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Post;
