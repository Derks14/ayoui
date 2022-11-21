import { Authentication } from "@/services/authentication/index.js";
import { Link } from "react-router-dom";
import { LoginForm } from "./components/login-form";

import React from "react";


export const Login = () => {

  // const [showModal, setShowModal] = useState(false);

  const signIn = async (data) => {
    try {
      console.log("About to authenticate user ");
      const response = await Authentication.authenticate(data);
      console.log(response);
    } catch (e) {
    }finally {

    }
  }
  //
  // const onClick = () => setShowModal(!showModal);
  //
  // const onClose = () => setShowModal(false);

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-thin text">Untitled</h2>
      </div>
      <section className="h-full flex flex-col justify-center w-9/12 mx-auto">

        <div>

          {/* Welcome messages */}
          <div className="mb-12">
            <div>
              <h1 className="font-light text-5xl">Agent Login
              </h1>
            </div>

            <div className="my-2">
              <p>Hey, Enter your details to sign in to your account </p>
            </div>
          </div>


          {/* form */}
          <div>
            <LoginForm submit={signIn} />
          </div>


          <div>
            <div className="mt-4">
              <p>Dont have an account ? <Link className="font-medium">Request Now</Link> </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
