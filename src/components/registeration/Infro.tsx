import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
type info = {
  street: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
};

const initialValues = {
  street: "",
  apartment: "",
  city: "",
  state: "",
  zip: "",
};

const validate = (values) => {
  const errors: info = {};
  if (!values.street) {
    errors.street = "This field is Required";
  }
  if (!values.city) {
    errors.city = "This field is Required";
  }
  if (!values.state) {
    errors.state = "This field is Required";
  }
  if (!values.zip) {
    errors.zip = "This field is Required";
  }
  if (!values.apartment) {
    errors.apartment = "This field is Required";
  }
  return errors;
};

const Info = () => {
  const onSubmit = (values) => {
    console.log(values);
    successPage();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const navigate = useNavigate();
  const successPage = () => {
    navigate("/SuccessRegistration");
  };

  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-100">
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
        <form action="address" onSubmit={formik.handleSubmit} className="mt-5">
          <input
            type="text"
            name="street"
            id="street"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="Street address"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.street && formik.errors.street ? (
            <div className="text-red-600 mt-2">{formik.errors.street}</div>
          ) : null}
          <input
            type="text"
            name="apartment"
            id="apartment"
            className="p-4 border rounded-2xl outline-none w-full mt-5 custom-flex"
            placeholder="Apartment Optional"
            value={formik.values.apartment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.apartment && formik.errors.apartment ? (
            <div className="text-red-600 mt-2">{formik.errors.apartment}</div>
          ) : null}
          <input
            type="text"
            name="city"
            id="city"
            className="p-4 border rounded-2xl outline-none w-full mt-5"
            placeholder="City "
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-600 mt-2">{formik.errors.city}</div>
          ) : null}
          <div className="flex  space-x-5">
            <div className="flex flex-col">
              <input
                type="text"
                name="state"
                id="state"
                className="p-4 border rounded-2xl outline-none w-full mt-5"
                placeholder="State"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <span className="text-red-600 mt-3">{formik.errors.state}</span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <input
                type="number"
                name="zip"
                id="zip"
                className="p-4 border rounded-2xl outline-none w-full mt-5"
                placeholder="Zip code"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zip && formik.errors.zip ? (
                <div className="text-red-600 mt-3">{formik.errors.zip}</div>
              ) : null}
            </div>
          </div>
          <button
            className="register-btn mt-10 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
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
