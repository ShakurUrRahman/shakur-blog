import { Link } from "react-router-dom";
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
                    <li className="">
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;