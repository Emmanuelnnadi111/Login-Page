import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

interface InfoFormValues {
  street: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
}

const initialValues: InfoFormValues = {
  street: "",
  apartment: "",
  city: "",
  state: "",
  zip: "",
};

const validate = (values: InfoFormValues) => {
  const errors: Partial<InfoFormValues> = {};
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

const Info: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: InfoFormValues) => {
    console.log(values);
    successPage();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const successPage = () => {
    navigate("/SuccessRegistration");
  };

  return (
    <div className="h-screen flex w-full items-center justify-center bg-gray-100">
      <div className="register bg-white p-6 w-[90%] lg:w-[35%] md:h-[60%] lg:h-[90%] sm:p-12 rounded-3xl">
        <div className="first-row flex justify-between">
          <div className="pages flex space-x-5">
            <h2 className="text-textCol font-semibold text-2xl">Add address</h2>
            <p className="text-numPagesCol font-semibold text-2xl">3 of 3</p>
          </div>
          <div className="cancel">
            <button onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
          </div>
        </div>
        <form onSubmit={formik.handleSubmit} className="mt-6">
          <input
            type="text"
            id="street"
            name="street"
            className="p-4 border rounded-2xl outline-none w-full mt-6"
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
            id="apartment"
            name="apartment"
            className="p-4 border rounded-2xl outline-none w-full mt-6"
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
            id="city"
            name="city"
            className="p-4 border rounded-2xl outline-none w-full mt-6"
            placeholder="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-600 mt-2">{formik.errors.city}</div>
          ) : null}
          <div className="flex space-x-5">
            <div>
              <input
                type="text"
                id="state"
                name="state"
                className="p-4 border rounded-2xl outline-none w-full mt-6"
                placeholder="State"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-red-600 mt-2">{formik.errors.state}</div>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                id="zip"
                name="zip"
                className="p-4 border rounded-2xl outline-none w-full mt-6"
                placeholder="Zip code"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.zip && formik.errors.zip ? (
                <div className="text-red-600 mt-2">{formik.errors.zip}</div>
              ) : null}
            </div>
          </div>
          <button
            type="submit"
            className="mt-7  py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
          >
            Save information
          </button>
        </form>
      </div>
    </div>
  );
};

export default Info;
