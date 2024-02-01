import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourseDetails } from "../../../store/action";

const Chapter = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [chapterDetails, setChapterDetails] = useState({});

  useEffect(() => {
    dispatch(fetchCourseDetails(id, setChapterDetails));
  }, []);

  return (
    <div className="w-full flex flex-col  items-center">
      <div className="flex px-5 pt-4 w-full font-bold text-3xl">Course</div>
      <div className="flex w-4/5 border  my-10 gap-10 p-3 rounded-lg ">
        <img
          src={chapterDetails?.thumbnail}
          alt=""
          className="w-32 aspect-video "
        />
        <div className="flex gap-3 flex-col">
          <span className="font-bold text-2xl ">{chapterDetails?.title}</span>
          <span className="font-medium text-gray-600 ">
            {chapterDetails?.description}
          </span>
        </div>
      </div>
      <div className="flex py-5 w-4/5 items-center gap-2">
        <span className="font-bold text-2xl ">Topics</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>

      <div className="flex w-4/5  flex-col items-center">
        <div className="relative w-full overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 .text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 .bg-gray-700 .text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Topic{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  description
                </th>
                <th scope="col" className="px-6 py-3">
                  Topic Study guide
                </th>
                <th scope="col" className="px-6 py-3">
                  Video Guide
                </th>
              </tr>
            </thead>
            <tbody>
              {chapterDetails?.topics &&
                chapterDetails?.topics?.map((e, i) => (
                  <tr
                    key={i}
                    className="bg-white border-b .bg-gray-800 .border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={e?.video}
                        className="flex w-44  flex-col    justify-center items-center h-24 bg-gray-600 rounded-lg"
                      >
                        <div className="flex w-12 h-12 bg-red-700 text-white justify-center items-center rounded-full ">
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
                              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                            />
                          </svg>
                        </div>
                        <span className="text-white">Play</span>
                      </a>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
                    >
                      {e?.title}
                    </th>
                    <td className="px-6 py-4">{e?.description}</td>
                    <td className="px-6 py-4">
                      <a
                        href={e?.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-700 p-2 rounded-full text-white px-10"
                      >
                        View
                      </a>
                    </td>
                    {/*  <td className="px-6 py-4">
                      <a
                        href={e?.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-700 p-2 rounded-full text-white px-10"
                      >
                        Video
                      </a>
                    </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
