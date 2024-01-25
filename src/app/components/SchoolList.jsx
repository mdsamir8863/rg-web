const SchoolList = () => {
  return (
    <>
      <div className="box border p-2 flex items-center w-full gap-3">
        <div className="left w-[9rem] h-[9rem] bg-gray-300 flex items-center justify-center">
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
          <button className="text-white font-bold px-4 rounded text-sm bg-gradient-to-br bg-purple-600 from-pink-400 fs12">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default SchoolList;
