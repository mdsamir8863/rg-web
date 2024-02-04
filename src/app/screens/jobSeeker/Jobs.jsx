import { useEffect, useState } from "react";
import JobsOpenings from "../../components/JobsOpenings.jsx";
import { useDispatch } from "react-redux";
import { getJobsNearMe } from "../../../store/action.js";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsNearMe(setJobs));
  }, []);

  return (
    <>
      <div className="flex flex-col p-3 gap-4 h-full w-full mb-12">
        <h2 className="font-bold text-black text-2xl text-start w-full items-start">
          Recent Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs && jobs.map((e) => <JobsOpenings />)}
        </div>
      </div>
    </>
  );
};

export default Jobs;
