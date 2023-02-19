import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteBlogData from "../redux/thunk/blogs/deleteBlogData";
import loadBlogData from "../redux/thunk/blogs/fetchBlogs";

const BlogList = () => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch])

    return (
        <div className="mx-auto sm:rounded-lg mt-10 ">
            <table className="mx-auto text-lg ">
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
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-lime-200 text-center">
                    {blogs?.sort((a, b) => b.historyPosition - a.historyPosition).map(blog => <tr>
                        <th scope="row" className="px-6 py-4 whitespace-nowrap">
                            <img className="h-16 w-16" src={blog.thumbPic} alt="" srcset="" />
                        </th>
                        <td className="px-6 py-4 bg-lime-200">
                            {blog.title}
                        </td>
                        <td className="px-6 py-4 uppercase  bg-lime-200">
                            {blog.tag.map(t => <p>{t}</p>)}
                        </td>
                        <td onClick={() => deleteBlogData(blog._id)}>
                            <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs font-bold px-3 py-2 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">DELETE</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>

    );
};

export default BlogList;