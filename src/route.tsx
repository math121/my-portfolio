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
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/aboutMe">About me</Link>
      </div>
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
