import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTags } from '../redux/actionCreators/tagAction';
import BlogCard from './BlogCard'

const Home = () => {
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setBlogs(data.data))
    }, [])

    const filters = useSelector((state) => state.filter.filters);
    const { tags } = filters;


    const activeClass = "text-white bg-indigo-500 border-white";

    let content;

    if (blogs.length) {
        content = blogs?.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
        ))
    }

    if (blogs.length || tags.length) {
        content = blogs
            .filter((blog) => {
                if (tags.length) {
                    return tags.includes(blog.tag);
                }
                return blog;
            })
            .map((blog, i) => (
                <BlogCard key={i} blog={blog} />
            ))
    }

    return (
        <div className='max-w-7xl gap-14 mx-auto my-5 flex flex-col-reverse'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                {content}
            </div>
            <div className=' flex justify-end gap-5'>
                <button
                    onClick={() => dispatch(toggleTags("amd"))}
                    className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("amd") ? activeClass : "null"}`}
                >
                    AMD
                </button>
                <button
                    onClick={() => dispatch(toggleTags("intel"))}
                    className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("intel") ? activeClass : "null"}`}
                >
                    Intel
                </button>
            </div>
        </div>
    );
};

export default Home;