import jobPost from "../../assets/Icons/postJob.png";
import kidImage1 from "../../assets/postCourseIKid.png";
import kidImage2 from "../../assets/GroupGroupe.png";
const Post = () => {
  return (
    <>
      <div className="flex flex-col gap-5 h-full w-[98%] mx-auto my-3">
        <div className=" flex flex-col gap-3">
          <p className="flex items-center gap-1">
            <img className="h-5" src={jobPost} alt="" />
            <span className="text-red-400 font-bold">Post</span>
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly rounded bg-gradient-to-br sm:w-2/3 mx-auto from-red-600 to-purple-600 text-white">
          <div className="flex flex-col items-start pl-2 gap-2 sm:text-xl">
            <p>Post New Course Online </p>
            <button className="bg-white text-black rounded px-2 py-1 hover:bg-gray-200 text-sm">
              Post Courses
            </button>
          </div>
          <img src={kidImage1} alt="" />
        </div>
        <div className="flex w-full items-center justify-evenly rounded bg-gradient-to-br sm:w-2/3 mx-auto from-green-600 to-purple-600 text-white">
          <div className="flex flex-col items-start pl-2 gap-2 sm:text-xl">
            <p>Post New Admissions </p>
            <button className="bg-white text-black rounded px-2 py-1 hover:bg-gray-200 text-sm">
              Post Admissions
            </button>
          </div>
          <img src={kidImage2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Post;
