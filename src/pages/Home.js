import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard'

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setBlogs(data.data))
    }, [])

    const state = useSelector((state) => state);
    console.log(state);

    return (
        <div>
            {
                blogs?.map((blog, i) => (
                    <BlogCard key={i} blog={blog} />
                ))
            }
        </div>
    );
};

export default Home;