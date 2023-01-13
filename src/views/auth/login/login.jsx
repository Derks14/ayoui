import React, { useContext } from "react";

import { Authentication } from "@/services/authentication/index.js";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "./components/login-form";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "@/context/UserContext.js";

export const Login = () => {
  const [, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  const login_mutation = useMutation({
    mutationFn: Authentication.authenticate,
    onSuccess: (results) => {
      const {
        data: { data },
      } = results;

      setUser(data);
      navigate("/home");
    },
  });

  return (
    <div className="flex flex-col h-full">
      <div className="m-2">
        <h2 className="text-xl font-thin text">Untitled</h2>
      </div>
      <div className="grow">
        <div className="h-full flex flex-col justify-center w-9/12 mx-auto">
          <div>
            {/* Welcome messages */}
            <div className="my-2 py-2">
              <div>
                <h1 className="font-light text-5xl">Agent Login</h1>
              </div>

              <div className="py-2">
                <p>Hey, Enter your details to sign in to your account </p>
              </div>
            </div>

            {/* form */}
            <div>
              <LoginForm mutation={login_mutation} />
              <div>
                {login_mutation.isError ? (
                  <div
                    className="flex p-4 my-4 text-sm text-red-700 border border-red-300 rounded-lg dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 inline w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium mr-2">Sorry!</span>
                      {login_mutation.error.message}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <div className="mt-4">
                <p>
                  Dont have an account ?{" "}
                  <Link className="font-medium" to="/request-account">
                    Request Now
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
