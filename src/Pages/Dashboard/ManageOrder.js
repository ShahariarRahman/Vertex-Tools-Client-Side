import React from 'react';

const ManageOrder = ({ order, index }) => {
    return (
        <tr className='text-xs 2xl:text-sm'>
            <th className='py-1 font-normal'>{index + 1}</th>
            <td className='py-1'>
                <div>
                    <p>Name: {order.name}</p>
                    <p>Email: {order.email}</p>
                    <p>Phone: {order.phone}</p>
                </div>
            </td>
            <td className='py-1'>
                <div>
                    <p>Product: {order.toolName}</p>
                    <p>Quantity: {order.quantity}</p>
                    <p>Time: {order.time}</p>
                </div>
            </td>
            <td className='py-1 font-semibold text-xs'>
                <div>Payment:
                    {order.paid
                        ?
                        <span className='text-green-600'> Paid</span>
                        :
                        <span className='text-red-500'> Unpaid</span>
                    }
                </div>
                <div> Delivery:
                    {order.status
                        ?
                        <span className='text-green-600'> Shipped</span>
                        :
                        <span className='text-red-500'> Pending</span>
                    }
                </div>
            </td>
            <td className='py-1'>
                <button className="btn btn-xs 2xl:btn-sm capitalize bg-primary border-none">Ship Now</button>
            </td>
        </tr>
    );
};

export default ManageOrder;