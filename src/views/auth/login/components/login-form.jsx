import { ReactComponent as EyeSlash } from '@/assets/svgs/eye-slash.svg'
import { ReactComponent as Eye } from '@/assets/svgs/eye.svg'
import { Styling } from "@/utils/styles/index.js";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


export const LoginForm = ( props ) => {
  const { submit } = props;
  const [showPassword, setShowPassword] = useState(false);

  useEffect(
    () => {},
    []
  )

  const loginSchema = Yup.object({
    username: Yup.string().email().required('Kindly provide a valid email address'),
    password: Yup.string().required('No password provided').min(8, 'Password is to should contain a minimum of 8 characters')
  })
  const { values, handleBlur, handleChange, handleSubmit, errors, touched, isValid } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      submit(values);
    },
    onReset: () => {
      console.log("Nothing here, just reset the form");
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-[#F4F4EF]">
        <div className="my-4">

          {/* Email */}
          <label htmlFor="username" className="block">
            <span>Email </span>
            <input type="email"
                   name="username"
                   id="username"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.username}
                   aria-invalid={!!errors.username && !!touched}
                   className={Styling.input}
                   placeholder="" />
            <p className={Styling.error_message}>
              { errors.username }
            </p>
          </label>
        </div>


        {/* Password */}
        <div className="my-6">
          <label className="relative block">
            <span>Password </span>
            <span onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer top-1/2 pb-2 right-0 flex items-center pl-2">
                    <i>
                      {showPassword ? <Eye /> : <EyeSlash />}
                    </i>
            </span>
            <input type={ showPassword ? "text" : "password"}
                   name="password"
                   id="password"
                   onChange={handleChange}
                   onBlur={handleBlur}
                   value={values.password}
                   aria-invalid={!!errors.password && !!touched.password}
                   className={Styling.input}
                   placeholder="" />
            <p className={Styling.error_message}>
              { errors.password }
            </p>
          </label>
        </div>

        <div>
          <button type="submit"
                  disabled={!isValid}
                  className="bg-black text-white w-full py-2 disabled:opacity-50">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

