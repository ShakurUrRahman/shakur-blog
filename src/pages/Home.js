import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../redux/actionCreators/blogActions';
import { toggleLatest, toggleOldest, toggleTags } from '../redux/actionCreators/tagAction';
import loadBlogData from '../redux/thunk/blogs/fetchBlogs';
import BlogCard from './BlogCard'
import Loading from './Loading';

const Home = () => {
    const blogs = useSelector((state) => state?.blogs?.blogs);
    const { tags, latest, oldest } = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    console.log(blogs);
    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch])

    let content;
    if (tags?.length) {
        const matchingTag = tags.map((tag) =>
            blogs.filter((blog) => blog.blog.tag.includes(tag))
        );

        const addingArray = matchingTag.reduce((r, a) => r.concat(a), []);

        if (latest) {
            const finalTag = [...new Set(addingArray)];
            content = finalTag.sort(function (a, b) {
                return b.blog.date - a.blog.date;
            }).map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>);
        }
        if (oldest) {
            const finalTag = [...new Set(addingArray)];
            content = finalTag.sort(function (a, b) {
                return a.blog.date - b.blog.date;
            }).map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>);
        }

    } else {
        if (latest) {
            content = blogs?.sort(function (a, b) {
                return b.blog.date - a.blog.date;
            }).map((blog) => <BlogCard blog={blog}></BlogCard>);
        }
        if (oldest) {
            content = blogs?.sort(function (a, b) {
                return a.blog.date - b.blog.date;
            }).map((blog) => <BlogCard blog={blog}></BlogCard>);
        }
    }


    const activeClass = "bg-green-300 font-bold text-black text-md"

    return (
        <div className='gap-5 flex flex-col mx-auto mt-10'>
            <div className='flex justify-center'>
                <button onClick={() => dispatch(toggleLatest())} type="button" className={`px-4 py-2 font-medium border rounded-tl-full border-x-8 mr-3 lg:text-base text-sm ${latest ? activeClass : null}`}>
                    Read Latest Blogs
                </button>
                <button onClick={() => dispatch(toggleOldest())} type="button" className={`px-4 py-2 font-medium  border rounded-tr-full border-x-8 lg:text-base text-sm ${oldest ? activeClass : null}`}>
                    Read Oldest Blogs
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-auto'>
                {
                    !blogs.length ?
                        <Loading /> : content
                }
            </div>
            <div className='flex items-center gap-2 mx-auto text-lg font-extrabold'>
                <p>Your selected tag(s):</p>
                {tags.length ?
                    tags?.map(tag =>
                        <div className='flex justify-start items-start gap-5'>
                            <button
                                onClick={() => dispatch(toggleTags(tag))}
                                className={`border border-x-8 px-3 rounded-tr-xl font-semibold text-black bg-[#FF77E2] border-white uppercase}`}
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