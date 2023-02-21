import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../Dashboard/AddBlog";
import BlogList from "../Dashboard/BlogList";
import UpdateBlog from "../Dashboard/UpdateBlog";
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
                element: <BlogDetails></BlogDetails>
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
            },
            {
                path: "/dashboard/updateblog/:id",
                element: <UpdateBlog />,
            }
        ],
    },
]);

export default routes;