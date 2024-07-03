import {
  faClock,
  faDollarSign,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
type address = {
  search: string;
};
const initialValues: address = {
  search: "",
};

const validate = (values: string) => {
  const errors: address = {
    search: "",
  };
  if (!values.search) {
    errors.search = "This field is Required";
  }
  return errors;
};
const Address = () => {
  const onSubmit = () => {
    nextAddress();
  };
  const navigate = useNavigate();
  const nextAddress = () => {
    navigate("/Info");
  };
  const showMap = () => {
    navigate("/showMap");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-100">
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
        <form action="" onSubmit={formik.handleSubmit}>
          <label
            htmlFor="default-search"
            className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative py-10">
            <div className="absolute inset-y-0 start-0 flex items-center ps-1 bottom-4pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="default-search"
              className=" w-full ps-10 text-sm text-gray-900 outline-none rounded-lg  p-5 border "
              placeholder="Search"
              value={formik.values.search}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.search && formik.errors.search ? (
            <div className="text-red-600 mt-2">{formik.errors.search}</div>
          ) : null}
          <p className="text-base mt-5">
            Your address is not visible to other users
          </p>
          <div className="location flex mt-10 space-x-5">
            <button
              onClick={showMap}
              type="button"
              className="useCurrent space-x-3 border rounded-2xl p-2"
            >
              <span>
                <FontAwesomeIcon icon={faLocationDot} className="text-manual" />
              </span>
              <span className="text-manual font-semibold">
                Use current location
              </span>
            </button>
            <button
              type="submit"
              className="text-manual font-semibold border rounded-2xl p-2"
            >
              Add manually
            </button>
          </div>
        </form>

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
    </div>
  );
};

export default Address;
