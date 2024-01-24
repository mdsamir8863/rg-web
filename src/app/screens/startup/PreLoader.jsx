import { useEffect } from "react";
import Preloader from "../../assets/preLoader.png";
import RgLogo from "../../assets/rg-logo.png";

const PreLoader = () => {
  const runScript = () => {
    setTimeout(() => {
      document.getElementById("preLoader").classList.add("fadingout");
    }, 1500);
  };

  useEffect(() => {
    runScript();
  }, []);
  return (
    <>
      {/* <img src={Preloader} alt="" /> */}
      <div
        id="preLoader"
        className="w-full z-[999999] fixed  h-screen top-0 bg-cover bg-no-repeat bg-center flex items-center justify-center  fadingEffect"
        style={{
          backgroundImage: `url(${Preloader})`,
        }}
      >
        <img src={RgLogo} alt="Ranker Guid Logo" />
      </div>
    </>
  );
};

export default PreLoader;
