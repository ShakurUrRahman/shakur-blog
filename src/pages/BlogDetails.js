import React from 'react'
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blog = useLoaderData();
    console.log();

    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            <div className='h-52 w-52 mx-auto'>
                <img src={blog.image} alt={blog.model} />
            </div>
            <h1 className='font-bold text-center'>{blog.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {blog.rating}</p>
        </div>
    );
};

export default BlogDetails;