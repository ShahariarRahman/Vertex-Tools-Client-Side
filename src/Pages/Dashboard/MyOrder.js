import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyOrder = ({ myOrder, index, setDeleteOrderdId }) => {
    const navigate = useNavigate();
    return (
        <tr className='text-xs 2xl:text-sm'>
            <th className='py-1 font-normal'>{index + 1}</th>
            <td className='py-1'>
                <div>
                    <p>Product: {myOrder.toolName}</p>
                    <p>Quantity: {myOrder.quantity}</p>
                    <p>Time: {myOrder.time}</p>
                </div>
            </td>
            <td className='py-1 font-semibold text-xs'>
                <div>Payment:
                    {myOrder.paid
                        ?
                        <>
                            <span className='text-green-600'> Paid</span>
                            <p>Transction ID: <span className='text-green-600'>{myOrder.transactionId}</span> </p>
                        </>
                        :
                        <span className='text-red-500'> Unpaid</span>
                    }
                </div>
                <div> Delivery:
                    {myOrder.shipped
                        ?
                        <span className='text-green-600'> Shipped</span>
                        :
                        <span className='text-red-500'> Pending</span>
                    }
                </div>
            </td>

            <td className='py-1'>
                <button
                    disabled={myOrder.paid || myOrder.shipped}
                    className="btn btn-xs 2xl:btn-sm capitalize bg-primary border-none"
                    onClick={() => navigate(`/dashboard/payment/${myOrder._id}`)}
                >Pay Now
                </button>
            </td>
            <td className='py-1'>
                <label
                    onClick={() => setDeleteOrderdId(myOrder._id)}
                    disabled={myOrder.paid || myOrder.shipped}
                    htmlFor="CancelOrderModal"
                    className="btn btn-xs 2xl:btn-sm capitalize bg-red-500 hover:bg-red-600 border-none"
                >Cancel
                </label>
            </td>

        </tr>
    );
};

export default MyOrder;