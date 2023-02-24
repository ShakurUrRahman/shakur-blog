import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadBlogData from '../redux/thunk/blogs/fetchBlogs';

const BlogDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch])
    const blogs = useSelector((state) => state.blogs.blogs);

    const blog = blogs?.find((blog) => blog._id === id);


    console.log(blog)
    return (
        <div className='rounded-3xl border lg:m-10 lg:p-5 p-7 mt-5 bg-[#E0FADB] '>
            <img className='lg:w-[350px] lg:h-[300px] float-left lg:mr-5 mb-2' src={blog?.blog?.thumbPic} alt="" />
            <h1 className='lg:text-5xl text-3xl font-bold'>{blog?.blog.title}</h1>
            <p className='text-justify lg:mt-6 mt-3'>{blog?.blog?.body}</p>
            <p className='flex justify-center mt-5 text-lg'>
                Category: {blog.blog.tag.map(t => <p className='italic mx-2 font-semibold'>{t}</p>)}
            </p>

        </div>
    );
};

export default BlogDetails;