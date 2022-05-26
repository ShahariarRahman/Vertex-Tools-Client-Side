import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const MyProfile = () => {
    const { register, formState: { errors, isSubmitting, isDirty, isValid }, handleSubmit } = useForm();

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <Loading></Loading>
    };

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className='flex justify-center items-center px-5 pt-5'>
            <div className="card w-full shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Update Your Profile</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-base-100">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xs">User Name</span>
                            </label>
                            <input
                                className="input input-bordered rounded input-xs w-full "
                                defaultValue={user?.displayName} disabled />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xs">Email Address</span>
                            </label>
                            <input
                                className="input input-bordered rounded input-xs w-full"
                                defaultValue={user?.email} disabled />
                        </div>



                        <div className="form-control w-full ">
                            <span className="label-text text-xs pt-2 pb-1">Address</span>
                            <input
                                type="text"
                                placeholder="Your Address"
                                className="input input-bordered rounded input-xs w-full "
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.address.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">Phone No.</span>
                            <input
                                type="number"
                                placeholder="Your Phone Number"
                                className="input input-bordered w-full  rounded input-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Your Phone Number is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.phone?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.phone.message}
                                    </span>
                                }
                            </label>
                        </div>

                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">Educational Qualification</span>
                            <input
                                type="text"
                                placeholder="Educational Qualification"
                                className="input input-bordered w-full  rounded input-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Your Educational Qualification is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.education?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.education.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">LinkedIn Profile Link</span>
                            <input
                                type="text"
                                placeholder="Your LinkedIn Profile Link"
                                className="input input-bordered w-full  rounded input-xs"
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'Your LinkedIn Profile Link is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.linkedIn?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.linkedIn.message}
                                    </span>
                                }
                            </label>
                        </div>
                        <div className="flex justify-center">
                            <input
                                disabled={errors.address || errors.phone || errors.education || errors.linkedIn}
                                className='btn btn-outline btn-sm w-32 text-primary hover:bg-primary hover:border-primary' type="submit" value='Update' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;