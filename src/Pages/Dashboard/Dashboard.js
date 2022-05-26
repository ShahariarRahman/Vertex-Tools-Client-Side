import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="user-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <Outlet></Outlet>

                <label htmlFor="user-dashboard" className="btn btn-sm text-xs rounded-l-none btn-primary drawer-button lg:hidden absolute left-0 top-20"><span className='mr-3'>Open Dashboard</span>
                    <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="user-dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li>
                        <Link to="myprofile" className='mb-1 text-sm'>My Profile</Link>
                        <Link to="manageOrders" className='mb-1 text-sm'>Manage Orders</Link>
                        <Link to="addProduct" className='mb-1 text-sm'>Add Product</Link>
                        <Link to="makeAdmin" className='mb-1 text-sm'>Make Admin</Link>
                        <Link to="manageProducts" className='mb-1 text-sm'>Manage Products</Link>
                        <Link to="myOrders" className='mb-1 text-sm'>My Orders</Link>
                        <Link to="addReview" className='mb-1 text-sm'>Add Review</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;