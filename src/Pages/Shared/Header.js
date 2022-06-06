import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';
import Loading from './Loading';

const Header = ({ displayName }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            return <Loading></Loading>
        }
    }, [loading]);

    const nav = <>
        <li className='mr-1 mb-1 lg:mb-0' onClick={() => navigate("/home")}><CustomLink to="/home">Home</CustomLink></li>
        <li className='mr-1 mb-1 lg:mb-0' onClick={() => navigate("/blogs")}><CustomLink to="/blogs">Blogs</CustomLink></li>
        <li className='mr-1 mb-1 lg:mb-0' onClick={() => navigate("/myPortfolio")}><CustomLink to="/myPortfolio">My Portfolio</CustomLink></li>

        {user && <li onClick={() => navigate("/dashboard/myprofile")}><CustomLink to="/dashboard/myprofile">Dashboard</CustomLink></li>}
    </>;

    const UserName = <>
        <li className="hidden lg:flex">
            <span className='hover:bg-primary'>{user?.displayName || displayName}</span>
        </li>
    </>

    return (
        <nav className='bg-primary'>
            <div className="max-w-screen-2xl navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                            {user?.uid ?
                                <button className='btn btn-sm text-left mt-3 bg-primary border-none'
                                    onClick={() => signOut(auth)}
                                >Logout
                                </button>
                                :
                                <li onClick={() => navigate("/login")} >
                                    <CustomLink to="/login">
                                        Login/Register
                                    </CustomLink>
                                </li>}
                        </ul>
                    </div>
                    <div className="btn btn-ghost normal-case text-xl cursor-default hover:bg-primary hover:transition-none">Vertex Tools</div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {nav}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {user ?
                                <>
                                    {user.photoURL ?
                                        <div
                                            className="avatar flex items-center mr-5 lg:mr-1 cursor-pointer"
                                            onClick={() => navigate('/dashboard/myprofile')}
                                        >
                                            <div className="w-8 h-8 rounded-full border-2 border-secondary">
                                                <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                            {UserName}
                                        </div>
                                        :
                                        <div
                                            className="avatar flex items-center mr-5 lg:mr-1 cursor-pointer"
                                            onClick={() => navigate('/dashboard/myprofile')}
                                        >
                                            <div className="w-8 h-8 rounded-full border-2 border-accent bg-secondary">
                                                <div className='text-primary text-center font-semibold mt-[2px] uppercase'>{(user.displayName || displayName).slice(0, 2)}</div>
                                            </div>
                                            {UserName}
                                        </div>
                                    }
                                    <li
                                        className="hidden lg:flex"
                                        onClick={() => signOut(auth)}
                                    >
                                        <button className='mr-2'
                                        >Logout
                                        </button>
                                    </li>
                                </>
                                :
                                <li
                                    className="hidden lg:flex"
                                    onClick={() => navigate("/login")}
                                >
                                    <Link to="/login" >Login/Register </Link>
                                </li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;