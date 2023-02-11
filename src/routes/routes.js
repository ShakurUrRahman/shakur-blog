import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import BlogDetails from "../pages/BlogDetails";
import History from "../pages/History";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/history",
                element: <History />,
            },
            {
                path: '/blogdetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogdetails/${params.id}`)
            },
        ],
    },
]);

export default routes;