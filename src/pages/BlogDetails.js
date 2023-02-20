import React from 'react'
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    // const blogs = useSelector((state) => state.blogs.blogs)
    const blogs = useLoaderData();
    console.log(blogs)
    const { title, thumbPic, body, tag } = blogs;

    return (
        <div className='rounded-3xl border lg:m-10 p-5 mt-5 bg-[#E0FADB] '>
            <img className='lg:w-[350px] lg:h-[300px] float-left mr-5' src={thumbPic} alt="" />
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='text-justify mt-6'>{body}</p>
        </div>
    );
};

export default BlogDetails;