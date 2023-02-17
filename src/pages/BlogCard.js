import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToHistory } from "../redux/actionCreators/blogActions";

const ProductCard = ({ blog }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    return (
        <div className='shadow-lg rounded-3xl border mt-10 bg-[#E0FADB] grid grid-cols-2 gap-5 items-center px-3 py-2 max-w-4xl mx-auto'>
            <div>
                <img className='h-64 w-60 rounded-lg' src={blog.thumbPic} alt="" />
            </div>
            <div className="">
                <h1 className='font-bold text-center text-4xl py-3'>{blog.title}</h1>
                <p className='text-center font-semibold mb-3'>{blog.body.slice(0, 180)}...</p>
                <div className='flex gap-2 mt-5'>
                    {!pathname.includes("history") && (
                        <Link to={`/blogdetails/${blog._id}`}> <button
                            onClick={() => dispatch(addToHistory(blog))}
                            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                        >Read
                        </button></Link>
                    )}
                </div>
                <p>{blog.tag}</p>
            </div>
        </div>
    );
};

export default ProductCard;
