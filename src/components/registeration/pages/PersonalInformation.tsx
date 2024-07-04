import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useFormik, FormikErrors } from "formik";

type Info = {
  fullName: string;
  phoneNumber: string;
  birthday: string;
};

const initialValues: Info = {
  fullName: "",
  phoneNumber: "",
  birthday: "",
};

const validate = (values: Info) => {
  const errors: FormikErrors<Info> = {};
  if (!values.fullName) {
    errors.fullName = "This field is Required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "This field is Required";
  }
  if (!values.birthday) {
    errors.birthday = "This field is Required";
  }

  return errors;
};

const PersonalInformation: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    address();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

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
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="fullName"
            className="p-5 border rounded-2xl outline-none w-full mt-10"
            placeholder="Full name"
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-600 mt-2">{formik.errors.fullName}</div>
          ) : null}
          <div className="gender mt-5 flex items-center space-x-4">
            <label htmlFor="gender" className="text-regTextCol">
              Gender:
            </label>
            <div className="flex items-center space-x-2">
              <input type="radio" name="gender" id="male" />
              <p>Male</p>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio" name="gender" id="female" />
              <p>Female</p>
            </div>
          </div>
          <p className="flex items-center space-x-3 text-textCol font-semibold mt-10 text-base">
            <span className="rounded-full w-5 h-5 text-center flex items-center justify-center  border-2 border-textCol">
              i
            </span>
            <span>The phone number and birthday are only visible to you</span>
          </p>
          <div className="flex space-x-3 mt-2">
            <select
              id="custom-select"
              className="rounded-2xl border px-10 text-regTextCol"
            >
              <option value="Uruguay">+598</option>
              <option value="nigeriaCode">+234</option>
              <option value="Bahamas">+242</option>
              <option value="USA">+1</option>
              <option value="Venezuela">+58</option>
            </select>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              className="border p-5 w-96 rounded-2xl"
              placeholder="Phone number"
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
          </div>
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-600 mt-2 float-left">
              {formik.errors.phoneNumber}
            </div>
          ) : null}
          <input
            type="date"
            name="birthday"
            className="p-5 border rounded-2xl w-full mt-10"
            value={formik.values.birthday}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div className="text-red-600 mt-2">{formik.errors.birthday}</div>
          ) : null}
          <p className="text-regTextCol text-base">
            Let us know about your birthday so as not to miss a gift
          </p>
          <button
            className="register-btn mt-7 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
            type="submit"
          >
            Save Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
