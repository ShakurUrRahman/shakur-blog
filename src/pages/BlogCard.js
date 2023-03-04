import moment from "moment/moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToHistory } from "../redux/actionCreators/blogActions";
import { toggleTags } from "../redux/actionCreators/tagAction";

const BlogCard = ({ blog }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const tags = useSelector((state) => state.filters.tags);
    // console.log(tags);

    const currentDate = (blog?.blog?.date);
    const newDate = moment(currentDate).format('MMMM Do YYYY, h:mm:ss a')
    // console.log(currentDate);

    const activeClass = "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
    return (
        <div className="flex flex-col items-center bg-[#E0FADB] border border-gray-200 rounded-2xl shadow md:flex-row md:max-w-4xl lg:max-w-4xl max-w-sm mb-5 p-4">
            <img className="object-cover lg:w-[230px] lg:h-[250px] rounded-l-lg" src={blog?.blog?.thumbPic} alt="" />
            <div className="flex flex-col justify-between lg:p-4 p-2 leading-normal mx-auto">
                <div className="flex justify-between items-start">
                    <h5 className="mb-2 lg:text-2xl text-xl font-bold tracking-tight">{blog?.blog?.title}</h5>
                    <p className="text-sm underline">Posted on: <span className="italic font-medium">{newDate}</span></p>
                </div>
                <p className="mb-3 lg:text-base text-xs">{blog?.blog?.body?.slice(0, 200)}...</p>
                <div className="flex lg:gap-44 gap-5 items-center">
                    {!pathname.includes("history") && (
                        <Link to={`/blogdetails/${blog?._id}`}> <button
                            onClick={() => dispatch(addToHistory(blog))}
                            className='text-gray-900 font-medium border-2 bg-white  rounded-xl border-black border-b-8 text-md hover:font-bold hover:rounded-3xl lg:px-5 lg:py-2.5 py-2 text-center mr-2 mb-2 lg:w-52 w-24 transition-all'
                        >Read Full Blog
                        </button></Link>
                    )}
                    <p>
                        {
                            blog?.blog?.tag?.map(t => t.length > 0 && <button onClick={() => dispatch(toggleTags(t)
                            )} className={`font-serif rounded-full py-1 px-1 border-2 border-dotted hover:border-solid border-black m-1 ${tags.includes(t) ? activeClass : null}`}>
                                #{t}
                            </button>)
                        }

                    </p>
                </div>
            </div>
        </div >
    );
};

export default BlogCard;
