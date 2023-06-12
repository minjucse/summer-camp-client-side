import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import service from '../../../../hooks/useBaseServices';
import useAxiosService from "../../../../hooks/useAxiosService";

const AllUsers = () => {
    const [axiosService] = useAxiosService();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosService.get('/api/users')
        return res.data;

    })

    const handleMakeAdmin = (user, role) => {
        let data = {
            id: user._id,
            role: role,
        };
        service.userUpdate("user/roleset", data).then(res => {

            if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='card shadow-xl bg-base-100'>
            <Helmet>
                <title>AM Drawing School | All users</title>
            </Helmet>
            <h2 className='text-center text-3xl'>All Users:- {users.length} </h2>

            <div className="card-body">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        #
                                    </label>
                                </th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th className='text-center'>Current Role </th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((item, index) => (
                                <tr key={index}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>

                                    <td>
                                        {item.name}
                                    </td>
                                    <td> {item.email}</td>
                                    <td className='text-center'>
                                        {item.role}
                                    </td>
                                    <td className='text-center'>
                                        {item.role === 'admin' ? <button  className="btn btn-disabled mr-2">Make Admin</button> :
                                            <button onClick={() => handleMakeAdmin(item, 'admin')} className="btn btn-ghost bg-orange-600  text-white">Make Admin</button>
                                        }
                                        {item.role === 'instructor' ? <button  className="btn  btn-disabled ml-2">Make Instructor</button> :
                                            <button onClick={() => handleMakeAdmin(item, 'instructor')} className="btn btn-ghost bg-sky-600 text-white mr-2">Make Instructor</button>
                                        }

                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllUsers