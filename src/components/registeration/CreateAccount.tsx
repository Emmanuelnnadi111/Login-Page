import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faApple, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import GoogleImage from "/images/super-g.png";
import { Formik } from "formik";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const personInfor = () => {
    navigate("/PersonalInformation");
  };
  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-300">
      <div className="register bg-offWhite p-6 w-[90%] lg:w-[35%] md:h-[60%] lg:h-[90%] sm:p-12 rounded-3xl ">
        <div className="first-row flex justify-between">
          <Header />
          <div className="cancel">
            <button>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
        <div className="brand-icons py-10">
          <div className="icons flex space-x-10 text-2xl">
            <div className="apple-icon rounded-full w-12 h-12 text-center flex items-center justify-center  bg-iconsBgCol">
              <FontAwesomeIcon icon={faApple} />
            </div>
            <div className="facebook-icon rounded-full w-12 h-12 text-center flex items-center justify-center  bg-iconsBgCol">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-faceboolCol"
              />
            </div>
            <div className="google-icon rounded-full w-12 h-12 text-center flex items-center justify-center  bg-iconsBgCol">
              <img src={GoogleImage} alt="google" />
            </div>
          </div>
        </div>
        <p className="text-regTextCol">or register with email</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 pt-5"
              >
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="p-5 border rounded-2xl outline-none"
                />
                {errors.email && touched.email && errors.email}
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="p-5 border-2 rounded-2xl outline-none border-borderCol w-full "
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className="absolute top-6 right-4 text-2xl "
                  />
                </div>
                {errors.password && touched.password && errors.password}
              </form>
              <p className="text-regTextCol">8+ characters</p>
              <button
                className="register-btn mt-7 py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
                type="submit"
                disabled={isSubmitting}
                onClick={personInfor}
              >
                Create account
              </button>
            </div>
          )}
        </Formik>
        <div className="terms flex mt-4 space-x-5">
          <input
            type="checkbox"
            name=""
            id="custom-checkbox"
            className="w-4 h-4 border border-pink-400 rounded bg-pink-400 focus:ring-3 focus:ring-blue-300 dark:bg-pink-600 dark:border-pink-500 dark:focus:ring-blue-600 dark:ring-offset-pink-800 dark:focus:ring-offset-pink-800"
            required
          />
          <p className="text-sm">Send me new and promotions</p>
        </div>
        <p className="text-center mt-4 text-base text-regTextCol ">
          By continuing I agree with the
          <span className="text-footerCol">Terms & Conditions,</span>
          <br />
          <span className="text-footerCol">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
