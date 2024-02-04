



const JobsOpenings = () => {
  return (
    <>

      <div className="flex flex-col items-start p-2 gap-3 border">
      {/* <div className="border"></div> */}
        <div className="flex gap-3">
          <img
            className="w-10 h-10 border overflow-hidden rounded-full"
            src=""
            alt=""
          />
          <div className="flex flex-col items-start">
            <p className="text-black font-semibold text-xl">UX Designer</p>
            <p className="">Amazon</p>
            <p className="text-[#3C3C43] text-sm">Seattle, US (Remote)</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-3 flex-col items-start">
            <p className="text-[#3C3C43] text-sm w-[10rem] ">
              Required 2 years Experience
            </p>
            <button className="bg-gradient-to-r bg-pink-500 from-purple-600 text-white rounded px-4">
              Apply
            </button>
          </div>
          <p className="text-[#3C3C43] text-sm">Package: 22 LPA</p>
        </div>
      </div>
      {/* <div className="border"></div> */}
    </>
  );
};

export default JobsOpenings;