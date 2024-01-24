import bgTop from "../../assets/bg-designs/homBgTop.png";
// import BookBg from "../../assets/bg-designs/course-bg.png";
import Lady from "../../assets/lady.png";
import Jobs from "../../assets/Icons/Jobs.png";
import Category from "../../assets/Category.png";
import admission from "../../assets/Icons/addmision.png";
import Community from "../../assets/Icons/Community.png";
import { Link } from "react-router-dom";

const RecruiterHome = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full scroll-smooth duration-300 sm:mb-0">
        {/* top section */}
        <div
          className="bg-cover bg-no-repeat w-full bg-center flex items-center justify-evenly relative"
          //   style={{ background: "linear-gradient( #8B5CF6, #F3F4F6" }}
          style={{ backgroundImage: `url(${bgTop})` }}
        >
          <div className="flex flex-col items-start  text-white gap-1">
            <div className="bg-purple-200 rounded-full h-16 w-16 text-center flex items-center justify-center">
              <p className="bg-green-100 font-bold text-2xl text-purple-800 w-14 h-14 rounded-full text-center flex items-center justify-center">
                D
              </p>
            </div>
            <p className="">Welcome</p>
            <h2 className="font-bold text-xl">Deepali Vijayan </h2>
            <p>class 6th (CBSE)</p>
          </div>
          <img className=" sm:-mr-0 h-[15rem]" src={Lady} alt="" />
        </div>
        {/* Recent Updates */}

        <div className="p-2 pt-0 mb-10 w-full sm:w-2/3 flex flex-col h-[18rem] justify-evenly">
          <p className="flex items-center gap-2 text-black ">
            <img src={Category} alt="" /> Recent Updates
          </p>

          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-evenly w-full gap-4">
              <Link to={"##"}>
                <div className="bg-gradient-to-br relative from-purple-800 to-blue-700 rounded w-[6rem] sm:w-[6.6rem] h-[6rem] sm:h-[6.6rem] py-5  flex flex-col items-center justify-center">
                  <div className="absolute -top-2 -left-2 bg-blue-600 font-bold text-sm text-white px-2 rounded-full shadow-lg">
                    122
                  </div>
                  <img src={admission} alt="" />

                  <p className="text-center text-white text-sm mt-1">
                    New Applicants
                  </p>
                </div>
              </Link>
              <Link to={"##"}>
                <div className="bg-gradient-to-br relative from-purple-800 to-blue-700 rounded  w-[6rem] sm:w-[6.6rem] h-[6rem]  sm:h-[6.6rem] py-5  flex flex-col items-center justify-center">
                  <div className="absolute -top-2 -left-2 bg-blue-600 font-bold text-sm text-white px-2 rounded-full shadow-lg">
                    58
                  </div>
                  <img src={Jobs} alt="" />

                  <p className="text-center text-white text-sm mt-1">
                    Current Active Jobs
                  </p>
                </div>
              </Link>
              <Link to={"##"}>
                <div className="bg-gradient-to-br from-purple-800 to-blue-700 rounded  w-[6rem] sm:w-[6.6rem] h-[6rem]  sm:h-[6.6rem] py-5  flex flex-col items-center justify-center">
                  <img src={Community} alt="" />

                  <p className="text-center text-white text-sm mt-1">
                    Post new Jobs
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruiterHome;
