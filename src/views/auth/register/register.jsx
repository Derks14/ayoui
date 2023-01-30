import { RegisterForm } from "@/views/auth/register/components/register-form.jsx";
import { useMutation } from "@tanstack/react-query";
import { Authentication } from "@/services/authentication/index.js";
import { Link } from "react-router-dom";
import React from "react";

export const Register = () => {
  const register_mutation = useMutation({
    mutationFn: Authentication.register,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="flex flex-col h-full">
      <div className="m-2">
        <h2 className="text-xl font-thin text">Untitled</h2>
      </div>
      <div className="grow animate-fadeinfast">
        <div className="h-full flex flex-col justify-center w-9/12 mx-auto">
          <div>
            {/* Welcome messages */}
            <div className="my-1 py-1">
              <div>
                <h1 className="font-light text-3xl">Sign Up</h1>
              </div>

              <div className="py-1">
                <p>Register, invite your team and talk to your customers </p>
              </div>
            </div>
          </div>
          <div>
            <RegisterForm mutation={register_mutation} />
          </div>
          <div>
            <div className="mt-4">
              <p>
                Already have an account ?
                <Link className="font-medium ml-1" to="/auth/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between m-2">
          <div>© 2023 Default Inc ™</div>
          <div>help@default.inc</div>
        </div>
      </div>
    </div>
  );
};
