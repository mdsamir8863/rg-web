/* eslint-disable react/prop-types */
import bgTop from "../../assets/bg-designs/homBgTop.png";
import admissionApp from "../../assets/appResp.png";
import courseEnrolment from "../../assets/uploadResume.png";
import publishCourse from "../../assets/findJob.png";
import BabyGirl from "../../assets/ladki.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// import MainNavbar from "../../components/MainNavBar";
const StudentHome = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((e) => e.user_reducer);
  const nav = useNavigate();
  // useEffect(() => {
  //   if (!subjects) {
  //     console.log("fetching the subjects >>>");
  //     dispatch(fetchSubjectData());
  //     return;
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(courses);
  //   if (!courses) {
  //     console.log("fetching the subjects >>>");
  //     dispatch(fetchCourses());
  //     return;
  //   }
  // }, []);

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
            <p>
              {user?.user_details?.address?.state_district ||
                user?.user_details?.address?.city}
            </p>
          </div>
          <img className=" sm:-mr-0 w-32" src={BabyGirl} alt="" />
        </div>
        <div className="flex w-full  justify-center flex-col items-center">
          <div className="flex text-2xl font-bold my-10 ">Recent Update</div>
          <div className="flex  gap-20">
            <img
              onClick={() => nav("/jobseeker/market")}
              src={admissionApp}
              className="w-24 cursor-pointer"
              alt=""
            />
            <div className="relative ">
              <span className="top-[-10px] right-[-40px] bg-blue-700 text-white rounded-3xl p-1  text-[0.7rem] absolute">
                Coming soon !!
              </span>
              <img
                onClick={() => nav("/coming/soon")}
                src={courseEnrolment}
                className="w-24 cursor-pointer"
                alt=""
              />
            </div>
            <div className="relative ">
              
              <img
                onClick={() => nav("/jobseeker/jobs")}
                src={publishCourse}
                className="w-24 cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentHome;
