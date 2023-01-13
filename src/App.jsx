import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import * as Toast from "@radix-ui/react-toast";
import { ToastViewport } from "@radix-ui/react-toast";
import { ToastNotification } from "@/components/utils/toastify.jsx";
import { Notification } from "@/components/utils/notify";
import { Core } from "@/layouts/Core.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="bg-antique font-ascircular min-h-screen border-box">
      <Core>
        <Toast.Provider swipeDirection="right">
          <Outlet />
          <ToastNotification />
          <Notification />

          <ToastViewport className="p-8 fixed bottom-0 right-0 flex flex-col gap-3 w-96 max-w-[100vw] m-0 list-none z-[2147483647] outline-none"></ToastViewport>
        </Toast.Provider>
      </Core>
    </main>
  );
}

export default App;
