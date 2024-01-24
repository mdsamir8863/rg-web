import bgTop from "../../assets/bg-designs/homBgTop.png";
import BookBg from "../../assets/bg-designs/course-bg.png";
import BabyGirl from "../../assets/child.png";
import BookIcon from "../../assets/Icons/bookIcon.png";
import otherCourse from "../../assets/Icons/otherCourseIcon.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectData } from "../../../store/action";

// import MainNavbar from "../../components/MainNavBar";
const StudentHome = ({handleSubjectRedirect}) => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((e) => e.studentSubjectReducers);
  const { user } = useSelector((e) => e.user_reducer);

  useEffect(() => {
    if (!subjects) {
      console.log("fetching the subjects >>>");
      dispatch(fetchSubjectData());
      return;
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("ite")) {
      localStorage.setItem("ite", true);
      location.reload();
    }
  }, []);
  return (
    <>
      <div className="flex flex-col items-center w-full scroll-smooth duration-300 mb-24 sm:mb-0">
        {/* <MainNavbar /> */}
        {/* top section */}
        <div
          className="bg-cover bg-no-repeat w-full bg-center h-[15rem] flex items-center justify-evenly relative"
          //   style={{ background: "linear-gradient( #8B5CF6, #F3F4F6" }}
          style={{ backgroundImage: `url(${bgTop})` }}
        >
          <div className="flex flex-col items-start  text-white gap-1">
            <div className="bg-purple-200 rounded-full h-16 w-16 text-center flex items-center justify-center">
              <p className="bg-green-100 font-bold text-2xl text-purple-800 w-14 h-14 rounded-full text-center flex items-center justify-center">
                {user?.name.slice(0, 1)}
              </p>
            </div>
            <p className="">Welcome</p>
            <h2 className="font-bold text-xl">{user?.name} </h2>
            <p>{user?.user_details?.class_name}</p>
          </div>
          <img className=" sm:-mr-0" src={BabyGirl} alt="" />
        </div>
        {/* all subjects */}

        <div className=" w-[95%] sm:w-3/5 my-5">
          <p className="flex items-center gap-2 text-black my-5">
            <img src={BookIcon} alt="" /> All Subject
          </p>

          <div className="flex flex-col w-full items-center justify-center ">
            <div className="flex w-3/4 justify-center items-center">
              <div className="flex items-center flex-wrap justify-center phone:w-full w-[90%] gap-10">
                {subjects &&
                  subjects.map((e, i) => (
                    <div
                      onClick={()=>handleSubjectRedirect(e)}
                      key={i}
                      className=" flex flex-col justify-center items-center relative"
                    >
                      <img src={BookBg} alt="" />
                      <p className="absolute  text-center  z-10 font-semibold text-[0.6rem]">
                        {e?.slice(0, 7)}...
                      </p>
                      <p className="text-center text-[#8B8B8B] text-sm mt-1">
                        {e?.split(' ')[0]}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* other courses */}

        <div className=" w-[95%] sm:w-3/5 my-5">
          <p className="flex items-center gap-2 text-black my-5">
            <img src={otherCourse} alt="" /> Other Courses
          </p>

          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex items-center justify-evenly w-full gap-4">
              <div className="relative">
                <img src={BookBg} alt="" />
                <p className="absolute top-9 z-10 left-10 font-semibold text-sm">
                  Hindi
                </p>
                <p className="text-center text-[#8B8B8B] text-sm mt-1">Hindi</p>
              </div>
              <div className="relative">
                <img src={BookBg} alt="" />
                <p className="absolute top-9 z-10 left-10 font-semibold text-sm">
                  Hindi
                </p>
                <p className="text-center text-[#8B8B8B] text-sm mt-1">Hindi</p>
              </div>
              <div className="relative">
                <img src={BookBg} alt="" />
                <p className="absolute top-9 z-10 left-10 font-semibold text-sm">
                  Hindi
                </p>
                <p className="text-center text-[#8B8B8B] text-sm mt-1">Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHome;