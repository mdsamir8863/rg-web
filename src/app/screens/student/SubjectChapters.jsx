import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fethc_subject } from "../../../store/action";
import SubjectChapterCard from "../../components/SubjectChapterCard";

const SubjectChapters = () => {
  const { subject } = useParams();
  const storeSubject = useSelector((e) => e.studentSubjectChapterReducers);
  const dispatch = useDispatch();
  const [subjectData, setSubjectData] = useState([]);
  const { user } = useSelector((e) => e.user_reducer);

  useEffect(() => {
    if (!storeSubject || subject != storeSubject?.subject?.subject) {
      dispatch(fethc_subject(subject, setSubjectData));
      return;
    } else {
      setSubjectData(storeSubject.subject);
    }
  }, []);
  return (
    <>
      <div className="flex w-full flex-col items-center ">
        <div className="flex p-5 w-full text-xl font-bold">
            Chapters in -- {subject}
        </div>
        <div className="w-4/5  rounded-md border gap-3 shadow-lg mt-5 p-3 flex">
          <div className="flex flex-col ">
            <div className="flex gap-4 items-center">
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <span className="text-2xl font-bold"> {subject}</span>
            </div>
              <span className="text-[0.7rem] ml-10"> {user?.user_details?.class_name}</span>
          </div>
        </div>
        {subjectData && subjectData.map((e,i)=> <SubjectChapterCard data={e} index={i} key={e._id}/>  )}
      </div>
    </>
  );
};

export default SubjectChapters;
