import React from 'react';
import { Outlet } from 'react-router-dom';

export const Auth = () => {
  return (
    <>
      <section className="h-screen">
        <div className="md:grid grid-cols-3 h-full">
          <div className="">
            <Outlet />
          </div>
          <div className="col-span-2 p-2 ">
            <div className="bg-black  rounded-[20px] h-full">
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
