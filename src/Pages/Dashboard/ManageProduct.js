import React from 'react';

const ManageProduct = ({ tool, index, setDeleteToolId }) => {
    return (
        <tr className='text-xs 2xl:text-sm'>
            <th className='py-1 font-normal'>{index + 1}</th>
            <td className='py-1'>Product: {tool.toolName}</td>
            <td className='py-1'>{tool.time}</td>
            <td className='py-1'>{tool.availableQuantity}</td>
            <td className='py-1'>
                <label
                    onClick={() => setDeleteToolId(tool._id)}
                    htmlFor="DeleteToolModal"
                    className="btn btn-xs 2xl:btn-sm capitalize bg-red-500 hover:bg-red-600 border-none"
                >Detete
                </label>
            </td>
        </tr>
    );
};

export default ManageProduct;