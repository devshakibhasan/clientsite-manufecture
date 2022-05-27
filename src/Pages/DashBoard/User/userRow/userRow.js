import React from 'react';
import { toast } from 'react-toastify';
import './userRow.css'


const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://manufecture-app.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr className='userRow'>
            <th>1</th>
            <td className='userRow'>{email}</td>
            <td className='userRow'>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs bg-primary p-4">Make Admin</button>}</td>
            <td className='userRow'><button class="btn btn-xs bg-primary p-4">Remove User</button></td>
        </tr>
    );
};

export default UserRow;