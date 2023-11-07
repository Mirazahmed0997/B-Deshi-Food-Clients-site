import React from 'react';
import { useQuery } from 'react-query';
import { FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';


const Users = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDelete = (id) => {

    }

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount)
                refetch();
                {
                    Swal.fire({
                        title:  `${user.name} Successfully Admin`,
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
    }
    return (
        <div className='w-full'>
            <h3 className="text-3xl font-semibold">Total Users : {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role == 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUserShield></FaUserShield></button>}</td>
                                <td>
                                    <th>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs">Delete</button>
                                    </th>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;