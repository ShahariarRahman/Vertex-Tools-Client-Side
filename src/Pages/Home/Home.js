import React from 'react';
import Analysis from './Analysis';
import Banner from './Banner';
import BusinessSummaries from './BusinessSummaries';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='mb-32'>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummaries></BusinessSummaries>
            <Reviews></Reviews>
            <Analysis></Analysis>
            <h1 className='text-5xl text-primary my-52 text-center'>Empty Extra Section 2</h1>
        </div>
    );
};

export default Home;