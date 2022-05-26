import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const url = `https://vertex-tools.herokuapp.com/tools/${id}`;
    const { data: tool, isLoading, refetch } = useQuery('tool', () =>
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

    if (loading || isLoading) {
        return <Loading></Loading>
    };


    const time = format(new Date(), 'PPpp');

    const onSubmit = data => {
        const address = data.address;
        const phone = data.phone;
        const quantity = data.quantity;

        const order = {
            name: user.displayName,
            email: user.email,
            toolName: tool.toolName,
            price: tool.pricePerUnit,
            productId: id,
            address,
            quantity,
            phone,
            time,
        };

        const url = `https://vertex-tools.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
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
                    console.log("Order insertedId", data.insertedId);
                    toast.success("Order Added Successfully !");
                    refetch();
                }
                else {
                    toast.error('Failed to add Order');
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <div className='flex justify-center items-center px-5 pt-5'>
            <div className="card w-full shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Purchase Item: {tool.toolName}</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-base-100">

                        <div className="grid lg:grid-cols-2 gap-10 mb-5">
                            <div>
                                <h2>Your Information</h2>
                                <div className="form-control w-full">
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
                            </div>



                            <div className="flex flex-col items-center">
                                <h2 className='mb-6'>Products Information</h2>
                                <div className="stats stats-vertical shadow md:stats-horizontal place-items-center">
                                    <div className="stat">
                                        <div className="stat-figure text-primary">
                                            <FontAwesomeIcon icon={faTools}></FontAwesomeIcon>
                                        </div>
                                        <div className="stat-desc">ID: {tool._id}</div>
                                        <div className="stat-value text-primary text-2xl">{tool.pricePerUnit}$ Per Unit</div>
                                        <div className="text-primary font-semibold">Tools: {tool.toolName}</div>
                                        <div className="stat-desc">Add on {tool.time}</div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-title">Available Quantity</div>
                                        <div className="stat-value text-primary text-2xl">{tool.availableQuantity} Piece</div>
                                        <div className="stat-title">Minimum Order Quantity</div>
                                        <div className="stat-value text-primary text-2xl">{tool.minimumOrderQuantity} Piece</div>
                                    </div>
                                </div>



                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xs">Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        defaultValue={tool.minimumOrderQuantity}
                                        className="input input-bordered w-full  rounded input-xs"
                                        {...register("quantity", {
                                            required: {
                                                value: true,
                                                message: 'Quantity is Required'
                                            },
                                            max: {
                                                value: tool.availableQuantity,
                                                message: `You can't order more than available quantity of products`
                                            },
                                            min: {
                                                value: () => tool.minimumOrderQuantity,
                                                message: `You can't order less than minimum order quantity of products`
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.quantity?.type === 'required'
                                            &&
                                            <span className="label-text-alt text-red-500">
                                                {errors.quantity.message}
                                            </span>
                                        }
                                        {errors.quantity?.type === 'max'
                                            &&
                                            <span className="label-text-alt text-red-500">
                                                {errors.quantity.message}
                                            </span>
                                        }
                                        {errors.quantity?.type === 'min'
                                            &&
                                            <span className="label-text-alt text-red-500">
                                                {errors.quantity.message}
                                            </span>
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <input
                                disabled={errors.address || errors.phone || errors.quantity}
                                className='btn btn-outline btn-sm w-32 text-primary hover:bg-primary hover:border-primary' type="submit" value='Purchase' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;