import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToHistory } from "../redux/actionCreators/blogActions";
import { toggleTags } from "../redux/actionCreators/tagAction";

const ProductCard = ({ blog }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const tags = useSelector((state) => state.filter.tags);

    const activeClass = "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
    return (
        <div className="flex flex-col items-center bg-[#E0FADB] border border-gray-200 rounded-2xl shadow md:flex-row md:max-w-4xl mb-5 p-4">
            <img className="object-cover lg:w-[230px] lg:h-[250px] rounded-l-lg" src={blog.thumbPic} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex justify-between items-start">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">{blog.title}</h5>
                    <p className="text-sm underline">Posted on: <span className="italic">{blog.date}</span></p>
                </div>
                <p className="mb-3 font-normal">{blog.body.slice(0, 200)}...</p>
                <div className="flex gap-44 items-start">
                    {!pathname.includes("history") && (
                        <Link to={`/blogdetails/${blog._id}`}> <button
                            onClick={() => dispatch(addToHistory(blog))}
                            className='text-gray-900 font-medium border-2 bg-green-300 hover:bg-green-500  rounded-xl border-black border-b-8 text-md hover:font-bold hover:rounded-3xl px-5 py-2.5 text-center mr-2 mb-2 w-52'
                        >Read Full Blog
                        </button></Link>
                    )}
                    <p>
                        {
                            blog?.tag.map(t => t.length > 0 && <button onClick={() => dispatch(toggleTags(t)
                            )} className={`font-serif rounded-full py-1 px-1 border-2 border-dotted hover:border-solid border-black mr-1 ${tags.includes(t) ? activeClass : null}`}>
                                #{t}
                            </button>)
                        }

                    </p>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;
