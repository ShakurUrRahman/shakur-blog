import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadBlogData from '../redux/thunk/blogs/fetchBlogs';

const BlogDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch])
    const blogs = useSelector((state) => state.blogs.blogs);
    const blog = blogs?.find((blog) => blog._id === id);
    console.log(blogs);

    return (
        <div className='rounded-3xl border lg:m-10 p-5 mt-5 bg-[#E0FADB] '>
            <img className='lg:w-[350px] lg:h-[300px] float-left mr-5' src={blog?.thumbPic} alt="" />
            <h1 className='text-5xl font-bold'>{blog?.title}</h1>
            <p className='text-justify mt-6'>{blog?.body}</p>
        </div>
    );
};

export default BlogDetails;