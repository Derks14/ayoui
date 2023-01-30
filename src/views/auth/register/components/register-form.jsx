import { useFormik } from "formik";
import * as Yup from "yup";
import { Styling } from "@/utils/styles/index.js";
import React, { useState } from "react";
import { ReactComponent as EyeSlash } from "@/assets/svgs/eye-slash.svg";
import { ReactComponent as Eye } from "@/assets/svgs/eye.svg";
import {
  ArrowPathIcon,
  AtSymbolIcon,
  BuildingOffice2Icon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline/index.js";

export const RegisterForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    mutation: { isLoading, mutate },
  } = props;

  const schema = Yup.object({
    full_name: Yup.string().required("Full name required"),
    work_email: Yup.string()
      .email("Invalid work email")
      .required("Email address required"),
    company: Yup.string().required("Kindly provide company name"),
    password: Yup.string()
      .required("No password provided")
      .min(8, "Password must be a minimum of 8 characters")
      .matches(/^(?=.*[a-z])/, "Password Must Contain One Lowercase Character")
      .matches(/^(?=.*[A-Z])/, "Password Must Contain One Uppercase Character")
      .matches(/^(?=.*[0-9])/, "Password Must Contain One Number Character")
      .matches(
        // /^(?=.*[!:@;+_?#\$%\^&\*])/,
        /^(?=.*[!:@;+_?#$%^&*])/,
        "  Must Contain  One Special Case Character"
      ),
    confirm_password: Yup.string()
      .required("No password provided")
      .min(8, "Password must be a minimum of 8 characters")
      .matches(/^(?=.*[a-z])/, "Password Must Contain One Lowercase Character")
      .matches(/^(?=.*[A-Z])/, "Password Must Contain One Uppercase Character")
      .matches(/^(?=.*[0-9])/, "Password Must Contain One Number Character")
      .matches(
        // /^(?=.*[!:@;+_?#\$%\^&\*])/,
        /^(?=.*[!:@;+_?#$%^&*])/,
        "  Must Contain  One Special Case Character"
      )
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const {
    values,
    handleSubmit,
    handleBlur,
    errors,
    touched,
    isValid,
    handleChange,
  } = useFormik({
    initialValues: {
      full_name: "",
      work_email: "",
      company: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("submitted values ", values);
    },
    onReset: () => {},
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="full_name" className="block">
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              <span>Full name </span>
            </div>
            <input
              type="text"
              name="full_name"
              id="full_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.full_name}
              aria-invalid={!!errors.full_name && !!touched.full_name}
              className={Styling.input}
              placeholder="Full name eg. John Doe"
            />
            <small className={Styling.error_message}>{errors.full_name}</small>
          </label>
        </div>
        <div className="mt-3">
          <label htmlFor="work_email" className="block">
            <div className="flex items-center gap-2">
              <AtSymbolIcon className="h-4 w-4" />
              <span>Work Email </span>
            </div>
            <input
              type="email"
              name="work_email"
              id="work_email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.work_email}
              aria-invalid={!!errors.work_email && !!touched.work_email}
              className={Styling.input}
              placeholder="register@titansindustries.com"
            />
            <small className={Styling.error_message}>{errors.work_email}</small>
          </label>
        </div>
        <div className="mt-3">
          <label htmlFor="company_name" className="block">
            <div className="flex items-center gap-2">
              <BuildingOffice2Icon className="h-4 w-4" />
              <span>Company</span>
            </div>
            <input
              type="text"
              id="company"
              name="company"
              className={Styling.input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.company}
              aria-invalid={!!errors.company && !!touched.company}
              placeholder="Titans Industries"
            />
            <small className={Styling.error_message}>{errors.company}</small>
          </label>
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block relative">
            <div className="flex items-center gap-2">
              <LockClosedIcon className="h-4 w-4" />
              <span>Password</span>
            </div>
            {/* eslint-disable-next-line */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer top-1/2 pb-2 right-0 flex items-center pl-2"
            >
              <i>
                {showPassword ? (
                  <span>
                    <EyeIcon className="h-4 w-4" />
                  </span>
                ) : (
                  <span>
                    <EyeSlashIcon className="h-4 w-4" />
                  </span>
                )}
              </i>
            </span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              aria-invalid={!!errors.password && !!touched.password}
              onBlur={handleBlur}
              className={Styling.input}
              placeholder="*********"
            />
            <small className={Styling.error_message}>{errors.password}</small>
          </label>
        </div>
        <div className="my-4">
          <label htmlFor="confirm_password" className="block relative">
            <div className="flex items-center gap-2">
              <LockClosedIcon className="h-4 w-4" />
              <span>Confirm Password</span>
            </div>
            {/* eslint-disable-next-line */}
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute cursor-pointer top-1/2 pb-2 right-0 flex items-center pl-2"
            >
              <i>
                {showPassword ? (
                  <span>
                    <EyeIcon className="h-4 w-4" />
                  </span>
                ) : (
                  <span>
                    <EyeSlashIcon className="h-4 w-4" />
                  </span>
                )}
              </i>
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password"
              name="confirm_password"
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={
                !!errors.confirm_password && !!touched.confirm_password
              }
              className={Styling.input}
              placeholder="*********"
            />
          </label>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            disabled={!isValid}
            className="bg-black text-white w-full py-2 rounded transition-opacity ease-in duration-700 disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex w-full justify-center align-middle ">
                <ArrowPathIcon className="h-4 animate-spin" />
              </span>
            ) : (
              <span>Sign Up</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
