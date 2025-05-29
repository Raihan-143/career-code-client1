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
        <li><NavLink to='/'>Home</NavLink></li>
        {
           user && <>
           <li><NavLink to='/myapplication'>My Applications</NavLink></li>
           </> 
        }
        {/* for recruiter check role as well */}
        {
            user && <>
            <li><NavLink to='/addjob'>Add Job</NavLink></li>
            <li><NavLink to='/mypostedjobs'>My Posted Jobs</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex items-center">
                    <img
                        src="/job-creation.png"
                        alt="Roommate Finder Logo"
                        className="h-10 w-auto mr-2"
                    />
                    <span className="text-2xl font-bold text-indigo-700 dark:text-white">
                        Job<span className="text-blue-500">Nest</span>
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {links}
                </ul>
            </div>
            <div className="flex gap-2 navbar-end">
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary bg-red-600 border-none'>Logout</button> :
                        <>
                            <NavLink to='/register' className='btn btn-primary border-none'>Register</NavLink>
                            <NavLink to='/login' className='btn btn-primary bg-blue-500 border-none'>Login</NavLink>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;