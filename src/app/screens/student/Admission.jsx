import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllInst, fetchSearchInst } from "../../../store/action";
import AdmissionScreenCard from "../../components/AdmissionScreenCard";

const Admission = () => {
  const dispatch = useDispatch();
  const [admissionData, setAdmissionData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchAllInst(setAdmissionData));
  }, []);

  const handleSubmit = (r) => {
    r.preventDefault();
    
    dispatch(fetchSearchInst(setAdmissionData, searchInput));
  };
  return (
    <>
      <section className="flex flex-col phone:mb-20 items-center">
        <div className="flex p-5 w-full gap-5">
          <span>Institute Near You</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
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
              placeholder="Search  institute name, city , pincode .."
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

        <div className="flex flex-wrap w-3/4 justify-center">
          {admissionData &&
            admissionData.map((e, i) => (
              <AdmissionScreenCard data={e} key={i} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Admission;
