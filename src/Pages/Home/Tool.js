import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, toolName, toolImage, shortDescription, minimumOrderQuantity, availableQuantity, pricePerUnit } = tool;
    const navigate = useNavigate();
    return (
        <div className="h-52 card card-side bg-base-100 shadow-xl">
            <figure><img className='h-full w-full' src={toolImage} alt="Movie" /></figure>
            <div className="card-body px-3 py-2 text-xs 2xl:text-sm font-thin">
                <h2 className="font-semibold text-lg whitespace-nowrap">{toolName}</h2>
                <p>Available Quantity: {availableQuantity}</p>
                <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
                <p>Price Per Unit: ${pricePerUnit}</p>
                <p>Description: {shortDescription}</p>
                <div className="card-actions md:justify-center">
                    <button
                        className="btn btn-sm btn-primary text-xs"
                        onClick={() => navigate(`/purchase/${_id}`)}
                    >purchase
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Tool;