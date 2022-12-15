import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderModal from './CancelOrderModal';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [deleteOrderId, setDeleteOrderdId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const url = `https://vertex-tools-api.onrender.com/orders/${user?.email}`;
    const { data: myOrders, isLoading, refetch } = useQuery(['myOrders', user?.email], () =>
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

    if (isLoading || loading) {
        return <Loading></Loading>
    };
    console.log(deleteOrderId);
    return (
        <div className='px-2 my-7 lg:mt-0'>
            <h2 className='text-center font-bold text-primary text-xl py-3 uppercase'>My Orders ({myOrders?.length})</h2>
            <div className="overflow-x-auto shadow-xl">
                <table className="table w-full text-sm">
                    <thead>
                        <tr>
                            <th className='py-2'></th>
                            <th className='py-2 '>Product info</th>
                            <th className='py-2 '>Status</th>
                            <th className='py-2 '>payment</th>
                            <th className='py-2 '>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders?.map((myOrder, index) => <MyOrder
                            key={myOrder._id}
                            index={index}
                            myOrder={myOrder}
                            setDeleteOrderdId={setDeleteOrderdId}
                        ></MyOrder>
                        )}
                    </tbody>
                </table>
            </div>
            <CancelOrderModal
                deleteOrderId={deleteOrderId}
                refetch={refetch}
            >
            </CancelOrderModal>
        </div>
    );
};

export default MyOrders;