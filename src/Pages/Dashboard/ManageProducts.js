import React, { useEffect, useState } from 'react';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';
import DeleteToolModal from './DeleteToolModal';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [deleteToolId, setDeleteToolId] = useState('');
    const [tools, isLoading, refetch] = useTools();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div className='px-2 my-7 lg:mt-0'>
            <h2 className='text-center font-bold text-primary text-xl py-3'>Manage Orders ({tools.length})</h2>
            <div className="overflow-x-auto shadow-xl">
                <table className="table w-full text-sm">
                    <thead>
                        <tr >
                            <th className='py-1'></th>
                            <th className='py-1'>Product Name</th>
                            <th className='py-1'>Added On</th>
                            <th className='py-1'>Quantity</th>
                            <th className='py-1'>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tool, index) => <ManageProduct
                            key={tool._id}
                            index={index}
                            tool={tool}
                            setDeleteToolId={setDeleteToolId}
                        ></ManageProduct>
                        )}
                    </tbody>
                </table>
                <DeleteToolModal
                    deleteToolId={deleteToolId}
                    refetch={refetch}
                >

                </DeleteToolModal>
            </div>
        </div>

    );
};

export default ManageProducts;