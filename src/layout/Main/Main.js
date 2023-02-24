import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navbar from "./Navbar";

const Main = () => {
    return (
        <div className='px-10'>
            <Navbar />
            <div className="min-h-screen"><Outlet /></div>
            <Footer />
        </div>
    );
};

export default Main;