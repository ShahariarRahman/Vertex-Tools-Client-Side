import React from 'react';
import Rating from 'react-rating';
import starFull from '../../assets/icons/star-full.png';
import starEmpty from '../../assets/icons/start-empty.png';


const Review = ({ review }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{review.name}</h2>
                <p className="font-thin">Date: {review.time}</p>
                <p className="font-thin">Review: {review.review}</p>
                <Rating
                    initialRating={review.rating}
                    emptySymbol={<img className='h-5 icon text-primary' src={starEmpty} alt="" />}
                    placeholderSymbol={<img className='h-5 icon' src={starEmpty} alt="" />}
                    fullSymbol={<img className='h-5 icon' src={starFull} alt="" />}
                    readonly
                />
            </div>
        </div>
    );
};

export default Review;