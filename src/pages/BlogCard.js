import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToHistory } from "../redux/actionCreators/blogActions";
import { toggleTags } from "../redux/actionCreators/tagAction";

const ProductCard = ({ blog }) => {
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.filter.tags);
    console.log(tags);
    const { pathname } = useLocation();

    const activeClass = "border-yellow-500 text-yellow-500";
    return (
        <div className="flex flex-col items-center bg-[#E0FADB] border border-gray-200 rounded-2xl shadow md:flex-row md:max-w-4xl mb-5 p-3">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={blog.thumbPic} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <div className="flex justify-between items-start">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight">{blog.title}</h5>
                    <p className="text-sm underline">Posted on: <span className="italic">{blog.date}</span></p>
                </div>
                <p class="mb-3 font-normal">{blog.body.slice(0, 200)}...</p>
                <div className="flex gap-44 items-start ">
                    {!pathname.includes("history") && (
                        <Link to={`/blogdetails/${blog._id}`}> <button
                            onClick={() => dispatch(addToHistory(blog))}
                            className='text-gray-900 font-medium border-2 hover:bg-green-400 rounded-br-3xl border-black border-b-8 text-md px-5 py-2.5 text-center mr-2 mb-2 w-52'
                        >Read Full Blog
                        </button></Link>
                    )}
                    <p className="font-serif rounded-full font-semibold bg-green-200 py-1 px-5 border-2 border-dotted border-black">Tags:
                        {
                            blog?.tag.map((t) => <button onClick={() => dispatch(toggleTags(t)
                            )} className={`px-3 py-2 border ${tags.includes(t) ? activeClass : null}`}>
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
