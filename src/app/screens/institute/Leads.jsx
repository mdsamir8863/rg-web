import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchALlLeads } from "../../../store/action";

const Leads = () => {
  const [interestedData, setInterestedData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchALlLeads(setInterestedData));
  }, []);

  return (
    <>
      <section className="w-full flex items-center flex-col ">
        <div className="flex w-3/4 my-10 font-bold text-2xl">Leads</div>

        <div className="relative w-5/6  overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm  text-left rtl:text-right text-gray-500 .text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-green-100 .text-white .bg-gray-800">
              Student interested
              <p className="mt-1 text-sm font-normal text-gray-500 .text-gray-400">
                Student who are interested are added here .
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 .bg-gray-700 .text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Student name
                </th>

                <th scope="col" className="px-6 py-3">
                  class
                </th>
                <th scope="col" className="px-6 py-3">
                  Number /Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  board
                </th>
              </tr>
            </thead>
            <tbody>
              {interestedData &&
                interestedData.map((e) => (
                  <tr
                    key={e._id}
                    className="bg-white border-b .bg-gray-800 .border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
                    >
                      {e?.name}
                    </th>

                    <td className="px-6 py-4">{e?.user_details?.class_name}</td>
                    <td className="px-6 py-4">
                      {e?.user_details?.s_number}/ {e?.user_details?.p_number}
                    </td>
                    <td className="px-6 py-4">{e?.email}</td>
                    <td className="px-6 py-4">
                      {e?.user_details?.address?.city}
                    </td>
                    <td className="px-6 py-4">{e?.user_details?.board}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Leads;
