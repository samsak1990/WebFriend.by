import { createBrowserRouter, Navigate } from "react-router-dom";
import { MENU_LIST } from "../Menu/MenuList";
import { Blog } from "../../pages/Blog/Blog";
import { App } from "../../App";
import { General } from "../../pages/General/General";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <General />,
      },
      {
        path:
          MENU_LIST.find((item) => item.nameEn === "Blog")?.pathTo || "/blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
    errorElement: <Navigate to="/" />,
  },
]);
