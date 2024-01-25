import { Link } from "react-router-dom";
import marketIcon from "../../assets/Icons/market.png";
import category from "../../assets/Category.png";
const Leads = () => {
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

        <div className="box border p-2 flex items-center w-full gap-3">
          <div className="left w-[10rem] h-[10rem] bg-gray-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="gray"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>
          <div className="right">
            <p className="font-semibold text-[#4E4E4E] text-lg">Lipin School</p>
            <p className="text-sm text-[#4E4E4E] fs12">Time: 5:30pm to 6pm</p>
            <p className="text-sm text-[#4E4E4E] fs12">
              Scholarship Up to Per Year 1 Lakh
            </p>
            <p className="text-sm text-[#4E4E4E] fs12">Per Month 10 thousand</p>
            <p className="text-sm text-[#4E4E4E] fs12"> Seats Available</p>
            <button className="text-white text-lg px-4 py-1 font-semibold rounded bg-blue-600 fs12">
              200 Applicants
            </button>
          </div>
        </div>
        <div className="box border p-2 flex items-center w-full gap-3">
          <div className="left w-[10rem] h-[10rem] bg-gray-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="gray"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>
          <div className="right">
            <p className="font-semibold text-[#4E4E4E] text-lg">Lipin School</p>
            <p className="text-sm text-[#4E4E4E] fs12">Time: 5:30pm to 6pm</p>
            <p className="text-sm text-[#4E4E4E] fs12">
              Scholarship Up to Per Year 1 Lakh
            </p>
            <p className="text-sm text-[#4E4E4E] fs12">Per Month 10 thousand</p>
            <p className="text-sm text-[#4E4E4E] fs12"> Seats Available</p>
            <button className="text-white text-lg px-4 py-1 font-semibold rounded bg-blue-600 fs12">
              200 Applicants
            </button>
          </div>
        </div>
        <div className="box border p-2 flex items-center w-full gap-3">
          <div className="left w-[10rem] h-[10rem] bg-gray-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="gray"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>
          <div className="right">
            <p className="font-semibold text-[#4E4E4E] text-lg">Lipin School</p>
            <p className="text-sm text-[#4E4E4E] fs12">Time: 5:30pm to 6pm</p>
            <p className="text-sm text-[#4E4E4E] fs12">
              Scholarship Up to Per Year 1 Lakh
            </p>
            <p className="text-sm text-[#4E4E4E] fs12">Per Month 10 thousand</p>
            <p className="text-sm text-[#4E4E4E] fs12"> Seats Available</p>
            <button className="text-white text-lg px-4 py-1 font-semibold rounded bg-blue-600 fs12">
              200 Applicants
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leads;
