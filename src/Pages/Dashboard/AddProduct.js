import { format } from 'date-fns';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const [addProductLoad, setAddProductLoad] = useState(false)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const imageStorageKey = process.env.REACT_APP_iMAGE_STOREAGE_KEY;


    const time = format(new Date(), 'PPpp');

    const onSubmit = data => {
        setAddProductLoad(true);
        console.log('hello');
        const image = data.image[0];

        const formData = new FormData();

        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const tool = {
                        toolName: data.toolName,
                        toolImage: result.data.url,
                        shortDescription: data.description,
                        minimumOrderQuantity: data.minOrderQuantity,
                        availableQuantity: data.quantity,
                        pricePerUnit: data.price,
                        time
                    };
                    // send to your database
                    fetch('https://vertex-tools.herokuapp.com/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(response => {
                            if (response.status === 403 || response.status === 401) {
                                signOut(auth);
                                toast.error('Invalid Access Sign In Again!');
                                navigate('/login');
                            }
                            return response.json();
                        })
                        .then(inserted => {
                            if (inserted.insertedId) {
                                setAddProductLoad(false);
                                toast.success('Tool added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add Tool');
                            }
                        });
                }
            });
    };

    if (addProductLoad) {
        return <Loading></Loading>
    };

    return (
        <div className='flex justify-center items-center px-5 pt-5'>
            <div className="card w-full shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary">Add a Product</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-base-100">

                        <div className="form-control w-full ">
                            <span className="label-text text-xs pt-2 pb-1">Tool Name</span>
                            <input
                                type="text"
                                placeholder="Please Enter Tool Name"
                                className="input input-bordered rounded input-xs w-full "
                                {...register("toolName", {
                                    required: {
                                        value: true,
                                        message: 'Tool Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.toolName?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.toolName.message}
                                    </span>
                                }
                            </label>
                        </div>

                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">Quantity</span>
                            <input
                                type="number"
                                placeholder="Please Enter Quantity"
                                className="input input-bordered w-full  rounded input-xs"
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: 'Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.quantity.message}
                                    </span>
                                }
                            </label>
                        </div>

                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">Minimum Order Quantity</span>
                            <input
                                type="number"
                                placeholder="Please Enter Minimum Order Quantity"
                                className="input input-bordered w-full  rounded input-xs"
                                {...register("minOrderQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.minOrderQuantity?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.minOrderQuantity.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">Price Per Unit</span>
                            <input
                                type="number"
                                placeholder="Please Enter Price Per Unit"
                                className="input input-bordered w-full  rounded input-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price Per Unit is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.price.message}
                                    </span>
                                }
                            </label>
                        </div>



                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">Tools Description</span>
                            <textarea
                                placeholder="Please Description in Maximum 50 Letters"
                                className="input input-bordered w-full h-16 rounded input-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Description can't be Larger than 50 Letters"
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

                        <div className="form-control w-full ">
                            <span className="label-text text-xs pb-1">Image</span>
                            <input
                                type="file"
                                className="w-full text-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required'
                                    &&
                                    <span className="label-text-alt text-red-500">
                                        {errors.image.message}
                                    </span>
                                }
                            </label>
                        </div>


                        <div className="flex justify-center">
                            <input
                                disabled={errors.toolName || errors.quantity || errors.minOrderQuantity || errors.price || errors.image || errors.description}
                                className='btn btn-outline btn-sm w-32 text-primary hover:bg-primary hover:border-primary' type="submit" value='Add Product' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;