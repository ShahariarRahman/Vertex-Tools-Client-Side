import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MakeAdminModal = ({ user, refetch }) => {
    const { name, email } = user;
    const navigate = useNavigate();

    const handleMakeAdmin = () => {
        console.log(name, email);
        const url = `https://vertex-tools-api.onrender.com/admin/${email}`;
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
            .then(admin => {
                console.log(admin);
                if (admin.modifiedCount > 0) {
                    toast.success('Admin Added Successfull');
                    refetch();
                }
                else {
                    toast.error('Failed to Add Admin');
                }
            });
    };
    return (
        <div>
            <input type="checkbox" id="makeAdminModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="makeAdminModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold capitalize">Are you sure you want to Make this user as admin ?</h3>
                    <p className="py-4 text-sm capitalize">If You make this user admin this user will not able to order products and make review. this user get a access to make another admin, can add, delete and ship product. If sure Press confirm.</p>
                    <div className="flex justify-center mt-5">
                        <label
                            htmlFor="makeAdminModal"
                            className="btn btn-sm capitalize bg-red-600 hover:bg-red-700 border-none"
                            onClick={handleMakeAdmin}
                        >Confirm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdminModal;