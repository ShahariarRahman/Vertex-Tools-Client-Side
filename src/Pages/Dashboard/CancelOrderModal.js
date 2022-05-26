import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CancelOrderModal = ({ deleteOrderId, refetch }) => {
    const navigate = useNavigate();

    const handleToolDelete = () => {

        const url = `https://vertex-tools.herokuapp.com/orders?id=${deleteOrderId}`;
        console.log(url);
        fetch(url, {
            method: 'DELETE',
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
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success("Order Canceled Successfully !");
                }
                else {
                    toast.error('Failed to Cancel Order');
                }
            })
            .catch(error => console.log(error));
    };


    return (
        <div>
            <input type="checkbox" id="CancelOrderModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="CancelOrderModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold capitalize">Are you sure you want to Cancel Order this product ?</h3>
                    <p className="py-4 text-sm capitalize">If you want to Cancel order this product press confirm or if you don't want to Cancel this product close.</p>
                    <div className="flex justify-center mt-5">
                        <label
                            htmlFor="CancelOrderModal"
                            className="btn btn-sm capitalize bg-red-600 hover:bg-red-700 border-none"
                            onClick={handleToolDelete}
                        >Confirm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;