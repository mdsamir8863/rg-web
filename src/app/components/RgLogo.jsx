import { Link } from "react-router-dom";
import RgLogo from "../assets/RG-logo2.png";

const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <img className="h-24" src={RgLogo} alt="" />
      </Link>
    </>
  );
};

export default Logo;
