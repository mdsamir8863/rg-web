/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../../components/RgLogo";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signUP } from "../../../store/action";

const StudentForm = ({ setLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    s_number: "",
    p_number: "",
    address: {},
    board: "",
    class_name: "",
    skills: "",
  });
  const dispatch = useDispatch();

  const [classes, set_calsses] = useState([]);
  const [education, set_education] = useState("");
  const [classs, set_classs] = useState("");
  const [board, set_board] = useState("");

  const boards = [
    "KG_TO_10 Andhra Pradesh - BSEAP, BIEAP - State Board",
    "KG_TO_10 Arunachal Pradesh - Directorate of School Education - State Board",
    "KG_TO_10 Assam - AHSEC, SEBA - State Board",
    "KG_TO_10 Bihar - BSEB - State Board",
    "KG_TO_10 Chhattisgarh - CGBSE - State Board",
    "KG_TO_10 Goa - GBSHSE - State Board",
    "KG_TO_10 Gujarat - GSEB - State Board",
    "KG_TO_10 Haryana - HBSE - State Board",
    "KG_TO_10 Himachal Pradesh - HPBOSE - State Board",
    "KG_TO_10 Jharkhand - JAC - State Board",
    "KG_TO_10 Karnataka - KSEEB, Department of Pre-University Education - State Board",
    "KG_TO_10 Kerala - KSEB - State Board",
    "KG_TO_10 Madhya Pradesh - MPBSE - State Board",
    "KG_TO_10 Maharashtra - MSBSHSE - State Board",
    "KG_TO_10 Manipur - BSEM - State Board",
    "KG_TO_10 Meghalaya - MBOSE - State Board",
    "KG_TO_10 Mizoram - MBSE - State Board",
    "KG_TO_10 Nagaland - NBSE - State Board",
    "KG_TO_10 Odisha - BSE Odisha, CHSE Odisha - State Board",
    "KG_TO_10 Punjab - PSEB - State Board",
    "KG_TO_10 Rajasthan - RBSE, RCSE - State Board",
    "KG_TO_10 Sikkim - SBSE, SHSEC - State Board",
    "KG_TO_10 Tamil Nadu - TNBSE, DGE Tamil Nadu - State Board",
    "KG_TO_10 Telangana - TSBIE, BSET - State Board",
    "KG_TO_10 Tripura - TBSE - State Board",
    "KG_TO_10 Uttar Pradesh - UPMSP - State Board",
    "KG_TO_10 Uttarakhand - UBSE - State Board",
    "KG_TO_10 West Bengal - WBBSE, WBCHSE - State Board",
    "KG_TO_10 Andaman and Nicobar Islands - ANIBSE - State Board",
    "KG_TO_10 Chandigarh - Chandigarh Education Department - State Board",
    "KG_TO_10 Dadra and Nagar Haveli and Daman and Diu - Managed by respective UT administrations - State Board",
    "KG_TO_10 Lakshadweep - Managed by Lakshadweep Education Department - State Board",
    "KG_TO_10 Delhi - Directorate of Education, Delhi - State Board",
    "KG_TO_10 Puducherry - PBOSHE - State Board",
    "11_12/1ST_2ND_PU Andhra Pradesh - BSEAP, BIEAP - State Board",
    "11_12/1ST_2ND_PU Arunachal Pradesh - Directorate of School Education - State Board",
    "11_12/1ST_2ND_PU Assam - AHSEC, SEBA - State Board",
    "11_12/1ST_2ND_PU Bihar - BSEB - State Board",
    "11_12/1ST_2ND_PU Chhattisgarh - CGBSE - State Board",
    "11_12/1ST_2ND_PU Goa - GBSHSE - State Board",
    "11_12/1ST_2ND_PU Gujarat - GSEB - State Board",
    "11_12/1ST_2ND_PU Haryana - HBSE - State Board",
    "11_12/1ST_2ND_PU Himachal Pradesh - HPBOSE - State Board",
    "11_12/1ST_2ND_PU Jharkhand - JAC - State Board",
    "11_12/1ST_2ND_PU Karnataka - KSEEB, Department of Pre-University Education - State Board",
    "11_12/1ST_2ND_PU Kerala - KSEB - State Board",
    "11_12/1ST_2ND_PU Madhya Pradesh - MPBSE - State Board",
    "11_12/1ST_2ND_PU Maharashtra - MSBSHSE - State Board",
    "11_12/1ST_2ND_PU Manipur - BSEM - State Board",
    "11_12/1ST_2ND_PU Meghalaya - MBOSE - State Board",
    "11_12/1ST_2ND_PU Mizoram - MBSE - State Board",
    "11_12/1ST_2ND_PU Nagaland - NBSE - State Board",
    "11_12/1ST_2ND_PU Odisha - BSE Odisha, CHSE Odisha - State Board",
    "11_12/1ST_2ND_PU Punjab - PSEB - State Board",
    "11_12/1ST_2ND_PU Rajasthan - RBSE, RCSE - State Board",
    "11_12/1ST_2ND_PU Sikkim - SBSE, SHSEC - State Board",
    "11_12/1ST_2ND_PU Tamil Nadu - TNBSE, DGE Tamil Nadu - State Board",
    "11_12/1ST_2ND_PU Telangana - TSBIE, BSET - State Board",
    "11_12/1ST_2ND_PU Tripura - TBSE - State Board",
    "11_12/1ST_2ND_PU Uttar Pradesh - UPMSP - State Board",
    "11_12/1ST_2ND_PU Uttarakhand - UBSE - State Board",
    "11_12/1ST_2ND_PU West Bengal - WBBSE, WBCHSE - State Board",
    "11_12/1ST_2ND_PU Andaman and Nicobar Islands - ANIBSE - State Board",
    "11_12/1ST_2ND_PU Chandigarh - Chandigarh Education Department - State Board",
    "11_12/1ST_2ND_PU Dadra and Nagar Haveli and Daman and Diu - Managed by respective UT administrations - State Board",
    "11_12/1ST_2ND_PU Lakshadweep - Managed by Lakshadweep Education Department - State Board",
    "11_12/1ST_2ND_PU Delhi - Directorate of Education, Delhi - State Board",
    "11_12/1ST_2ND_PU Puducherry - PBOSHE - State Board",
  ];

  const handleLocationTrigger = () => {
    try {
      setLoading(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            console.log("Latitude: " + lat + ", Longitude: " + lon);

            const URI = `/api/v1/location?lat=${lat}&lon=${lon}`;
            axios
              .get(URI)
              .then((res) => {
                console.log(res);
                const { data } = res;
                if (data?.data) {
                  const address = data?.data;
                  setFormData((prev) => ({
                    ...prev,
                    address: address?.address,
                  }));
                }
              })
              .catch((err) => {
                alert(err?.message || err);
              })
              .finally(() => {
                setLoading(false);
              });
          },
          function (error) {
            console.error("Error getting location: " + error.message);
            alert("Error getting location: " + error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        alert("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      alert(error);
    }
  };

  const class_data = {
    KG_CBSE: [
      "1st class",
      "2nd class",
      "3rd class",
      "4th class",
      "5th class",
      "6th class",
      "7th class",
      "8th class",
      "9th class",
      "10th class",
    ],
    KG_ICSE: [
      "1st class",
      "2nd class",
      "3rd class",
      "4th class",
      "5th class",
      "6th class",
      "7th class",
      "8th class",
      "9th class",
      "10th class",
    ],
    KG_STATE: [
      "1st class",
      "2nd class",
      "3rd class",
      "4th class",
      "5th class",
      "6th class",
      "7th class",
      "8th class",
      "9th class",
      "10th class",
    ],
    PU_STATE: [
      "11th / 1st PUC COMMERCE",
      "11th / 1st PUC ARTS",
      "11th / 1st PUC SCIENCE",
      "12th / 2nd PUC ARTS",
      "12th / 2nd PUC COMMERCE",
      "12th / 2nd PUC SCIENCE",
    ],
    PU_ICSE: [
      "11th / 1st PUC COMMERCE",
      "11th / 1st PUC ARTS",
      "11th / 1st PUC SCIENCE",
      "12th / 2nd PUC ARTS",
      "12th / 2nd PUC COMMERCE",
      "12th / 2nd PUC SCIENCE",
    ],
    PU_CBSE: [
      "11th / 1st PUC COMMERCE",
      "11th / 1st PUC ARTS",
      "11th / 1st PUC SCIENCE",
      "12th / 2nd PUC ARTS",
      "12th / 2nd PUC COMMERCE",
      "12th / 2nd PUC SCIENCE",
    ],
    DG: [
      "BA in English",
      "BA in History",
      "BA in Political Science",
      "BA in Economics",
      "BA in Sociology",
      "BA in Psychology",
      "BA in Geography",
      "BA in Philosophy",
      "BA in Hindi",
      "BA in Sanskrit",
      "BA in Urdu",
      "BSc in Physics",
      "BSc in Chemistry",
      "BSc in Biology",
      "BSc in Mathematics",
      "BSc in Computer Science",
      "BSc in Electronics",
      "BSc in Environmental Science",
      "BSc in Biotechnology",
      "BSc in Geology",
      "BSc in Statistics",
      "BCom General",
      "BCom in Accounting",
      "BCom in Finance",
      "BCom in Marketing",
      "BCom in Banking and Insurance",
      "BTech in Civil Engineering",
      "BTech in Mechanical Engineering",
      "BTech in Computer Science and Engineering",
      "BTech in Electrical Engineering",
      "BTech in Electronics and Communication Engineering",
      "BTech in Aerospace Engineering",
      "BTech in Chemical Engineering",
      "BTech in Biotechnology",
      "BTech in Information Technology",
      "BTech in Metallurgical Engineering",
      "BTech in Agricultural Engineering",
      "BTech in Mining Engineering",
      "BTech in Textile Engineering",
      "BTech in Ceramic Engineering",
      "BTech in Environmental Engineering",
      "BTech in Automobile Engineering",
      "BTech in Instrumentation Engineering",
      "BTech in Marine Engineering",
      "BTech in Petroleum Engineering",
      "BTech in Robotics Engineering",
      "BTech in Structural Engineering",
      "BTech in Power Engineering",
      "BTech in Food Technology",
      "BTech in Nano Technology",
      "BBA General",
      "BBA in Marketing",
      "BBA in Finance",
      "BBA in Human Resources",
      "BBA in International Business",
      "BBA in Entrepreneurship",
      "BBA in Supply Chain Management",
      "BCA General",
      "BCA in Computer Science",
      "BCA in Information Technology",
      "BArch in Architecture",
      "BPharm in Pharmacy",
      "BDS in Dentistry",
      "MBBS in Medicine",
      "LLB General",
      "LLB Integrated (BA LLB, BCom LLB, BSc LLB)",
      "BDes in Fashion Design",
      "BDes in Industrial Design",
      "BDes in Communication Design",
      "BDes in Interior Design",
      "BHM in Hotel Management",
      "BFA in Fine Arts",

      "BSc Nursing",

      "BEd in Education",

      "BPT in Physiotherapy",

      "BSc Agriculture",

      "BSc Forestry",

      "BSW in Social Work",

      "BSc Aeronautics",

      "BTTM in Travel and Tourism Management",
      "MA in English",
      "MA in History",
      "MA in Political Science",
      "MA in Economics",
      "MA in Sociology",
      "MA in Psychology",
      "MA in Geography",
      "MA in Philosophy",
      "MA in Hindi",
      "MA in Sanskrit",
      "MA in Urdu",

      "MSc in Physics",
      "MSc in Chemistry",
      "MSc in Biology",
      "MSc in Mathematics",
      "MSc in Computer Science",
      "MSc in Electronics",
      "MSc in Environmental Science",
      "MSc in Biotechnology",
      "MSc in Geology",
      "MSc in Statistics",

      "MCom General",
      "MCom in Accounting",
      "MCom in Finance",
      "MCom in Marketing",
      "MCom in Banking and Insurance",

      "MTech in Civil Engineering",
      "MTech in Mechanical Engineering",
      "MTech in Computer Science and Engineering",
      "MTech in Electrical Engineering",
      "MTech in Electronics and Communication Engineering",
      "MTech in Aerospace Engineering",
      "MTech in Chemical Engineering",
      "MTech in Biotechnology",
      "MTech in Information Technology",
      "MTech in Metallurgical Engineering",
      "MTech in Agricultural Engineering",
      "MTech in Mining Engineering",
      "MTech in Textile Engineering",
      "MTech in Ceramic Engineering",
      "MTech in Environmental Engineering",
      "MTech in Automobile Engineering",
      "MTech in Instrumentation Engineering",
      "MTech in Marine Engineering",
      "MTech in Petroleum Engineering",
      "MTech in Robotics Engineering",
      "MTech in Structural Engineering",
      "MTech in Power Engineering",
      "MTech in Food Technology",
      "MTech in Nano Technology",

      "MBA General",
      "MBA in Marketing",
      "MBA in Finance",
      "MBA in Human Resources",
      "MBA in International Business",
      "MBA in Entrepreneurship",
      "MBA in Supply Chain Management",

      "MCA General",
      "MCA in Computer Science",
      "MCA in Information Technology",

      "MArch in Architecture",

      "MPharm in Pharmacy",

      "MDS in Dentistry",

      "MD in Medicine",

      "LLM General",
      "LLM Integrated (BA LLB, BCom LLB, BSc LLB)",

      "MDes in Fashion Design",
      "MDes in Industrial Design",
      "MDes in Communication Design",
      "MDes in Interior Design",

      "MHM in Hotel Management",

      "MFA in Fine Arts",

      "MSc Nursing",

      "MEd in Education",

      "MPT in Physiotherapy",

      "MSc Agriculture",

      "MSc Forestry",

      "MSW in Social Work",

      "MAeronautics in Aeronautics",

      "MTTM in Travel and Tourism Management",
    ],
    DP: [
      "Diploma in Polytechnic (Various Specializations)",
      "Diploma in Business Administration",
      "Diploma in Hotel Management",
      "Diploma in Computer Applications",
      "Diploma in Nursing",
      "Diploma in Medical Laboratory Technology",
      "Diploma in Pharmacy",
      "Diploma in Fine Arts",
      "Diploma in Graphic Design",
      "Diploma in English Language Teaching (DELTA)",
      "ITI",
    ],
    AL: ["all"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.address);
    if (!formData.address?.postcode || !formData.class_name) {
      alert("please fill the information properly");
      return;
    }

    const {
      address,
      board,
      class_name,
      email,
      name,
      p_number,
      password,
      s_number,
      skills,
    } = formData;
    const signData = {
      name,
      email,
      password,
      role: "seeker",
      user_data: {
        class_name,
        board,
        s_number,
        p_number,
        address,
        skills,
      },
    };
    console.log(signData);
    dispatch(signUP(signData, "seeker"));
  };

  return (
    <section className="py-5 ">
      <div className="ml-5">
        <Logo />
      </div>
      <div className="flex mt-4 pl-5 text-xl items-end font-bold text-gray-700">
        <span>Fill the Job - Seeker sign up form</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 ml-3 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" w-3/4 mt-4 p-5 rounded-md bg-white shadow-xl border mx-auto"
      >
        <span className="my-5 text-blue-900 flex font-bold gap-3">
          <span>Main Details</span>
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
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>
        </span>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none .text-white .border-gray-600 .focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 .text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:.text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none .text-white .border-gray-600 .focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 .text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:.text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="p_number"
              onChange={handleChange}
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none .text-white .border-gray-600 .focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 .text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:.text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              primary number (123-456-7890)
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              name="s_number"
              onChange={handleChange}
              id="floating_s_number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none .text-white .border-gray-600 .focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_s_number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 .text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:.text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              secondary number (123-456-7890)
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2  md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id="floating_phone_pass"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none .text-white .border-gray-600 .focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone_pass"
              className="peer-focus:font-medium absolute text-sm text-gray-500 .text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:.text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              password
            </label>
          </div>
          {!formData.address?.city ? (
            <button
              onClick={handleLocationTrigger}
              type="button"
              className=" gap-4 text-blue-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center .focus:ring-[#F7BE38]/50 me-2 mb-2"
            >
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Add location for best in your location
            </button>
          ) : (
            <button
              type="button"
              className="focus:outline-none text-white transition-all opacity-1 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 .bg-green-600 flex justify-start items-center gap-5 .hover:bg-green-700 .focus:ring-green-800"
              style={{ transitionDuration: "2s" }}
            >
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
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
              Added successfully
            </button>
          )}
        </div>

        <span className="my-5 flex text-blue-900 font-bold gap-3">
          <span>Academic Details</span>
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
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </span>
        <div>
          <label
            htmlFor="education"
            className="block mb-2 text-sm font-medium text-gray-900 .text-white"
          >
            Education
          </label>
          <select
            required
            id="education"
            onChange={(e) => {
              set_calsses(class_data[e.target.value]);
              set_education(e.target.value);
              const selectedIndex = e.target.selectedIndex;
              const selectedOptionText = e.target.options[selectedIndex].text;
              set_board(selectedOptionText);
              setFormData((prev) => ({
                ...prev,
                board: e.target.options[selectedIndex].text,
              }));
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
          >
            <option selected>Choose a education</option>
            <option value="KG_CBSE">KG/ 1 to 10 (CBSE)</option>
            <option value="KG_ICSE">KG/ 1 to 10 (ICSE)</option>
            <option value="PU_CBSE">11-12 / 1st/2nd PUC(CBSE)</option>
            <option value="PU_ICSE">11-12 / 1st/2nd PUC (ICSE)</option>
            <option value="DG">Degree (Mcom,BCA etc.)</option>
            <option value="DP">Diploma/ITI</option>
            {boards &&
              boards.map((e, i) => {
                if (e.includes("KG_TO_10")) {
                  return (
                    <option value="KG_STATE" key={i}>
                      {e}
                    </option>
                  );
                } else {
                  return (
                    <option value="PU_STATE" key={i}>
                      {e}
                    </option>
                  );
                }
              })}
          </select>
        </div>
        {education !== "ALL" ? (
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 .text-white"
            >
              class
            </label>
            <select
              id="countries"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  class_name: e.target.value,
                }));
                set_classs(e.target.value);
              }}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 .bg-gray-700 .border-gray-600 .placeholder-gray-400 .text-white .focus:ring-blue-500 .focus:border-blue-500"
            >
              <option selected>Choose a class</option>
              {classes?.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        ) : (
          ""
        )}

        <span className="mt-5  font-bold text-blue-900  flex ">
          Skill details
        </span>

        <div className="relative z-0 mt-5 w-full mb-5 group">
          <input
            type="text"
            name="skills"
            onChange={handleChange}
            id="floating_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none .text-white .border-gray-600 .focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 .text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:.text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            skills (eg: HTML, CSS, JS, REACT,)
          </label>
        </div>
        <button
          type="submit"
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center .bg-blue-600 .hover:bg-blue-700 .focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default StudentForm;
