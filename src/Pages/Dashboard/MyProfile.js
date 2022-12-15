import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <Loading></Loading>
    };

    const onSubmit = data => {
        const UpdateInfo = {
            address: data.address,
            education: data.education,
            linkedIn: data.linkedIn,
            phone: data.phone
        }
        const url = `https://vertex-tools-api.onrender.com/user/${user?.email}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(UpdateInfo)
        })
            .then(response => {
                if (response.status === 403 || response.status === 401) {
                    signOut(auth);
                    toast.error('Invalid Access Sign In Again!');
                    Navigate('/login');
                }
                return response.json();
            })
            .then(updated => {
                console.log(updated);
                if (updated.matchedCount > 0) {
                    if (updated.modifiedCount > 0) {
                        toast.success('Update Profile Successfull');
                    }
                    else {
                        toast.warn('Everything up to date');
                    }
                    reset();
                }
                else {
                    toast.error('Failed to Update');
                }
            });
    };
    return (
        <div className='px-2 my-7 lg:mt-0'>
            <h2 className="text-center font-bold text-primary text-xl pt-5 uppercase">Update Your Profile</h2>
            <div className="overflow-x-auto shadow-xl rounded-3xl">
                <div className="card-body px-4 pb-4 pt-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-base-100">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-sm">User Name</span>
                            </label>
                            <input
                                className="input input-bordered rounded input-sm w-full "
                                defaultValue={user?.displayName} disabled />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-sm">Email Address</span>
                            </label>
                            <input
                                className="input input-bordered rounded input-sm w-full"
                                defaultValue={user?.email} disabled />
                        </div>



                        <div className="form-control w-full ">
                            <span className="label-text text-sm pt-2 pb-1">Address</span>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered rounded input-sm w-full "
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label p-1">
                                {errors.address?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.address.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <span className="label-text text-sm pb-1">Phone No.</span>
                            <input
                                type="number"
                                placeholder="Your Phone Number"
                                className="input input-bordered w-full  rounded input-sm"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Your Phone Number is Required'
                                    }
                                })}
                            />
                            <label className="label p-1">
                                {errors.phone?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.phone.message}
                                    </span>
                                }
                            </label>
                        </div>

                        <div className="form-control w-full ">
                            <span className="label-text text-sm pb-1">Educational Qualification</span>
                            <input
                                type="text"
                                placeholder="Educational Qualification"
                                className="input input-bordered w-full  rounded input-sm"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Your Educational Qualification is Required'
                                    }
                                })}
                            />
                            <label className="label p-1">
                                {errors.education?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.education.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <span className="label-text text-sm pb-1">LinkedIn Profile Link</span>
                            <input
                                type="text"
                                placeholder="Your LinkedIn Profile Link"
                                className="input input-bordered w-full  rounded input-sm"
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'Your LinkedIn Profile Link is Required'
                                    }
                                })}
                            />
                            <label className="label p-1">
                                {errors.linkedIn?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.linkedIn.message}
                                    </span>
                                }
                            </label>
                        </div>
                        <div className="flex justify-center pt-3">
                            <input
                                disabled={errors.address || errors.phone || errors.education || errors.linkedIn}
                                className='btn btn-outline btn-sm w-32 text-primary hover:bg-primary hover:border-primary rounded-2xl' type="submit" value='Update' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;