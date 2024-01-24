import { Link } from "react-router-dom";
import admissionIcon from "../assets/Icons/addmision.png";
import kinderIcon from "../assets/Icons/kidIcon.png";
import school from "../assets/Icons/school.png";
import college from "../assets/Icons/college.png";
import University from "../assets/Icons/University.png";
import OnlineCollege from "../assets/Icons/OnlineCollege.png";
import OnlineTraining from "../assets/Icons/OnlineTraining.png";
import TrainingCentre from "../assets/Icons/TrainingCentre.png";
import TuitionCentre from "../assets/Icons/TuitionCentre.png";
import TutorTeacher from "../assets/Icons/Tutor-teacher.png";
import AbroadColleges from "../assets/Icons/AbroadColleges.png";
import AbroadSchools from "../assets/Icons/AbroadSchools.png";
import AbroadUniversity from "../assets/Icons/AbroadUniversity.png";
import { useId } from "react";
const Admission = () => {
  const id = useId();
  const admission = [
    {
      icon: kinderIcon,
      text: "Kinder,LKG UKG",
    },
    {
      icon: school,
      text: "School",
    },
    {
      icon: college,
      text: "College",
    },
    {
      icon: University,
      text: "University",
    },
    {
      icon: OnlineCollege,
      text: "Online College",
    },
    {
      icon: OnlineTraining,
      text: "Online Training",
    },
    {
      icon: TrainingCentre,
      text: "Training Centre",
    },
    {
      icon: TuitionCentre,
      text: "Tuition Centre",
    },
    {
      icon: TutorTeacher,
      text: "Tutor/Teacher",
    },
    {
      icon: AbroadColleges,
      text: "Abroad Colleges",
    },
    {
      icon: AbroadSchools,
      text: "Abroad Schools",
    },
    {
      icon: AbroadUniversity,
      text: "Abroad University",
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col border-2">
          <Link className="sm:hidden py-1" to={"#"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <p className="flex items-center text-white text-sm py-2 pl-5 gap-3 bg-gradient-to-r to-blue-500 from-blue-800">
            <img className="h-6" src={admissionIcon} alt="" /> Admission
          </p>
        </div>
        <ul className="w-[96%] flex flex-col gap-3 sm:w-1/2 mx-auto my-5">
          {admission.map((data) => {
            return (
              <li
                key={id}
                className="border hover:bg-gray-100  border-[#B646AF] rounded py-2 pl-5 shadow "
              >
                <Link to={'/admission'} className="flex items-center gap-2 text-sm font-[200] text-[#4E4E4E]">
                  <img className="w-6" src={data.icon} alt="" /> {data.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Admission;
