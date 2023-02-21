import { IconSidebar } from "@/sections/sidebar/variants/icon-sidebar.jsx";
import { useState } from "react";
import { FullSidebar } from "@/sections/sidebar/variants/full-sidebar.jsx";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <aside className={`p-4 ${collapsed ? "" : "min-w-[16rem] w-64"}`}>
      <div className="flex flex-col justify-center h-12">
        {collapsed ? (
          <div className="mx-auto">
            <button onClick={() => setCollapsed(false)}>14</button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between">
              <div className="flex-auto">Untitled</div>
              <div className="">
                <button onClick={() => setCollapsed(true)}>o</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-2 pt-2">
        {/*<IconSidebar />*/}
        {collapsed ? <IconSidebar /> : <FullSidebar />}
      </div>
    </aside>
  );
};
