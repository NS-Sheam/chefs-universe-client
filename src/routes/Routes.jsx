import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Home/Blogs/Blogs/Blogs";
import ChefRecipies from "../pages/chefRecipies/ChefRecipies/ChefRecipies";
import { getChefData } from "../utilities/customLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:5000/")
            },
            {
                path: "blogs",
                element: <Blogs />
            },
            {
                path: "chef/:id",
                element: <ChefRecipies />,
                loader: ({params}) => getChefData(params.id)
            }
        ]
    },
]);