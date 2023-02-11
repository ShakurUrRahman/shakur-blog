import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const History = () => {
    const { history } = useSelector((state) => state.history);
    console.log(history);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {history?.map(blg => <p>{blg.model}</p>)}
        </div>
    );
};

export default History;