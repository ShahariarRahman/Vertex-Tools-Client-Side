import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, toolName, toolImage, shortDescription, minimumOrderQuantity, availableQuantity, pricePerUnit } = tool;
    const navigate = useNavigate();
    return (
        <div className="h-48 card card-side bg-base-100 shadow-xl grid grid-cols-12">
            <img className='h-48 object-cover w-full col-span-5 sm:col-span-3 md:col-span-5 lg:col-span-4 xl:col-span-5' src={toolImage} alt="tool" />
            <div className="card-body px-3 py-2 text-sm font-thin col-span-7 sm:col-span-9 md:col-span-7 lg:col-span-8 xl:col-span-7 relative">
                <div>
                    <h2 className="font-semibold text-lg whitespace-nowrap capitalize">{toolName}</h2>
                    <p>Available Quantity: {availableQuantity}</p>
                    <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
                    <p>Price Per Unit: ${pricePerUnit}</p>
                    <p>Description: {shortDescription}</p>
                </div>
                <div className="card-actions md:justify-center">
                    <button
                        className="btn btn-sm btn-primary text-xs absolute bottom-2 left-24"
                        onClick={() => navigate(`/purchase/${_id}`)}
                    >purchase
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Tool;