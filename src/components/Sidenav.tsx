import { Link } from "react-router-dom";
import { House, User, X } from "lucide-react";
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar, closeSidebar }: SidebarProps) => {
  const menuItems = [
    { to: "/", label: "Home", icon: <House /> },
    { to: "/about", label: "About", icon: <User /> },
  ];

  return (
    <nav
      className={`${
        isOpen ? " left-0 w-full md:left-0 md:top-0 " : "-left-full md:left-0"
      }  fixed  w-full md:max-w-[250px] md:sticky top-0 h-dvh bg-gray-800 text-white transition-all duration-300 ease-in-out z-20`}
    >
      <button
        onClick={closeSidebar}
        className="absolute top-5 right-5 md:hidden cursor-pointer"
      >
        <X />
      </button>
      <ul className="p-4 pt-20 flex flex-col gap-6">
        {menuItems.map((item) => (
          <li key={item.to} className=" border rounded-md hover:bg-gray-700 ">
            <Link
              to={item.to}
              className=" py-2 ml-2  rounded transition-colors duration-200 flex items-center gap-2"
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
