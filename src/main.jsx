import React from "react";
import ReactDOM from "react-dom/client";

import "./Styles/Global.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./routers/Home";
import Contatos from "./routers/Contatos";
import App from "./App";
import ErrorPage from "./routers/ErrorPage";
import PaginaReceitas from "./routers/PaginaReceitas";
import SobreNos from "./routers/SobreNos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contatos",
                element: <Contatos />,
            },
            {
                path: "/receitas",
                element: <PaginaReceitas />,
            },
            {
                path: "/sobrenos",
                element: <SobreNos />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
