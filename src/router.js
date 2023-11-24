import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Layout";
import Landing from "./Components/landing";
import Email from "./Components/email";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/email",
        element: <Email />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
