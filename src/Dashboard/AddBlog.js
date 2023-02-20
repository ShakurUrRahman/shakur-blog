import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import addBlogData from "../redux/thunk/blogs/addBlogData";

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <div className='flex justify-center items-center h-full mt-10'>
            <form
                className='p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-lime-400'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Blog Title
                    </label>
                    <input type='text' name='title' id='title' {...register("title")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' name='image' id='image' {...register("image")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag1'>
                        Tag 1
                    </label>
                    <input
                        type='text'
                        name='tag1'
                        id='tag1'
                        {...register("tag1")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag2'>
                        Tag 2
                    </label>
                    <input
                        type='text'
                        name='tag2'
                        id='tag2'
                        {...register("tag2")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag3'>
                        Tag 3
                    </label>
                    <input
                        type='text'
                        name='tag3'
                        id='tag3'
                        {...register("tag3")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='tag4'>
                        Tag 4
                    </label>
                    <input
                        type='text'
                        name='tag4'
                        id='tag4'
                        {...register("tag4")}
                    />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='body'>
                        Blog Details
                    </label>
                    <textarea
                        type='body'
                        name='body'
                        id='body'
                        {...register("body")}
                    />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;