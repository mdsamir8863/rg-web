import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { GetJobDetails } from "../../../store/action";

const Response = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [jobData, setJobData] = useState({});

  useEffect(() => {
    dispatch(GetJobDetails(id, setJobData));
  }, []);
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex w-full p-5 font-bold text-2xl">
        Response : {jobData?.title}
      </div>

      <div className="relative w-5/6 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Skills
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Education
              </th>

              <th scope="col" className="px-6 py-3">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {jobData?.applied &&
              jobData?.applied.map((e) => (
                <tr
                  key={e._id}
                  className="bg-white border-b :bg-gray-800 :border-gray-700 hover:bg-gray-50 :hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <label for="checkbox-table-search-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap :text-white"
                  >
                    <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span class="font-medium text-gray-600 dark:text-gray-300">
                        {e?.name?.slice(0, 2) || "N/A"}
                      </span>
                    </div>
                    <div className="ps-3">
                      <div className="text-base font-semibold">{e?.name}</div>
                      <div className="font-normal text-gray-500">
                        {e?.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {e?.user_details?.skills || "Skills not added by seeker"}
                  </td>
                  <td className="px-6 py-4">
                    {e?.user_details?.address?.city}
                  </td>
                  <td className="px-6 py-4">
                    {e?.user_details?.board} & {e?.user_details?.class_name}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 :text-blue-500 hover:underline"
                    >
                      {e?.user_details?.s_number} & {e?.user_details?.p_number}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Response;
