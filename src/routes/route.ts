import { createRootRoute, createRoute } from "@tanstack/react-router";
import { About } from "../pages/About";
import { ProjectsPage } from "../pages/ProjectsPage";
import { Home } from "../pages/Home";
import { NavBar } from "./NavBar";

const rootRoute = createRootRoute({
  component: NavBar,
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
