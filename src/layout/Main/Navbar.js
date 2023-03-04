import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../src/assets/logo.png"
import { toggleNavbar } from "../../redux/actionCreators/tagAction";
import './Navbar.css'
import { MdReorder } from 'react-icons/md'
import { useEffect } from "react";

const Navbar = () => {
    const dispatch = useDispatch();
    const { expandNavbar } = useSelector((state) => state.filters);

    const location = useLocation();

    useEffect(() => {
        toggleNavbar(false);
    }, [location]);

    return (
        <nav className='h-24 bg-white mt-14 max-w-5xl rounded-full mx-auto px-5 border rounded-t-2xl border-x-8 navbar' id={expandNavbar ? "open" : "close"}>
            <ul className='h-full lg:mx-12 flex justify-between items-center font-bold lg:text-xl text-indigo-900'>
                <div className="toggleButton">
                    <button
                        onClick={() => dispatch(toggleNavbar())}
                    >
                        <MdReorder />
                    </button>
                </div>
                <div className='mt-2'>
                    <img className="lg:h-20 h-20 w-max" src={logo} alt="" srcSet="" />
                </div>
                <div className="flex gap-10 text-center fistClass">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="">
                        <Link to='/history'>History</Link>
                    </li>
                    <li className="secondClass">
                        <div className="p">
                            <Link to='/dashboard' className="flex items-center">
                                <span>Dashboard</span>
                                <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <ul>
                                <li className="lg:text-xl text-sm">
                                    <Link to="/dashboard">Blog List</Link>
                                </li>
                                <li className="lg:text-xl text-sm">
                                    <Link to="/dashboard/addblog">Add Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;