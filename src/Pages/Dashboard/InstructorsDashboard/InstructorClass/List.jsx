import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosService from "../../../../hooks/useAxiosService";
import { FiEdit } from 'react-icons/fi';

const List = () => {
    const [axiosService] = useAxiosService();
    const { data: classStatus = [], refetch } = useQuery(['classStatus'], async () => {
        const res = await axiosService.get('/api/class-list')
        return res.data;

    })

    return (
        <div className='card shadow-xl bg-base-100'>
            <Helmet>
                <title>AM Drawing School | Class List</title>
            </Helmet>
            <h2 className='text-center text-3xl'> Class List</h2>

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
                                <th>Image</th>
                                <th> Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Feedback</th>
                                <th>Current Status </th>
                                <th>Total Enrolled</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {classStatus?.map((item, index) => (
                                <tr key={index}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.classImage} alt="Image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td> {item.createdName}</td>
                                    <td> {item.createdBy}</td>
                                    <td> {item.quantity}</td>
                                    <td> {item.price}</td>
                                    <td>{item.feedback}</td>
                                    <td className='text-center'>
                                        {item.status}
                                    </td>
                                    <td className='text-center'>
                                        {item.totalEnrolled}
                                    </td>
                                    <td>
                                        <button className="btn btn-square  btn-warning btn-sm mr-2">
                                            <FiEdit></FiEdit>
                                        </button>
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

export default List