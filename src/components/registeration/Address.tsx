import React from "react";
import {
  faClock,
  faDollarSign,
  faSearch,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const Address = () => {
  return (
    <div className="register bg-offWhite p-6 w-[90%] lg:w-[40%] md:h-[60%] lg:h-[90%] sm:p-12 rounded-3xl">
      <div className="first-row flex justify-between">
        <div className="pages flex space-x-5">
          <h2 className="text-textCol font-semibold text-2xl">Add address</h2>
          <p className="text-numPagesCol font-semibold text-2xl">3 of 3</p>
        </div>
        <div className="cancel">
          <button>
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="border-2 border-x-regTextCol p-5 space-x-5 rounded-2xl outline-none shadow-none mt-10 ">
        <FontAwesomeIcon icon={faSearch} className="text-2xl text-regTextCol" />
        <input
          type="text"
          name="text"
          className="outline-none border-transparent shadow-none bg-transparent border-none"
          placeholder="Search for address "
        />
      </div>
      <p className="text-base">Your address is not visible to other users</p>
      <div className="location flex mt-10 space-x-5">
        <button className="useCurrent space-x-3 border rounded-2xl p-2">
          <span>
            <FontAwesomeIcon icon={faLocationDot} className="text-manual" />
          </span>
          <span className="text-manual font-semibold">
            Use current location
          </span>
        </button>
        <button className="text-manual font-semibold border rounded-2xl p-2">
          Add manually
        </button>
      </div>
      <div className="text mt-20">
        <h2 className="text-textCol  text-2xl font-bold">
          Sharing your address shows:
        </h2>
        <div className="mt-10 font-semibold">
          <div className="people flex space-x-3 text-someCol font-semibold">
            <p>
              <FontAwesomeIcon icon={faUsers} className="" />
            </p>
            <p>People near you</p>
          </div>
          <div className="time flex space-x-3 text-someCol">
            <p>
              <FontAwesomeIcon icon={faClock} className="" />
            </p>
            <p>Estimated delivery time</p>
          </div>
          <div className="costs flex space-x-3 text-someCol">
            <p>
              <FontAwesomeIcon icon={faDollarSign} className="" />
            </p>
            <p>Estimate shipping costs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
