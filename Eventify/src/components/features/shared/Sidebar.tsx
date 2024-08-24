import { IconType } from "react-icons";
import { IoIosSettings } from "react-icons/io";
import { MdAccountBox, MdDashboard, MdEvent } from "react-icons/md";
import { Link } from "react-router-dom";

export function Sidebar() {
  const SIDEBAR_LINKS: {
    id: number;
    path: string;
    name: string;
    icon?: IconType;
  }[] = [
    { id: 1, path: "/", name: "Dashboard", icon: MdDashboard },
    { id: 2, path: "/patient", name: "Patient", icon: MdEvent },
    { id: 3, path: "/doctors", name: "Doctors", icon: MdAccountBox },
    { id: 5, path: "/nurse", name: "Nurse", icon: MdAccountBox },
    { id: 4, path: "/settings", name: "Settings", icon: IoIosSettings },
    { id: 5, path: "/account", name: "Account", icon: MdAccountBox },
  ];

  return (
    <>
      <div className="bg-blue-600 w-1/6 h-screen">
        <h1 className="font-bold p-8 text-custom">MediControl</h1>

        {/* Navigation Links */}
        <ul className=" space-y-2">
          {SIDEBAR_LINKS.map((link) => {
            return (
              <li
                key={link.id}
                className="font-medium  py-2 px-4 hover:bg-violet-200 hover:text-indigo-500"
              >
                <Link
                  className="flex items-center justify-center md:justify-start md:space-x-2 p-2"
                  to={link.path}
                >
                  {/*  Rendering icon if is definition  */}
                  {link.icon && <link.icon />}
                  <span className="text-sm text-custom hidden md:flex">
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
