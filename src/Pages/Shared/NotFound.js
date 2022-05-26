import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/background.jpg';
const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="justify-center h-screen p-6 sm:p-16" style={{ background: `url(${image})` }}>
            <div className="text-center pt-8">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                <button className="bg-primary text-white font-semibold px-6 py-3 rounded-md mr-6">
                    <Link to='/'> HOME</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound; <h2>Not Found</h2>