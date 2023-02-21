import { useFormik } from "formik";
import * as Yup from "yup";
import { Styling } from "@/utils/styles/index.js";
import React, { useState } from "react";

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
    first_name: Yup.string().required("First name required"),
    last_name: Yup.string().required("Last name required"),
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
      first_name: "",
      last_name: "",
      work_email: "",
      company: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const payload = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.work_email,
        company: values.company,
        password: values.password,
      };
      mutate(payload);
    },
    onReset: () => {},
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4 mt-6">
          <div className=" w-full">
            <label htmlFor="last_name" className="block">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>Last name </span>
              </div>
              <input
                type="text"
                name="last_name"
                id="last_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.last_name}
                aria-invalid={!!errors.last_name && !!touched.last_name}
                className={Styling.input}
                placeholder="Last name eg. Doe"
              />
              <small className={Styling.error_message}>
                {errors.last_name}
              </small>
            </label>
          </div>
          <div className=" w-full">
            <label htmlFor="first_name" className="block">
              <div className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                <span>First name </span>
              </div>
              <input
                type="text"
                name="first_name"
                id="first_name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.first_name}
                aria-invalid={!!errors.first_name && !!touched.first_name}
                className={Styling.input}
                placeholder="First name eg. John"
              />
              <small className={Styling.error_message}>
                {errors.first_name}
              </small>
            </label>
          </div>
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
            <small className={Styling.error_message}>
              {errors.confirm_password}
            </small>
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
