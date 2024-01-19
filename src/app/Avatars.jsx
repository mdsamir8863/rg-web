import { useState } from "react";
import avatar1 from "./assets/avatars/avatar1.png";
import avatar2 from "./assets/avatars/avatar2.png";
import avatar3 from "./assets/avatars/avatar3.png";
import avatar4 from "./assets/avatars/avatar4.png";
import avatar5 from "./assets/avatars/avatar5.png";
import avatar6 from "./assets/avatars/avatar6.png";
import avatar7 from "./assets/avatars/avatar7.png";
import avatar8 from "./assets/avatars/avatar8.png";
const AvatarSelector = ({ onSelect }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // List of available avatars (you can replace these with your actual SVG paths or URLs)
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,

    // Add more avatar paths as needed
  ];

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    onSelect(avatar); // Notify the parent component about the selected avatar
  };

  return (
    <div className="absolute top-[6rem] flex justify-center  flex-wrap items-center w-full">
      <div className="flex gap-3  flex-wrap items-center w-full justify-center">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`w-16 h-16  shadow-lg rounded-full border-2 cursor-pointer hover:grayscale ${
              avatar === selectedAvatar ? "border-purple-400" : "border-white"
            }`}
            onClick={() => handleAvatarClick(avatar)}
          >
            {/* You can replace the following with an actual SVG component or image element */}
            <div
              className={`w-full h-full rounded-full bg-cover`}
              style={{ backgroundImage: `url(${avatar})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
