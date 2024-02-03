import { useState } from "react";
import { useDispatch } from "react-redux";
import { findStudentFromId } from "../../store/action";

const TeacherLeadsCard = ({ e }) => {
  const [stdData, setStdData] = useState({});
  const dispatch = useDispatch();

  const moreInfoHandler = () => {
    if (stdData?.email) {
      setStdData({});
    } else {
      dispatch(findStudentFromId(e.id, setStdData));
    }
  };

  return (
    <>
      <tr className="bg-white border-b .bg-gray-800 .border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
        >
          {e.name}
        </th>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
        >
          {e.city}
        </th>
        <th
          onClick={moreInfoHandler}
          scope="row"
          className="px-6 hover:gap-5 duration-200 ease-in transition-all cursor-pointer flex gap-2 items-center py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
        >
          More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </th>
      </tr>
      {stdData?.email ? (
        <>
          <div
            data-popover
            id="popover-user-profile"
            role="tooltip"
            className=" z-10   w-full text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  :text-gray-400 :bg-gray-800 :border-gray-600"
          >
            <div className="p-3">
              <div className="flex items-center justify-between mb-2">
                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    class="absolute w-12 h-12 text-gray-400 -left-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  
                </div>
              </div>
              <p className="text-base font-semibold leading-none text-gray-900 :text-white">
                <a href="#">{stdData?.name}</a>
              </p>
              <p className="mb-3 text-sm font-normal">
                <a href="#" className="hover:underline">
                  {stdData?.email}
                </a>
              </p>
              <p className="mb-4 text-sm">
                {stdData?.created_at}
                <a
                  href="#"
                  className="text-blue-600 :text-blue-500 hover:underline"
                >
                 {stdData?.user_details?.address?.city}
                </a>
                .
              </p>
              <ul className="flex text-sm">
                <li className="me-2">
                  <a href="#" className="hover:underline">
                   
                    <span>{stdData?.user_details?.s_number}</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <span className="e">
                    {stdData?.user_details?.s_number}
                     </span>
                  </a>
                </li>
              </ul>
              <ul className="flex text-sm">
                <li className="me-2">
                  <a href="#" className="hover:underline">
                   
                    <span>{stdData?.user_details?.board}</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <span className="e">
                    {stdData?.user_details?.class_name}
                     </span>
                  </a>
                </li>
              </ul>
            </div>
            <div data-popper-arrow></div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TeacherLeadsCard;
