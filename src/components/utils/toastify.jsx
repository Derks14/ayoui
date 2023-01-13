import React, { useState } from "react";
import { Action, Description, Root, Title } from "@radix-ui/react-toast";
import { get } from "lodash";

export let toastify = () => {};

export const ToastNotification = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  toastify = (options) => {
    setData({
      ...data,
      ...options,
    });
    setCount((old_count) => old_count + 1);
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div role="alert" key={index}>
          <Root
            className="bg-antique py-2 px-4 rounded"
            role="alert"
            duration={3000}
            key={index}
          >
            <div className="flex items-center justify-between">
              <div>
                <Title className="ToastTitle">
                  {get(data, "title", "Sorry")}
                </Title>
                {data.description && (
                  <Description asChild>
                    <p>{data?.description || "Description"} </p>
                  </Description>
                )}
              </div>
              <Action
                className="ToastAction"
                asChild
                altText="Goto schedule to undo"
              >
                <button className="Button small green">Undo</button>
              </Action>
            </div>
          </Root>
        </div>
      ))}
    </>
  );
};
