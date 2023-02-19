import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Main/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='col-span-10 w-full rounded-lg'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
