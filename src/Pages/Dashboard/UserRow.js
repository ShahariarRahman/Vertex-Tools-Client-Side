import React from 'react';

const UserRow = ({ user, setUser, index }) => {
    const { name, email } = user;
    return (
        <tr className='text-xs 2xl:text-sm capitalize'>
            <td className='py-1'>{index}</td>
            <td className='py-1'>{email}</td>
            <td className='py-1'>
                {user.admin ?
                    <span className='text-blue-600 font-bold'>Admin</span>
                    :
                    <span className='font-bold'>Customer</span>
                }
            </td>
            <td className='py-1'>
                <label
                    disabled={user.admin}
                    onClick={() => setUser({ name, email })}
                    htmlFor="makeAdminModal"
                    className="btn btn-xs 2xl:btn-sm capitalize bg-primary border-none"
                >Make Admin
                </label>
            </td>
        </tr>
    );
};

export default UserRow;