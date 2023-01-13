import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <section className="">
        <div className="md:grid grid-cols-3  h-screen place-items-stretch">
          <div className="">
            <Outlet />
          </div>
          <div className="col-span-2 p-2 ">
            <div className="bg-black  rounded-[20px] h-full">one</div>
          </div>
        </div>
      </section>
    </>
  );
};
