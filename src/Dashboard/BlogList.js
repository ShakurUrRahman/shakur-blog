import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deleteBlogData from "../redux/thunk/blogs/deleteBlogData";
import loadBlogData from "../redux/thunk/blogs/fetchBlogs";

const BlogList = () => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch])

    return (
        <div className="mx-auto sm:rounded-lg my-10 ">
            <table className="mx-auto text-lg">
                <thead className="text-sm uppercase bg-lime-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Blog Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Blog Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Update
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-lime-200 text-center">
                    {blogs?.sort((a, b) => b.historyPosition - a.historyPosition).map(blog => <tr>
                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                            <img className="h-16 w-16" src={blog.thumbPic} alt="" srcSet="" />
                        </th>
                        <td className="px-6 py-4 bg-lime-200">
                            {blog.title}
                        </td>
                        <td className="px-6 py-4 uppercase  bg-lime-200">
                            {blog.tag.map(t => <p>{t}</p>)}
                        </td>
                        <td>
                            <Link to={`/dashboard/updateblog/${blog._id}`}><button type="button" className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2">UPDATE</button></Link>
                        </td>
                        <td>
                            <button onClick={() => dispatch(deleteBlogData(blog?._id))} type="button" className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2 ">DELETE</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>

    );
};

export default BlogList;