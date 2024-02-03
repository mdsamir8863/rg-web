import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../store/action";

const TeacherCom = ({ e }) => {
  const [isFollowed, setIsfollowed] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((ec) => ec.user_reducer);
  const [followList, setFollowList] = useState([]);

  const followHandler = () => {
    dispatch(followUser(e._id, setIsfollowed));
  };

  useEffect(() => {
    const arr = user?.user_details?.followings.map((e) => e.id);
    setFollowList(arr);
    if (arr.includes(e._id)) {
      setIsfollowed(true);
    } else {
      setIsfollowed(false);
    }
  }, []);

  return (
    <>
      <tr className="bg-white border-b .:bg-gray-800 .:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap .:text-white"
        >
          {e?.name}/ {e._id}
        </th>
        <td className="px-6 py-4">{e?.user_details?.institution || " N/A"}</td>

        <td className="px-2 py-4 text-right">
          {isFollowed ? (
            <button className="px-5 opacity-25  py-2 bg-blue-600 text-white rounded-xl">
              followed
            </button>
          ) : (
            <button
              onClick={followHandler}
              className="px-5 py-2 bg-blue-600 text-white rounded-xl"
            >
              follow
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default TeacherCom;
