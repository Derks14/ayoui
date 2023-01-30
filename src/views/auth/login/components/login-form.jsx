import { ReactComponent as EyeSlash } from "@/assets/svgs/eye-slash.svg";
import { ReactComponent as Eye } from "@/assets/svgs/eye.svg";
import { Styling } from "@/utils/styles/index.js";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ArrowPathIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline/index.js";

export const LoginForm = (props) => {
  const {
    mutation: { isLoading, mutate },
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object({
    username: Yup.string()
      .email("Invalid email address")
      .required("Kindly provide a valid email address"),
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
  });
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      mutate(values);
    },
    onReset: () => {},
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          {/* Email */}
          <label htmlFor="username" className="block">
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4" />
              <span>Work Email </span>
            </div>{" "}
            <input
              type="email"
              name="username"
              id="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
              aria-invalid={!!errors.username && !!touched}
              className={Styling.input}
              placeholder="email@yourcompany.com"
            />
            <p className={Styling.error_message}>{errors.username}</p>
          </label>
        </div>

        {/* Password */}
        <div className="my-4">
          <label className="relative block">
            <div className="flex items-center gap-2">
              <LockClosedIcon className="h-4 w-4" />
              <span>Password</span>
            </div>
            {/* eslint-disable-next-line */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer top-1/2 pb-2 right-0 flex items-center pl-2"
            >
              <i>{showPassword ? <Eye /> : <EyeSlash />}</i>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              aria-invalid={!!errors.password && !!touched.password}
              className={Styling.input}
              placeholder="password"
            />
            <p className={Styling.error_message}>{errors.password}</p>
          </label>
        </div>

        <div className="my-4">
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
              <span>Login</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
