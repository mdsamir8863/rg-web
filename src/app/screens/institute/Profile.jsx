import { useState } from "react";
import AvatarSelector from "../../AvatarSelector"; // Assume you have an AvatarSelector component
import { Link } from "react-router-dom";
import bgTop from "../../assets/bg-designs/homBgTop.png";
import { handleLogout } from "../../util/logoutUtil";

const MyProfilePage = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    setShowAvatarSelector(false); // Close the avatar selector after selecting an avatar
  };

  const handleChooseAvatarClick = () => {
    setShowAvatarSelector(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit gap-28 sm:gap-0 sm:h-screen w-full">
      {/* Top section with background image */}
      <div
        className="bg-cover bg-no-repeat w-full bg-center h-[11rem]  sm:h-[15rem] flex items-center justify-evenly relative"
        style={{ backgroundImage: `url(${bgTop})` }}
      >
        {/* Profile picture and AvatarSelector */}
        <div className="relative top-20">
          {selectedAvatar ? (
            <img
              src={selectedAvatar}
              alt="Profile"
              className="h-32 w-32 rounded-full border-4 border-white"
            />
          ) : (
            <div className="h-32 w-32 bg-gray-300 rounded-full"></div>
          )}

          {/* Choose Avatar icon */}
          <div
            className="absolute bottom-0 right-0 mb-2 mr-2 cursor-pointer"
            onClick={handleChooseAvatarClick}
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Buttons section */}
      <div className="flex flex-col items-center justify-center gap-3 border w-[95%] md:w-3/4 m-auto p-2">
      
        <button
          onClick={handleLogout}
          className="flex gap-3 w-full sm:w-3/4 items-center border py-2 px-5 rounded hover:bg-purple-300"
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
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
          Log Out
        </button>
      </div>

      {/* AvatarSelector */}
      {showAvatarSelector && (
        <div className="absolute top-0 h-screen w-full flex flex-col items-center justify-center bg-black bg-opacity-50">
          <AvatarSelector onSelect={handleAvatarSelect} />
        </div>
      )}
    </div>
  );
};

export default MyProfilePage;
