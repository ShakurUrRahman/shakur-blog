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
                <img src={blog.image} alt={blog.model} />
            </div>
            <h1 className='font-bold text-center'>{blog.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {blog.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {blog.keyFeature.map((feature) => {
                        return (
                            <li key={feature} className='text-sm '>
                                {feature}
                            </li>
                        );
                    })}
                </ul>
            </div>
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
