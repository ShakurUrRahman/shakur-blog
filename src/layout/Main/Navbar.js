import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import logo from "../../../src/assets/logo.png"
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='h-24 bg-white rounded-full mt-14 max-w-5xl mx-auto px-5'>
            <ul className='h-full lg:mx-6 flex justify-between items-center gap-3 font-semibold text-indigo-900'>
                <div className='mt-2'>
                    <img className="lg:h-20 h-20 w-max" src={logo} alt="" srcset="" />
                </div>
                <div className="flex gap-3">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/history'>History</Link>
                    </li>
                    <div className="fistClass">
                        <li className="">
                            #Tag
                            <ul className="">
                                <li>Life</li>
                                <li>Nature</li>
                                <li>Tech</li>
                                <li>History</li>
                            </ul>
                        </li>
                    </div>
                    <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
                        <Link to='/'>
                            <IoIosListBox className='text-white' />
                        </Link>
                    </li>
                    <li title='history' className='bg-indigo-500 p-2 rounded-full'>
                        <Link to='/history'>
                            <BsFillCartFill className='text-white ' />
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;