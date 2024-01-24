import bgTop from "../../assets/bg-designs/homBgTop.png";
// import BookBg from "../../assets/bg-designs/course-bg.png";
import Course_Enrolments from "../../assets/Icons/Course-Enrolments.png";
import newCourse from "../../assets/Icons/newCourse.png";
import Category from "../../assets/Category.png";
import admission from "../../assets/Icons/addmision.png";
import Community from "../../assets/Icons/Community.png";
import userAvatart from "../../assets/avatars/avatar1.png";

const InstituteHome = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full scroll-smooth duration-300 mb-24 sm:mb-0">
        {/* top section */}
        <div
          className="bg-cover bg-no-repeat w-full py-5 bg-center flex items-center justify-evenly relative"
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
            <h2 className="font-bold text-xl">School Name </h2>
            <p>Address</p>
          </div>
          <img
            className=" sm:-mr-0 h-24 w-24 rounded-full overflow-hidden"
            src={userAvatart}
            alt=""
          />
        </div>
        {/* Recent Updates */}

        <div className="p-5 pt-0 mb-10 w-full sm:w-2/3">
          <p className="flex items-center gap-2 my-5 text-black ">
            <img className="h-5" src={Category} alt="" /> Recent Updates
          </p>

          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-evenly w-full gap-4">
              <div className="bg-gradient-to-br relative from-purple-800 to-blue-700 rounded  w-[6.6rem] h-[6.6rem] py-5  flex flex-col items-center justify-center">
                <div className="absolute -top-2 -left-2 bg-blue-600 font-bold text-sm text-white px-2 rounded-full shadow-lg">
                  113
                </div>
                <img className="h-8" src={admission} alt="" />

                <p className="text-center text-white text-sm mt-1">
                  Admission Applications
                </p>
              </div>

              <div className="bg-gradient-to-br relative from-purple-800 to-blue-700 rounded  w-[6.6rem] h-[6.6rem] py-5  flex flex-col items-center justify-center">
                <div className="absolute -top-2 -left-2 bg-blue-600 font-bold text-sm text-white px-2 rounded-full shadow-lg">
                  58
                </div>
                <img className="h-8" src={Course_Enrolments} alt="" />

                <p className="text-center text-white text-sm mt-1">
                  Course Enrollments
                </p>
              </div>
              <div className="bg-gradient-to-br relative from-purple-800 to-blue-700 rounded  w-[6.6rem] h-[6.6rem] py-5  flex flex-col items-center justify-center">
                <img className="h-8" src={newCourse} alt="" />

                <p className="text-center text-white text-sm mt-1">
                  Publish new Course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstituteHome;
