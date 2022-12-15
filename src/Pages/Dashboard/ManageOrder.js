import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageOrder = ({ order, refetch, index }) => {
    const navigate = useNavigate();
    const { _id, name, email, phone, toolName, quantity, time, paid, shipped } = order;

    const handleShippingOrder = () => {
        console.log(name, email);
        const url = `https://vertex-tools-api.onrender.com/order/${_id}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    signOut(auth);
                    toast.error('Invalid Access Sign In Again!');
                    navigate('/login');
                }
                return res.json();
            })
            .then(shipped => {
                console.log(shipped);
                if (shipped.modifiedCount > 0) {
                    toast.success('Shipped Done Successfull');
                    refetch();
                }
                else {
                    toast.error('Failed to Shipping');
                }
            });
    };

    return (
        <tr className='text-xs 2xl:text-sm'>
            <td className='py-2'>{index + 1}</td>
            <td className='py-2'>
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </div>
            </td>
            <td className='py-2'>
                <div>
                    <p>Product: {toolName}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Time: {time}</p>
                </div>
            </td>
            <td className='py-2 font-semibold text-xs'>
                <div>Payment:
                    {paid ?
                        <span className='text-green-600'> Paid</span>
                        :
                        <span className='text-red-500'> Unpaid</span>
                    }
                </div>
                <div> Shipment:
                    {shipped ?
                        <span className='text-green-600'> Shipped</span>
                        :
                        <span className='text-red-500'> Pending</span>
                    }
                </div>
            </td>
            <td className='py-2'>
                <button
                    disabled={shipped || !paid}
                    className="btn btn-xs 2xl:btn-sm capitalize bg-primary border-none"
                    onClick={handleShippingOrder}
                >Ship Now
                </button>
            </td>
        </tr>
    );
};

export default ManageOrder;