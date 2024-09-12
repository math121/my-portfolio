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
        <Link to="/" className="no-underline p-4 text-white">
          Home
        </Link>
        <Link to="/projects" className="no-underline p-4 text-white">
          Projects
        </Link>
        <Link to="/aboutMe" className="no-underline p-4 text-white">
          About me
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
