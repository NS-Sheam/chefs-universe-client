import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Home/Blogs/Blogs/Blogs";
import ChefRecipies from "../pages/chefRecipies/ChefRecipies/ChefRecipies";
import { getChefData } from "../utilities/customLoader";
import Register from "../pages/login/Register/Register";
import Login from "../pages/login/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Errorpage from "../pages/Errorpage/Errorpage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://chef-recipe-hunting-server-ns-sheam.vercel.app/")
            },
            {
                path: "blogs",
                element: <Blogs />
            },
            {
                path: "chef/:id",
                element: <PrivateRoutes>
                    <ChefRecipies />
                </PrivateRoutes>,
                loader: ({ params }) => getChefData(params.id)
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    },
]);