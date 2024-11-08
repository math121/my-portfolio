import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes/route";

/*
color pairing: bg-[#05293b] text-[#e5e7e0], bg-dark, text-light
               bg-[#e5e7e0] text-[#05293b], bg-light, text-dark
*/

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
