import JobsOpenings from "../../components/JobsOpenings";

const Jobs = () => {
  return (
    <>
      <div className="flex flex-col p-3 gap-4 h-full w-full mb-12">
        <h2 className="font-bold text-black text-2xl text-start w-full items-start">
          Recent Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <JobsOpenings />
          <JobsOpenings />
          <JobsOpenings />
          <JobsOpenings />
          <JobsOpenings />
          <JobsOpenings />
          <JobsOpenings />
        </div>
      </div>
    </>
  );
};

export default Jobs;
