import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Header = ({ displayName }) => {
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) {
            return <Loading></Loading>
        }
    }, [loading]);

    const nav = <>
        <li className='mr-1'><Link to="/home">Home</Link></li>
        <li className='mr-1'><Link to="/blogs">Blogs</Link></li>
        <li className='mr-1'><Link to="/myPortfolio">My Portfolio</Link></li>

        {user && <li><Link to="/dashboard/myprofile">Dashboard</Link></li>}
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
                                <li><Link to="/login">Login/Register </Link></li>}
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
                                        <div className="avatar flex items-center mr-1">
                                            <div className="w-8 h-8 rounded-full border-2 border-secondary">
                                                <img src={user.photoURL} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>
                                        :
                                        <div className="avatar flex items-center mr-1">
                                            <div className="w-8 h-8 rounded-full border-2 border-accent bg-secondary">
                                                <div className='text-primary text-center font-semibold mt-[2px] uppercase'>{(user.displayName || displayName).slice(0, 2)}</div>
                                            </div>
                                        </div>
                                    }
                                    <li className="hidden lg:flex">
                                        <span className='hover:bg-primary cursor-default hover:text-black text-gray-900'>{user.displayName || displayName}</span>
                                    </li>
                                    <li className="hidden lg:flex">
                                        <button className='mr-2'
                                            onClick={() => signOut(auth)}
                                        >Logout
                                        </button>
                                    </li>
                                </>
                                :
                                <li className="hidden lg:flex"><Link to="/login">Login/Register </Link></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;