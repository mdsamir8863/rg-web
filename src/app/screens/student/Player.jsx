/* eslint-disable react/prop-types */
import  { useEffect, useState } from "react";

const Player = ({ playerVideo }) => {
  

  const [actVideo, setActVideo] = useState("");

  function updateYouTubeSrc(str) {
    // Find the index of the src attribute in the string
    const srcIndex = str.indexOf('src="');

    // If src attribute is found
    if (srcIndex !== -1) {
      // Extract the URL within the src attribute
      const srcStart = srcIndex + 'src="'.length;
      const srcEnd = str.indexOf('"', srcStart);
      const srcUrl = str.substring(srcStart, srcEnd);

      // Append additional parameters to the URL
      const updatedSrcUrl = `${srcUrl}&rel=0&showinfo=0`;

      // Replace the original src attribute with the updated URL
      const updatedStr =
        str.substring(0, srcStart) + updatedSrcUrl + str.substring(srcEnd);

      return updatedStr;
    }

    // If src attribute is not found, return the original string
    return str;
  }

  useEffect(() => {
    setActVideo(updateYouTubeSrc(playerVideo));
  }, []);
  return (
    <div className="flex w-full bg-black justify-center h-screen items-center">
      <div className="scale-[0.7]">
        <div
          dangerouslySetInnerHTML={{
            __html: actVideo,
          }}
        />
      </div>
    </div>
  );
};

export default Player;
