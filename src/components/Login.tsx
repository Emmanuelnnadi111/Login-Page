import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faApple, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FormikErrors, useFormik } from "formik";
import Header from "./header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const validate = (values: FormValues): FormikErrors<FormValues> => {
  const errors: FormikErrors<FormValues> = {};
  if (!values.password) {
    errors.password = "This field is Required";
  }
  if (!values.email) {
    errors.email = "This field is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values: FormValues) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      dashboard();
      toast.success("User Logged In successfully!", {
        position: "top-right",
      });
    } catch (error) {
      toast.error(String(error), { position: "bottom-right" });
    }
  };

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const dashboard = () => {
    navigate("/MainDashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen flex w-full items-center justify-center bg-slate-100">
      <div className="register bg-offWhite p-6 w-[90%] lg:w-[35%] md:h-[60%] lg:h-[90%] sm:p-12 rounded-3xl">
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
                className="text-facebookCol"
              />
            </div>
            <div className="google-icon rounded-full w-12 h-12 text-center flex items-center justify-center  bg-iconsBgCol">
              <img src="images/super-g.png" alt="google" />
            </div>
          </div>
        </div>
        <p className="text-regTextCol">or login with email</p>

        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-6 pt-5"
          >
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-5 border rounded-2xl outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 ">{formik.errors.email}</div>
            ) : null}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="p-5 border-2 rounded-2xl outline-none border-borderCol w-full "
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="absolute top-6 right-4 text-2xl "
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 ">{formik.errors.password}</div>
            ) : null}
            <button
              className="register-btn py-5 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
              type="submit"
            >
              Login to Dashboard
            </button>
          </form>
        </div>

        <div className="terms flex mt-4 space-x-5">
          <input
            type="checkbox"
            name=""
            id="custom-checkbox"
            className="w-4 h-4 border border-pink-400 rounded bg-pink-400 focus:ring-3 focus:ring-blue-300 dark:bg-pink-600 dark:border-pink-500 dark:focus:ring-blue-600 dark:ring-offset-pink-800 dark:focus:ring-offset-pink-800"
            required
          />
          <p className="text-sm text-textCol">Remember me</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
