import { Link } from "react-router-dom";
import companyIcon from "../../assets/Icons/amazon.png";
import marketIcon from "../../assets/Icons/postJob.png";
import category from "../../assets/Category.png";
const Post = () => {
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
          <img src={marketIcon} alt="" />
          Job Application Responses
        </p>
        <p className="flex items-center justify-start gap-2 my-10 pl-3">
          <img className="h-6" src={category} alt="" />
          Recent Posts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3">
          <div className="flex items-start justify-start gap-2 border py-5 px-2">
            <img
              className="border rounded-full h-12 w-12"
              src={companyIcon}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">UX Designer</p>
              <p className="fs12 text-black font-semibold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 text-black font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                155 Responses
              </button>
              
            </div>
          </div>
          <div className="flex items-start justify-start gap-2 border py-5 px-2">
            <img
              className="border rounded-full h-12 w-12"
              src={companyIcon}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">UX Designer</p>
              <p className="fs12 text-black font-semibold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 text-black font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                155 Responses
              </button>
              
            </div>
          </div>
          <div className="flex items-start justify-start gap-2 border py-5 px-2">
            <img
              className="border rounded-full h-12 w-12"
              src={companyIcon}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">UX Designer</p>
              <p className="fs12 text-black font-semibold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 text-black font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                155 Responses
              </button>
              
            </div>
          </div>
          <div className="flex items-start justify-start gap-2 border py-5 px-2">
            <img
              className="border rounded-full h-12 w-12"
              src={companyIcon}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">UX Designer</p>
              <p className="fs12 text-black font-semibold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 text-black font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                155 Responses
              </button>
              
            </div>
          </div>
          <div className="flex items-start justify-start gap-2 border py-5 px-2">
            <img
              className="border rounded-full h-12 w-12"
              src={companyIcon}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">UX Designer</p>
              <p className="fs12 text-black font-semibold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 text-black font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                155 Responses
              </button>
              
            </div>
          </div>
          <div className="flex items-start justify-start gap-2 border py-5 px-2">
            <img
              className="border rounded-full h-12 w-12"
              src={companyIcon}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">UX Designer</p>
              <p className="fs12 text-black font-semibold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 text-black font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                155 Responses
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
