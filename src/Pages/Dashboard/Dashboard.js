import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    const navigate = useNavigate();

    if (adminLoading || loading) {
        return <Loading></Loading>
    };
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
                <ul className="menu p-1 overflow-y-auto bg-base-100 text-base-content text-center">
                    <li className='mb-2' onClick={() => navigate("myprofile")}>
                        <CustomLink to="myprofile" className='text-sm'>My Profile</CustomLink>
                    </li>

                    {admin ?
                        <>
                            <li className='mb-2' onClick={() => navigate("addProduct")}>
                                <CustomLink to="addProduct" className='text-sm'>Add Product</CustomLink>
                            </li>
                            <li className='mb-2' onClick={() => navigate("makeAdmin")}>
                                <CustomLink to="makeAdmin" className='text-sm'>Make Admin</CustomLink>
                            </li>
                            <li className='mb-2' onClick={() => navigate("manageOrders")}>
                                <CustomLink to="manageOrders" className='text-sm'>Manage Orders</CustomLink>
                            </li>
                            <li className='mb-2' onClick={() => navigate("manageProducts")}>
                                <CustomLink to="manageProducts" className='text-sm'>Manage Products</CustomLink>
                            </li>
                        </>
                        :
                        <>
                            <li className='mb-2' onClick={() => navigate("myOrders")}>
                                <CustomLink to="myOrders" className='text-sm'>My Orders</CustomLink>
                            </li>
                            <li className='mb-2' onClick={() => navigate("addReview")}>
                                <CustomLink to="addReview" className='text-sm'>Add Review</CustomLink>
                            </li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;