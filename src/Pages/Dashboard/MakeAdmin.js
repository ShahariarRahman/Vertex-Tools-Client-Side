import React, { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import Loading from '../Shared/Loading';
import MakeAdminModal from './MakeAdminModal';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const [user, setUser] = useState('')
    const [users, isLoading, refetch] = useUsers();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return <Loading></Loading>;
    };

    return (
        <div className='px-2 my-7 lg:mt-0'>
            <h2 className='text-center font-bold text-primary text-xl py-3 uppercase'>Total Users ({users.length})</h2>
            <div className="overflow-x-auto shadow-xl rounded-2xl">
                <table className="table w-full text-sm">
                    <thead>
                        <tr >
                            <th className='py-2'></th>
                            <th className='py-2'>Email</th>
                            <th className='py-2'>Roll</th>
                            <th className='py-2'>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <UserRow
                            key={user._id}
                            user={user}
                            setUser={setUser}
                            index={index}
                        ></UserRow>
                        )}
                    </tbody>
                </table>
                <MakeAdminModal
                    user={user}
                    refetch={refetch}
                >
                </MakeAdminModal>
            </div>
        </div>
    );
};

export default MakeAdmin;