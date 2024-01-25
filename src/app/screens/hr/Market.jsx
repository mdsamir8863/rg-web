import { Link } from "react-router-dom";
import companyIcon from "../../assets/Icons/amazon.png";
import marketIcon from "../../assets/Icons/market.png";
import category from "../../assets/Category.png";

const Market = () => {
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
          MARKET PLACE
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
              <p className="font-semibold ">UX Designer</p>
              <p className="fs12 text-black font-bold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                Posted Last week
              </button>
              <button className=" w-fit flex items-center justify-center px-5 border text-blue-600 border-blue-600 py-1 fs12 text-white rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
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
              <p className="font-semibold ">UX Designer</p>
              <p className="fs12 text-black font-bold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                Posted Last week
              </button>
              <button className=" w-fit flex items-center justify-center px-5 border text-blue-600 border-blue-600 py-1 fs12 text-white rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
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
              <p className="font-semibold ">UX Designer</p>
              <p className="fs12 text-black font-bold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                Posted Last week
              </button>
              <button className=" w-fit flex items-center justify-center px-5 border text-blue-600 border-blue-600 py-1 fs12 text-white rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
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
              <p className="font-semibold ">UX Designer</p>
              <p className="fs12 text-black font-bold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                Posted Last week
              </button>
              <button className=" w-fit flex items-center justify-center px-5 border text-blue-600 border-blue-600 py-1 fs12 text-white rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
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
              <p className="font-semibold ">UX Designer</p>
              <p className="fs12 text-black font-bold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                Posted Last week
              </button>
              <button className=" w-fit flex items-center justify-center px-5 border text-blue-600 border-blue-600 py-1 fs12 text-white rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
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
              <p className="font-semibold ">UX Designer</p>
              <p className="fs12 text-black font-bold">Amazon</p>
              <p className="fs12 text-[#3C3C43]">Seattle, US (Remote)</p>
              <p className="fs12 font-bold">Posted 9h ago</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-2 bg-blue-600 py-1 fs12 text-white rounded">
                Posted Last week
              </button>
              <button className=" w-fit flex items-center justify-center px-5 border text-blue-600 border-blue-600 py-1 fs12 text-white rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
