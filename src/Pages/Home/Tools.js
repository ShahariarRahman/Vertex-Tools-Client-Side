import React from 'react';
import { useQuery } from 'react-query';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const [tools, isLoading] = useTools();

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div>
            <div className='text-4xl font-bold text-center my-10 text-primary'>Recently Added Tools</div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 p-3 2xl:p-2'>
                {tools.slice(0, 6).map(tool => <Tool
                    key={tool._id}
                    tool={tool}
                ></Tool>
                )}
            </div>
        </div>
    );
};

export default Tools;