import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplyForJob } from "../../store/action";

const JobsOpenings = ({ data }) => {
  const { user } = useSelector((e) => e.user_reducer);
  const { title, posterCompany, posterName, location, applied, description } =
    data;
  const [isApplied, setIsApplied] = useState(true);
const dispatch = useDispatch()
  useEffect(() => {
    setIsApplied(applied.includes(user._id));
  }, []);

  const handleClick = () => {
    dispatch(ApplyForJob(data._id,setIsApplied))
  };
  console.log(data);
  return (
    <>
      <div className="flex flex-col items-start p-5 m-3 shadow-xl rounded-md gap-3 border">
        {/* <div className="border"></div> */}
        <div className="flex gap-3">
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span class="font-medium text-gray-600 dark:text-gray-300">
              {posterCompany?.slice(0, 2) || "N/A"}
            </span>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-black font-semibold text-xl">{title}</p>
            <p className="">{posterCompany}</p>
            <p className="text-[0.6rem] text-gray-700">{posterName}</p>
            <p className="text-[#3C3C43] text-[0.7rem]">
              {data.location || "No location added"}
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-3 f items-start">
            <p className="text-[#3C3C43] text-sm  ">{description}</p>
            {isApplied ? (
              <button className="bg-gradient-to-r w-44 bg-pink-500 from-purple-600 text-white rounded px-4 opacity-45">
                Applied
              </button>
            ) : (
              <button
                onClick={handleClick}
                className="bg-gradient-to-r w-44 bg-pink-500 from-purple-600 text-white rounded px-4"
              >
                Apply
              </button>
            )}
          </div>
        </div>
      </div>
      {/* <div className="border"></div> */}
    </>
  );
};

export default JobsOpenings;
