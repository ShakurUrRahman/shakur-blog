import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../Dashboard/AddBlog";
import BlogList from "../Dashboard/BlogList";
import Dashboard from "../layout/Dashboard/Dashboard";
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
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <BlogList />,
            },
            {
                path: "/dashboard/addblog",
                element: <AddBlog />,
            }
        ],
    },
]);

export default routes;