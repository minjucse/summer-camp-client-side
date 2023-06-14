import React, { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosService from "../../../hooks/useAxiosService";
import moment from 'moment/moment';
import { AuthContext } from '../../../providers/AuthProvider';


const PaymentHistory = () => {
    const [axiosService] = useAxiosService();
    const { userInfo } = useContext(AuthContext);
  const { data: selectedClass = [] } = useQuery(['selectedClass'], async () => {
    const res = await axiosService.get(`/student/paymentHistory?email=${userInfo?.email}`)
    return res.data;

  })
 
  return (
    <div className='card shadow-xl bg-base-100'>
      <Helmet>
        <title>AM Drawing School | Payment History</title>
      </Helmet>
      <h2 className='text-center text-3xl mt-8'> My Payment History List</h2>

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
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass?.map((item, index) => (
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
                          <img src={item.image} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td> {item?.instructorName}</td>
                  <td> {item?.instructorEmail}</td>
                  <td> {item?.quantity}</td>
                  <td> {item?.price}</td>
                  <td>{moment(item?.date).format("'MMMM Do YYYY, h:mm:ss a'")}</td>
                </tr>
              ))}


            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory