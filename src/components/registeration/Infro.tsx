import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const formik = useFormik({
    initialValues: {
      street: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
    },
    // onSubmit: (values) => {
    //   console.log(values);
    //   successPage();
    // },
  });
  console.log("form values:", formik.values);
  const navigate = useNavigate();
  const successPage = () => {
    navigate("/SuccessRegistration");
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    successPage();
  };
  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-300">
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
        <form action="address" onSubmit={handleSubmit} className="mt-10">
          <input
            type="text"
            name="street"
            id="street"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="Street address"
            value={formik.values.street}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="apartment"
            id="apartment"
            className="p-4 border rounded-2xl outline-none w-full mt-5 custom-flex"
            placeholder="Apartment Optional"
            value={formik.values.apartment}
            onChange={formik.handleChange}
          />
          <input
            type="text"
            name="city"
            id="city"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="City "
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          <div className="flex space-x-5">
            <input
              type="text"
              name="state"
              id="state"
              className="p-4 border rounded-2xl outline-none w-full mt-5"
              placeholder="State"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
            <input
              type="number"
              name="zip"
              id="zip"
              className="p-4 border rounded-2xl outline-none w-full mt-5"
              placeholder="Zip code"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
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
    </div>
  );
};
export default Info;
