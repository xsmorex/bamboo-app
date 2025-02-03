import { useState} from 'react';
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";
import { AlignRight } from "lucide-react";

const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex w-dvw">
      <Sidenav
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        closeSidebar={closeSidebar}
      />
      <main className="flex-1">
        <div className="flex justify-end border-b bg-gray-800 sticky top-0 p-4 md:hidden  z-10">
          <button
            className="p-2  bg-gray-800 rounded cursor-pointer"
            onClick={toggleSidebar}
          >
            <AlignRight color="white"/>
          </button>
        </div>
        <div className="min-h-screen  p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
