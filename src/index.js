import React from "react";

import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Index from "./Components/Index";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorBoundry />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function ErrorBoundry() {
  let error = useRouteError();
  console.error(error);
  return (
    <div
      className="d-flex align-items-center rounded p-4 flex-wrap justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <img
        src={require("./Images/404-error.png")}
        alt="404"
        className="rounded"
        style={{ maxWidth: "100%" }}
      />
      <h2 className="text-bold text-danger text-center ms-md-3">
        Page Not Found.
      </h2>
    </div>
  );
}

const root = document.getElementById("root");

root.style.minHeight = window.innerHeight + "px";
window.addEventListener("resize", () => {
  root.style.minHeight = window.innerHeight + "px";
});

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
