import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) {
        return <Loading></Loading>
    };

    const time = format(new Date(), 'PPpp');

    const onSubmit = data => {
        const description = data.description;
        const rating = data.rating;

        const review = {
            name: user.displayName,
            review: description,
            rating,
            time
        };

        const url = 'https://vertex-tools.herokuapp.com/reviews';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
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
                if (data.insertedId) {
                    console.log("Review insertedId", data.insertedId);
                    toast.success("Review Added Successfully !");
                    reset();
                    navigate('/');
                }
                else {
                    toast.error('Failed to add Review');
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='px-2 my-7 lg:mt-0'>
            <h2 className="text-center font-bold text-primary text-2xl pt-5">Add a Review</h2>
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
                            <span className="label-text text-sm pt-2 pb-1">Ratings</span>
                            <input
                                type="number"
                                placeholder="Please Give Ratings in 1 to 5"
                                className="input input-bordered rounded input-sm w-full "
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Give Ratings is Required'
                                    },
                                    max: {
                                        value: 5,
                                        message: "Ratings can't be larger than 5"
                                    },
                                    min: {
                                        value: 1,
                                        message: "Ratings can't be Less than 1"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.rating?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.rating.message}
                                    </span>
                                }
                                {errors.rating?.type === 'min'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.rating.message}
                                    </span>
                                }
                                {errors.rating?.type === 'max'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.rating.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <span className="label-text text-sm pb-1">Description</span>
                            <textarea
                                placeholder="Please Description in Maximum 250 Letters"
                                className="input input-bordered w-full h-32 rounded input-sm"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    },
                                    maxLength: {
                                        value: 250,
                                        message: "Description can't be Larger than 250 Letters"
                                    },
                                })}
                            >

                            </textarea>

                            <label className="label">
                                {errors.description?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.description.message}
                                    </span>
                                }
                                {errors.description?.type === 'maxLength'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.description.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="flex justify-center">
                            <input
                                disabled={errors.rating || errors.description}
                                className='btn btn-outline btn-sm w-32 text-primary hover:bg-primary hover:border-primary rounded-2xl' type="submit" value='Add Review' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;