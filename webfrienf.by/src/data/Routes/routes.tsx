import { createBrowserRouter, Navigate } from "react-router-dom";
import { MENU_LIST } from "../Menu/menulist";
import { Blog } from "../../pages/Blog/Blog";

import { App } from "../../App";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: MENU_LIST.find(item => item.nameEn === 'Blog')?.pathTo || '/',
                element: <Blog />,
            },
            {
                path: "*",
                element: <Navigate to="/" />,
            },
        ],
        errorElement: <Navigate to="/" />,
    },


])