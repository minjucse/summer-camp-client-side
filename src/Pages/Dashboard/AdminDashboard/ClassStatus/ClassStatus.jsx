import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import service from '../../../../hooks/useBaseServices';
import useAxiosService from "../../../../hooks/useAxiosService";

const ClassStatus = () => {
    const [axiosService] = useAxiosService();
    
    const { data: classStatus = [], refetch } = useQuery(['classStatus'], async () => {
        const res = await axiosService.get('/api/class-list')
        return res.data;
    })

    const handleChangeStatus = (_id, feedback, status) => {
        let data = {
            id: _id,
            feedback: feedback,
            status: status
        };

        service.userUpdate("class-update", data).then(res => {

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
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Feedback</th>
                                <th className='text-center'>Current Status </th>
                                <th className='text-center'>Action</th>
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
                                        {item.status === 'approved' ?
                                            <>
                                                <button className="btn btn-disabled mr-2">Approve</button>
                                                <button className="btn  btn-disabled ml-2">Deny </button>
                                            </> :
                                            <button onClick={() => handleChangeStatus(item, 'approved')} className="btn btn-ghost bg-orange-600  text-whiteml-2 ">Approve</button>
                                        }
                                        {item.status === 'deny' ?
                                            <>
                                                <button className="btn btn-disabled mr-2">Approve</button>
                                                <button className="btn  btn-disabled ml-2">Deny </button>
                                            </> :
                                            <button onClick={() => handleChangeStatus(item, 'deny')} className="btn btn-ghost bg-sky-600 text-white ml-2">Deny </button>
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

export default ClassStatus