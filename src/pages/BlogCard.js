import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToHistory } from "../redux/actionCreators/blogActions";

const ProductCard = ({ blog }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            <div className='h-52 w-52 mx-auto'>
                <img src="" alt={blog.model} />
            </div>
            <h1 className='font-bold text-center'>{blog.title}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {blog.details}</p>

            <div className='flex gap-2 mt-5'>
                {!pathname.includes("history") && (
                    <Link to={`/blogdetails/${blog._id}`}> <button
                        onClick={() => dispatch(addToHistory(blog))}
                        className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
                    >Read
                    </button></Link>
                )}
            </div>

        </div>
    );
};

export default ProductCard;
