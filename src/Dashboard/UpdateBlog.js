import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import loadBlogData from '../redux/thunk/blogs/fetchBlogs';
import updateBlogData from '../redux/thunk/blogs/updateBlogData';

const UpdateBlog = () => {
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const blogs = useSelector((state) => state.blogs.blogs);
    const blog = blogs?.find((blog) => blog._id === id);
    console.log(blog);

    useEffect(() => {
        dispatch(loadBlogData())
    }, [dispatch])

    const submit = (data) => {
        const date = new Date().getDate();

        const blog = {
            thumbPic: data.image,
            title: data.title,
            date,
            tag: [
                data.tag1,
                data.tag2,
                data.tag3,
                data.tag4,
            ],
            body: data.body,
        };
        // console.log(blog);
        dispatch(updateBlogData(id, blog, navigate))
    };

    const fieldColor = "bg-lime-400 text-xl mb-3 p-2";

    return (
        <div className='mx-auto max-w-3xl my-10'>
            <form
                className='p-10 bg-lime-200'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full '>
                    <label className='mb-2' htmlFor='title'>
                        Blog Title
                    </label>
                    <input defaultValue={blog?.blog?.title} className={fieldColor} type='text' name='title' id='title' {...register("title")} />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input defaultValue={blog?.blog?.thumbPic} className={fieldColor} type='text'
                        name='image'
                        id='image'
                        {...register("image")}
                    />
                </div>

                <div className='flex gap-5'>
                    <div className='flex flex-col w-1/2'>
                        <label className='mb-2' htmlFor='tag1'>
                            Tag 1
                        </label>
                        <input
                            type='text'
                            name='tag1'
                            id='tag1'
                            className={fieldColor}
                            {...register("tag1")}
                            defaultValue={blog?.blog?.tag[0]}
                        />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='mb-2' htmlFor='tag2'>
                            Tag 2
                        </label>
                        <input
                            type='text'
                            name='tag2'
                            id='tag2'
                            className={fieldColor}
                            {...register("tag2")}
                            defaultValue={blog?.blog?.tag[1]}
                        />
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className='flex flex-col w-1/2'>
                        <label className='mb-2' htmlFor='tag3'>
                            Tag 3
                        </label>
                        <input
                            type='text'
                            name='tag3'
                            id='tag3'
                            className={fieldColor}
                            {...register("tag3")}
                            defaultValue={blog?.blog?.tag[2]}
                        />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label className='mb-2' htmlFor='tag4'>
                            Tag 4
                        </label>
                        <input
                            type='text'
                            name='tag4'
                            id='tag4'
                            className={fieldColor}
                            {...register("tag4")}
                            defaultValue={blog?.blog?.tag[3]}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-2' htmlFor='body'>
                        Blog Details
                    </label>
                    <textarea
                        type='body'
                        name='body'
                        id='body'
                        maxLength={2000}
                        rows="10"
                        className={fieldColor}
                        {...register("body")}
                        defaultValue={blog?.blog?.body}
                    />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <button type="submit" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Update your blog</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBlog;