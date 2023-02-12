import React from "react";
import { useSelector } from "react-redux";

const History = () => {
    const blogs = useSelector((state) => state.history.history);
    console.log(blogs);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {blogs?.map(blog => <p>{blog.title}</p>)}
        </div>
    );
};

export default History;