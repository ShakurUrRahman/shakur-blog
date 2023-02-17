import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { toggleTags } from "../../redux/actionCreators/tagAction"
import logo from "../../../src/assets/logo.png"
import './Navbar.css'
import { useDispatch } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <nav className='h-24 bg-slate-100 mt-14 max-w-5xl rounded-full mx-auto px-5 border rounded-t-2xl border-x-8 '>
            <ul className='h-full lg:mx-6 flex justify-between items-center font-bold text-xl text-indigo-900'>
                <div className='mt-2'>
                    <img className="lg:h-20 h-20 w-max" src={logo} alt="" srcset="" />
                </div>
                <div className="flex gap-10 text-center fistClass">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="">
                        <Link to='/history'>History</Link>
                    </li>
                    <div className="secondClass">
                        <div>
                            <div className="flex items-center">
                                <p className="hover:italic">#Tag</p>
                                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <ul className="flex  bg-[#54CBCA] border border-red-900">
                                <li className="hover:bg-slate-600 hover:text-white px-6 py-2">
                                    <Link onClick={() => dispatch(toggleTags("life"))}>Life</Link>
                                </li >
                                <li className="hover:bg-slate-600 hover:text-white px-6 py-2">
                                    <Link onClick={() => dispatch(toggleTags("nature"))}>Nature</Link>
                                </li>
                                <li className="hover:bg-slate-600 hover:text-white px-6 py-2">
                                    <Link onClick={() => dispatch(toggleTags("dev"))}>Dev</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;