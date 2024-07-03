import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const SuccessRegistration = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-100">
      <div className="register bg-offWhite  w-[90%] lg:w-[35%] md:h-[60%] lg:h-[90%] sm: rounded-3xl">
        <div className="bg-successBgCol w-full h-80  rounded-t-2xl">
          <div className="flex m-auto items-start justify-center">
            <img src="images/Image.png" alt="" />
            <button className="mt-10 relative left-10">
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            </button>
          </div>
        </div>
        <h1 className="text-textCol text-5xl font-bold px-10 py-14">
          You are successfully registered!
        </h1>
        <div className="px-10 ">
          <button
            className="register-btn mt-10 py-4 w- rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
            type="submit"
            onClick={login}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessRegistration;
