import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLatest, toggleOldest, toggleTags } from '../redux/actionCreators/tagAction';
import loadBlogData from '../redux/thunk/blogs/fetchBlogs';
import BlogCard from './BlogCard'

const Home = () => {
    const blogs = useSelector((state) => state?.blogs?.blogs);
    const { tags, latest, oldest } = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    // console.log(blogs);
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




    return (
        <div className='gap-14 my-5 flex flex-col mx-auto mt-10'>
            <div class="inline-flex rounded-md shadow-sm" role="group">
                <button onClick={() => dispatch(toggleLatest())} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Latest
                </button>
                <button onClick={() => dispatch(toggleOldest())} type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    Oldest
                </button>
            </div>

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