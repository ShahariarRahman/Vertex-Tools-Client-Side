import React from 'react';
import PayMethods from '../Dashboard/PayMethods';
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
            <PayMethods></PayMethods>
        </div>
    );
};

export default Home;