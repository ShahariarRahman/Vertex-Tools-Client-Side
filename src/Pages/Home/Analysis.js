import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Brush, Bar, LineChart, Line, ResponsiveContainer } from 'recharts';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';

const Analysis = () => {
    const [tools, isLoading] = useTools();
    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div className='flex flex-col justify-center items-center pt-2 w-full'>
            <h2 className='m-10 text-4xl font-bold text-primary'>Manufacturing Analysis</h2>
            <div className='grid lg:grid-cols-2 w-full h-full py-12 gap-5 rounded-2xl'>
                <div className='border-2 border-primary pr-4 pb-16 pt-10 mx-7 lg:ml-10 rounded-md'>
                    <h2 className='mb-10 text-2xl font-semibold text-center text-primary'>Tools &amp; Available Quantity</h2>
                    <ResponsiveContainer width="95%" height={350}>
                        <BarChart width={500} height={400} data={tools} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="1 2" stroke="#38bdf8" />
                            <XAxis dataKey="toolName" stroke="#5c7f67" />
                            <YAxis stroke="#5c7f67" />
                            <Tooltip cursor={{ fill: '#111827' }} />
                            <Brush dataKey="toolName" height={30} stroke="#5c7f67" />
                            <Bar dataKey="availableQuantity" fill="#5c7f67" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className='border-2 border-primary pr-4 pb-16 pt-10 lg:mr-10 mx-7 rounded-md'>
                    <h2 className='mb-10 text-2xl font-semibold text-center text-primary'>Tools &amp; Available Quantity</h2>
                    <ResponsiveContainer width="95%" height={350}>
                        <LineChart width={500} height={400} data={tools} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="1 2" stroke="#38bdf8" />
                            <XAxis dataKey="toolName" stroke="#5c7f67" />
                            <YAxis stroke="#5c7f67" />
                            <Tooltip cursor={{ stroke: '#5c7f67' }} />
                            <Brush dataKey="toolName" height={30} stroke="#5c7f67" />
                            <Line type="monotone" dataKey="availableQuantity" stroke="#5c7f67" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Analysis;