import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PROMISE);

const Payment = () => {
    const { id } = useParams();

    const url = `https://vertex-tools-api.onrender.com/order/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () =>
        fetch(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='w-full px-4 mt-10'>
                <div className="px-2 my-7 lg:mt-0 w-full">
                    <div>
                        <p className='font-bold text-primary text-xl py-3'>Hello, {order?.name}</p>
                        <h2 className="card-title">Please Pay for {order?.toolName}</h2>
                        <p>Your Added Tool on : <span className='text-orange-700'>{order?.time}</span></p>
                        <p>Please pay: ${order?.price * order?.quantity}</p>
                    </div>
                </div>
                <div className=" rounded-2xl flex-shrink-0 w-full sm:w-3/4 2xl:w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;