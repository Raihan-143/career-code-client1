import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, userLogout } = use(AuthContext)

    const handleLogout = () => {
        userLogout()
            .then(() => {
                console.log('Logout user')
            })
            .then(error => {
                console.log(error);
            })
    }

    const links = <>
        <li>
            <NavLink to='/' className="text-base font-medium">
                🏠 Home
            </NavLink>
        </li>
        {
            user && <>
                <li>
                    <NavLink to='/myapplication' className="text-base font-medium">
                        📄 My Applications
                    </NavLink>
                </li>
            </>
        }
        {
            user && <>
                <li>
                    <NavLink to='/addjob' className="text-base font-medium">
                        ➕ Add Job
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mypostedjobs' className="text-base font-medium">
                        📤 My Posted Jobs
                    </NavLink>
                </li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 dark:bg-gray-900 dark:text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex items-center">
                    <img
                        src="/job-creation.png"
                        alt="JobNest Logo"
                        className="h-10 w-auto mr-2"
                    />
                    <span className="text-2xl font-bold text-indigo-700 dark:text-white">
                        Job<span className="text-blue-500 dark:text-blue-400">Nest</span>
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex gap-2">
                {
                    user ?
                    
                        <button
                            onClick={handleLogout}
                            className='btn btn-sm bg-red-600 hover:bg-red-700 text-white border-none'
                        >
                            🚪 Logout
                        </button>
                        :
                        <>
                            <NavLink
                                to='/register'
                                className='btn btn-sm bg-green-600 hover:bg-green-700 text-white border-none'>
                                📝 Register
                            </NavLink>
                            <NavLink
                                to='/login'
                                className='btn btn-sm bg-blue-600 hover:bg-blue-700 text-white border-none'>
                                🔐 Login
                            </NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
