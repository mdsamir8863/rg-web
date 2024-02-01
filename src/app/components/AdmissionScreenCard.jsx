/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddOnInte, getInstDetailsById } from "../../store/action";

const AdmissionScreenCard = ({ data }) => {
  const { user } = useSelector((e) => e.user_reducer);
  const { name, _id } = data;
  const dispatch = useDispatch();
  const [isINte, setIsInte] = useState(false);
  const [institute, setInstitute] = useState({});
  const [instituteTrigger, setInstituteTrigger] = useState(false);

  const handleClick = () => {
    dispatch(AddOnInte(_id, setIsInte));
  };

  const getInstDetails = () => {
    dispatch(getInstDetailsById(_id, setInstitute, setInstituteTrigger));
  };

  const verifyIsInt = () => {
    if (user?.user_details?.intws) {
      if (user?.user_details?.intws.includes(_id)) {
        setIsInte(true);
        return;
      }
    }
    console.log(isINte && instituteTrigger ? "sd" : "sddddd");
  };

  useEffect(() => {
    verifyIsInt();
  }, []);

  return (
    <div className="w-full flex gap-10 p-4 my-5 border rounded-lg">
      <div className="flex">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/022/530/575/small/school-building-exterior-vector-illustration-png.png"
          className="w-52 object-cover aspect-video"
          alt=""
        />
      </div>

      <div className="flex flex-col">
        <span className="font-bold ml-5  text-gray-800">{name}</span>
        {isINte && instituteTrigger ? (
          <div className="flex gap-10 my-2  text-[0.7rem]  w-full p-2">
            <div className="gap-2 flex  items-center">
              <img
                className="w-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISbTpVTkE_gFVg5UPKryPA1Mu_irl93iotw&usqp=CAU"
                alt=""
              />

              <span>{institute?.user_details?.s_number}</span>
            </div>
            <div className="gap-2 flex justify-center items-center">
              <img
                className="w-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bSO81s1Owcuft5yFcYivUikC5pFIsYUZhQ&usqp=CAU"
                alt=""
              />

              <span>{institute?.user_details?.address?.city}</span>
            </div>
            <div className=" flex gap-2 justify-center items-center">
              <img
                className="w-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBtdvXdlIwXkGifKqbjxgoLf7kl0ObUWVQA&usqp=CAU"
                alt=""
              />

              <span>{institute?.email}</span>
            </div>
          </div>
        ) : (
          <div className="flex gap-10 my-2  text-[0.7rem] blur-[3px] w-full p-2">
            <div className="gap-2 flex  items-center">
              <img
                className="w-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISbTpVTkE_gFVg5UPKryPA1Mu_irl93iotw&usqp=CAU"
                alt=""
              />

              <span>000000000</span>
            </div>
            <div className="gap-2 flex justify-center items-center">
              <img
                className="w-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5bSO81s1Owcuft5yFcYivUikC5pFIsYUZhQ&usqp=CAU"
                alt=""
              />

              <span>#34 nsjdh -909090</span>
            </div>
            <div className=" flex gap-2 justify-center items-center">
              <img
                className="w-8"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBtdvXdlIwXkGifKqbjxgoLf7kl0ObUWVQA&usqp=CAU"
                alt=""
              />

              <span>bcsiji@gmail.com</span>
            </div>
          </div>
        )}

        <div className="flex w-full bg-slate-300 rounded-full  mb-2 ml-5  h-1 "></div>
        {isINte ? (
          <div className="flex items-center gap-10">
            <button className="bg-blue-700 opacity-45 text-white w-fit text-[0.6rem] px-5 py-2 ml-5  rounded-md ">
              Applied
            </button>
            <button
              className="text-blue-800 underline text-[0.8rem]"
              onClick={getInstDetails}
            >
              {" "}
              Get Details
            </button>
          </div>
        ) : (
          <button
            onClick={handleClick}
            className="bg-green-700 text-white w-fit text-[0.6rem] px-5 py-2 ml-5  rounded-md "
          >
            Interested
          </button>
        )}
      </div>
    </div>
  );
};

export default AdmissionScreenCard;
