import { Link, Outlet } from "@tanstack/react-router";

import { useLocation } from "@tanstack/react-router";

export const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <nav className="flex text-xl justify-center gap-10">
        <Link
          to="/"
          className={`no-underline p-4 group relative w-max text-[#e5e7e0] ${location.pathname == "/" ? "font-bold" : ""}`}
        >
          Home
          <span
            className={`absolute bottom-0 left-0 w-0 transition-all duration-300 bg-[#e5e7e0] ${location.pathname == "/" ? "w-full h-1" : "group-hover:w-full h-0.5"}`}
          ></span>
        </Link>
        <Link
          to="/projects"
          className={`no-underline p-4 group relative w-max text-[#e5e7e0] ${location.pathname == "/projects" ? "font-bold" : ""}`}
        >
          Projects
          <span
            className={`absolute bottom-0 left-0 w-0 transition-all duration-300 bg-[#e5e7e0] ${location.pathname == "/projects" ? "w-full h-1" : "group-hover:w-full h-0.5"}`}
          ></span>
        </Link>
        <Link
          to="/aboutMe"
          className={`no-underline p-4 group relative w-max text-[#e5e7e0] ${location.pathname == "/aboutMe" ? "font-bold" : ""}`}
        >
          About me
          <span
            className={`absolute bottom-0 left-0 w-0 transition-all duration-300 bg-[#e5e7e0] ${location.pathname == "/aboutMe" ? "w-full h-1" : "group-hover:w-full h-0.5"}`}
          ></span>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
