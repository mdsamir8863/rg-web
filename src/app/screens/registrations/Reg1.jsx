// import RgLogo from "../../assets/RG-logo2.png";
import Student from "../../assets/bg-designs/Student.png";
import Institution from "../../assets/bg-designs/Institution.png";
import Teacher from "../../assets/bg-designs/Teacher.png";
import JobSeeker from "../../assets/bg-designs/JobSeeker.png";
import { Link } from "react-router-dom";
import Logo from "../../components/RgLogo";
const Reg1 = () => {
  return (
    <section className="w-full h-screen flex items-center flex-col justify-center gap-3">
      <Logo />
      <div className="p-2 space-y-3 w-full sm:w-[28rem] xl:w-[32rem] flex items-center justify-center flex-col ">
        <Link
          className="relative inline-flex w-full items-center justify-center rounded-md font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          to={"/register/student"}
        >
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block">
              <img src={Student} alt="" />
            </span>
            Student
          </button>
        </Link>
        <Link
          className="relative inline-flex w-full items-center justify-center rounded-md font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          to={"/register/institution"}
        >
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block">
              <img src={Institution} alt="" />
            </span>
            Institution
          </button>
        </Link>
        <Link
          className="relative inline-flex w-full items-center justify-center rounded-md font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          to={"/register/teacher"}
        >
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block">
              <img src={Teacher} alt="" />
            </span>
            Teacher
          </button>
        </Link>
        <Link
          className="relative inline-flex w-full items-center justify-center rounded-md font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          to={"/register/jobSeeker"}
        >
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block">
              <img src={JobSeeker} alt="" />
            </span>
            JobSeeker
          </button>
        </Link>
        <Link
          className="relative inline-flex w-full items-center justify-center rounded-md font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          to={"/register/hr"}
        >
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          >
            <span className="mr-2 inline-block">
              <img src={JobSeeker} alt="" />
            </span>
            HR
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Reg1;
