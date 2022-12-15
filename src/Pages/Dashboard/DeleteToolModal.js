import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteToolModal = ({ deleteToolId, refetch }) => {

    const navigate = useNavigate();

    const handleToolDelete = () => {
        const url = `https://vertex-tools-api.onrender.com/tools?id=${deleteToolId}`;
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
                    toast.success("Tool Successfully Deleted !");
                }
                else {
                    toast.error('Failed to Delete Tool');
                }
            })
            .catch(error => console.log(error));
    };


    return (
        <div>
            <input type="checkbox" id="DeleteToolModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="DeleteToolModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold capitalize">Are you sure you want to delete this product ?</h3>
                    <p className="py-4 text-sm capitalize">If you want to delete this product press confirm or if you don't want to delete this product close.</p>
                    <div className="flex justify-center mt-5">
                        <label
                            htmlFor="DeleteToolModal"
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

export default DeleteToolModal;