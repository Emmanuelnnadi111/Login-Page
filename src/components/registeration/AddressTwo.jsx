import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddressTwo = () => {
  return (
    <div className="register bg-offWhite p-6 w-[90%] lg:w-[35%] md:h-[60%] lg:h-[90%] sm:p-12 rounded-3xl">
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
      <form action="address" className="mt-10">
        <input
          type="text"
          name="street"
          id="street"
          className="p-4 border rounded-2xl outline-none w-full mt-5"
          placeholder="Street address"
        />

        <input
          type="text"
          name="apartment"
          id="apartment"
          className="p-4 border rounded-2xl outline-none w-full mt-5 custom-flex"
          placeholder="Apartment Optional"
        />
        <input
          type="text"
          name="city"
          id="city"
          className="p-4 border rounded-2xl outline-none w-full mt-5"
          placeholder="City "
        />
        <div className="flex space-x-5">
          <input
            type="text"
            name="state"
            id="state"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="State"
          />
          <input
            type="number"
            name="zip"
            id="zip"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="Zip code"
          />
        </div>
        <button
          className="register-btn mt-32 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
          type="submit"
        >
          Save information
        </button>
      </form>
    </div>
  );
};

export default AddressTwo;
