import {
  createRootRoute,
  createRoute,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { About } from "./pages/About";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Home } from "./pages/Home";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <nav className="space-x-20 text-center text-xl p-5">
        <Link
          to="/"
          className="no-underline p-4 text-white group relative w-max hover:font-bold"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
        </Link>
        <Link
          to="/projects"
          className="no-underline p-4 text-white group relative w-max hover:font-bold"
        >
          Projects
          <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
        </Link>
        <Link
          to="/aboutMe"
          className="no-underline p-4 text-white group relative w-max hover:font-bold"
        >
          About me
          <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"></span>
        </Link>
      </nav>
      <Outlet />
    </>
  ),
});

const homePage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const projectsPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: ProjectsPage,
});

const aboutPage = createRoute({
  getParentRoute: () => rootRoute,
  path: "/aboutMe",
  component: About,
});

export const routeTree = rootRoute.addChildren({
  homePage,
  projectsPage,
  aboutPage,
});
