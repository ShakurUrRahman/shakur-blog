import React from "react";
import { useSelector } from "react-redux";

const History = () => {
    const blogs = useSelector((state) => state.blogs.history);
    console.log(blogs);

    return (
        <div className="mx-auto sm:rounded-lg mt-10 ">
            <table className="mx-auto text-lg bg-lime-400">
                <thead className="text-sm uppercase">
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
                    </tr>
                </thead>
                <tbody className="">
                    {blogs?.sort((a, b) => b.historyPosition - a.historyPosition).map(blog => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 whitespace-nowrap bg-lime-200">
                            <img className="h-16 w-16" src={blog.thumbPic} alt="" srcSet="" />
                        </th>
                        <td className="px-6 py-4 bg-lime-200">
                            {blog.title}
                        </td>
                        <td className="px-6 py-4 uppercase  bg-lime-200">
                            {blog.tag.map(t => <p>{t}</p>)}
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>

    );
};

export default History;