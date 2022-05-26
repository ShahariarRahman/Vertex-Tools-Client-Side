import React, { useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='h-screen flex justify-center items-center'>
            <InfinitySpin width="170" color="#5c7f67" />
        </div>
    );
};

export default Loading;