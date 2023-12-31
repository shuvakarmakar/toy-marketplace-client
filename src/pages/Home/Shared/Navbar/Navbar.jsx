import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import logo from '../../../../assets/super-kiddo.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
            user?.email ? <><li><Link to="/mytoys">My Toys</Link></li>
                <li><Link to="/addatoy">Add a Toy</Link></li></>
                :
                <></>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {user ? <div className="navbar-end">
                <li className="relative inline-block">
                    <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out mr-2">
                        <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                    </button>
                </li>
                <span className="text-gray-500 mr-2">Welcome, {user.displayName}</span>
                <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
            </div>
                : <div className="navbar-end">
                    <button className="btn"><Link to="/login">Login</Link></button>
                </div>}
        </div>
    );
};

export default Navbar;