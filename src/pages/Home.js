import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTags } from '../redux/actionCreators/tagAction';
import loadBlogData from '../redux/thunk/blogs/fetchBlogs';
import BlogCard from './BlogCard'

const Home = () => {
    const blogs = useSelector((state) => state?.blogs?.blogs);
    const tags = useSelector((state) => state?.blogs?.blogs);
    const dispatch = useDispatch();
    // console.log(blogs);
    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch])



    // const tags = useSelector((state) => state);
    console.log(blogs);

    const activeClass = "text-black bg-[#FF77E2] border-white uppercase";

    let content;

    content = blogs?.map((blog) => <BlogCard blog={blog}></BlogCard>);



    return (
        <div className='gap-14 my-5 flex flex-col mx-auto mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-auto'>
                {content}
            </div>
            <div className='flex items-center gap-2 mx-auto text-lg font-extrabold'>
                <p>Your selected tag(s):</p>
                {tags.length ?
                    tags?.map(tag =>
                        <div className='flex justify-start items-start gap-5'>
                            <button
                                onClick={() => dispatch(toggleTags(tag))}
                                className={`border border-x-8 px-3 rounded-tr-xl font-semibold ${tags.includes(tag) ? activeClass : "null"}`}
                            >
                                {tag}
                            </button>
                        </div>)
                    : <p>You did not select any tag.</p>
                }
            </div>
        </div>
    );
};

export default Home;