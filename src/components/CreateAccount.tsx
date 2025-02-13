import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faApple, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import GoogleImage from "/images/super-g.png";
import { useFormik, FormikErrors, FormikValues } from "formik";
import Header from "./header/Header";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

type Info = {
  email: string;
  password: string;
};

const initialValues: Info = {
  email: "",
  password: "",
};

const validate = (values: Info) => {
  const errors: FormikErrors<Info> = {};
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

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();

  const personInfo = () => {
    navigate("/PersonalInformation");
  };

  const onSubmit = async (values: FormikValues) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        await setDoc(userRef, {
          email: user.email,
        });
        console.log("User document created!");
        toast.success("Email added successfully", { position: "top-left" });
        personInfo();
      }
      console.log("user is registered successfully");
    } catch (error) {
      toast.error(String(error), { position: "bottom-right" });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const [showPassword, setShowPassword] = useState(false);

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
            <div className="apple-icon rounded-full w-12 h-12 text-center flex items-center justify-center bg-iconsBgCol">
              <FontAwesomeIcon icon={faApple} />
            </div>
            <div className="facebook-icon rounded-full w-12 h-12 text-center flex items-center justify-center bg-iconsBgCol">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-facebookCol"
              />
            </div>
            <div className="google-icon rounded-full w-12 h-12 text-center flex items-center justify-center bg-iconsBgCol">
              <img src={GoogleImage} alt="google" />
            </div>
          </div>
        </div>
        <p className="text-regTextCol">or register with email</p>
        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-3 pt-5"
          >
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="p-4 border rounded-2xl outline-none"
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
                className="p-4 border-2 rounded-2xl outline-none border-borderCol w-full"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="absolute top-6 right-4 text-2xl"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600 ">{formik.errors.password}</div>
            ) : null}
            <p className="text-regTextCol">8+ characters</p>
            <button
              className="register-btn py-4 rounded-2xl text-white font-semibold text-xl w-full text-center bg-borderCol"
              type="submit"
            >
              Create account
            </button>
          </form>
        </div>
        <div className="terms flex mt-4 space-x-5">
          <input
            type="checkbox"
            id="custom-checkbox"
            className="w-4 h-4 border border-pink-400 rounded bg-pink-400 focus:ring-3 focus:ring-blue-300 dark:bg-pink-600 dark:border-pink-500 dark:focus:ring-blue-600 dark:ring-offset-pink-800 dark:focus:ring-offset-pink-800"
            required
          />
          <p className="text-sm">Send me new and promotions</p>
        </div>
        <p className="text-center mt-4 text-base text-regTextCol">
          By continuing I agree with the
          <span className="text-footerCol"> Terms & Conditions,</span>
          <br />
          <span className="text-footerCol">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
