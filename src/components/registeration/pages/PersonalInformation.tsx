import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const address = () => {
    navigate("/address");
  };

  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-100">
      <div className="register bg-offWhite p-6 w-[90%] lg:w-[35%] md:h-[60%] lg:h-[90%] sm:p-12 rounded-3xl">
        <div className="first-row flex justify-between">
          <div className="pages flex space-x-5">
            <h2 className="text-textCol font-semibold text-2xl">
              Personal Information
            </h2>
            <p className="text-numPagesCol font-semibold text-2xl">2 of 3</p>
          </div>
          <div className="cancel">
            <button>
              <FontAwesomeIcon icon={faXmark} className="text-2xl" />
            </button>
          </div>
        </div>
        <input
          type="text"
          name="text"
          className="p-5 border rounded-2xl outline-none w-full mt-10"
          placeholder="Full name"
        />
        <div className="gender mt-10 flex items-center space-x-4">
          <label htmlFor="gender" className="text-regTextCol">
            Gender:
          </label>
          <div className="flex items-center space-x-2">
            <input type="radio" name="male" id="male" />
            <p>Male</p>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" name="female" id="female" />
            <p>Female</p>
          </div>
        </div>
        <p className="flex items-center space-x-3 text-textCol font-semibold mt-10 text-base">
          <span className="rounded-full w-5 h-5 text-center flex items-center justify-center  border-2 border-textCol">
            i
          </span>
          <span>The phone number and birthday are only visible to you</span>
        </p>
        <form action="" className="mt-10 flex space-x-6 justify-between">
          <select
            id="custom-select"
            className="rounded-2xl border px-10 text-regTextCol"
          >
            <option value="Uruguay">+598</option>
            <option value="nigeriaCOde">+234</option>
            <option value=" Bahamas ">+242</option>
            <option value="USA">+1</option>
            <option value="Venezuela ">+58</option>
          </select>
          <input
            type="number"
            name="phone-number"
            id="phoneNumber"
            className="border p-5 w-96 rounded-2xl"
            placeholder="Phone number"
          />
        </form>
        <input type="date" className="p-5 border rounded-2xl w-full mt-10" />
        <p className="text-regTextCol text-base">
          Let us know about your birthday so as not to miss a gift
        </p>
        <button
          className="register-btn mt-7 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
          type="submit"
          onClick={address}
        >
          Save Information
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
