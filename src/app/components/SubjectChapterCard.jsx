/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const SubjectChapterCard = ({ data, index }) => {
  const { title, thumbnail, description } = data;
  return (
    <Link
      to={`/chapter/${data._id}`}
      className="w-3/4 mt-5 flex p-3 border gap-10 "
    >
        <span className="text-xl font-bold">{index+1} .</span>
      <img src={thumbnail} className="w-32 aspect-video" alt="" />
      <div className="flex flex-col">
        <span className="text-xl font bold">{title}</span>
        <span className="text-[0.7rem] ">{description}</span>
      </div>
    </Link>
  );
};

export default SubjectChapterCard;
