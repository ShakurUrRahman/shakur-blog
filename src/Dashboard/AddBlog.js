import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import addBlogData from "../redux/thunk/blogs/addBlogData";

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fieldColor = "bg-lime-400 text-xl mb-3 p-2";

    const submit = (data) => {
        // const postTime = new Date();
        const date = new Date().toLocaleString();

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
        console.log(blog);
        dispatch(addBlogData(blog, navigate))
    };

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
                    <input className={fieldColor} type='text' name='title' id='title' {...register("title")} />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input className={fieldColor} type='text' name='image' id='image' {...register("image")} />
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
                    />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <button type="submit" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Post your blog</button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;