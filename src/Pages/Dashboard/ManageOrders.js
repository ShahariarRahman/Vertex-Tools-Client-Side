import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const url = 'https://vertex-tools.herokuapp.com/orders';
    const { data: orders, isLoading, error, refetch } = useQuery('orders', () =>
        fetch(url, {
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res => {
            if (res.status === 403 || res.status === 401) {
                signOut(auth);
                toast.error('Invalid Access Sign In Again!');
                navigate('/login');
            }
            return res.json();
        })
    );

    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div className='px-2 my-7 lg:mt-0'>
            <h2 className='text-center font-bold text-primary text-xl py-3 uppercase'>Manage Orders ({orders.length})</h2>
            <div className="overflow-x-auto shadow-xl rounded-2xl">
                <table className="table w-full text-sm">
                    <thead>
                        <tr>
                            <th className='py-2 '></th>
                            <th className='py-2 '>User info</th>
                            <th className='py-2 '>Product info</th>
                            <th className='py-2 '>Status</th>
                            <th className='py-2 '>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => <ManageOrder
                            key={order._id}
                            index={index}
                            order={order}
                            refetch={refetch}
                        ></ManageOrder>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;