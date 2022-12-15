import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('https://vertex-tools-api.onrender.com/reviews').then(res =>
            res.json()
        )
    );

    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div className='mt-20'>
            <div className='text-4xl font-bold text-center mb-5 text-primary'>Recently Added Reviews</div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 p-3 2xl:p-2'>
                {reviews?.slice(0, 6).map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>
                )}
            </div>
        </div>
    );
};

export default Reviews;