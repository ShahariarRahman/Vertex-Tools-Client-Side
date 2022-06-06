import React from 'react';
import americanExpress from '../../assets/icons/americanExpress.png';
import discover from '../../assets/icons/discover.png';
import mastercard from '../../assets/icons/mastercard.png';
import visa from '../../assets/icons/visa.png';
import dinersClub from '../../assets/icons/dinersClub.png';

const PayMethods = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <h2 className='m-16 text-4xl font-bold text-primary'>Our Payment Methods</h2>
            <div className='w-full h-full rounded-2xl'>
                <div className=' pr-4 mx-7 lg:ml-10 rounded-xl md:grid grid-cols-5 gap-5'>
                    <div className='mb-5 flex justify-center items-center rounded-2xl'>
                        <img className='h-32 w-36 border-primary border-2 rounded-2xl shadow-2xl' src={americanExpress} alt="" />
                    </div>
                    <div className='mb-5 flex justify-center items-center rounded-2xl'>
                        <img className='h-32 w-36 border-primary border-2 rounded-2xl shadow-2xl' src={discover} alt="" />
                    </div>
                    <div className='mb-5 flex justify-center items-center rounded-2xl'>
                        <img className='h-32 w-36 border-primary border-2 rounded-2xl shadow-2xl' src={mastercard} alt="" />
                    </div>
                    <div className='mb-5 flex justify-center items-center rounded-2xl'>
                        <img className='h-32 w-36 border-primary border-2 rounded-2xl shadow-2xl' src={visa} alt="" />
                    </div>
                    <div className='mb-5 flex justify-center items-center rounded-2xl'>
                        <img className='h-32 w-36 border-primary border-2 rounded-2xl shadow-2xl' src={dinersClub} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayMethods;