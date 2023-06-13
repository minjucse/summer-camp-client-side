import React, { useContext } from 'react'
import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import useAxiosService from "../../../hooks/useAxiosService";
import { AuthContext } from '../../../providers/AuthProvider';
import service from '../../../hooks/useBaseServices';
import { FaTimesCircle } from 'react-icons/fa';
import { FaCcAmazonPay } from 'react-icons/fa';

const SelectedClass = () => {
  const { userInfo } = useContext(AuthContext);
  const [axiosService] = useAxiosService();

  const { data: selectedClass = [], refetch } = useQuery(['selectedClass'], async () => {
    const res = await axiosService.get(`/api/all-select-class/${userInfo?.email}`)
    return res.data;

  })
  const handleDelete = id => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ',
        cancelButton: 'btn btn-error mr-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        service.deleteData(`select-class/${id}`).then(res => {
          refetch();

          if (res.data.deletedCount) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
          .catch(err => {
            console.log(err);
          });


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });
   
  }
  return (
    <div className='card shadow-xl bg-base-100'>
      <Helmet>
        <title>AM Drawing School | Selected Class</title>
      </Helmet>
      <h2 className='text-center text-3xl'> My Selected Class List</h2>

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
                <th>Payment</th>
                <th>Action</th>
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
                          <img src={item.classImage} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td> {item.instructorName}</td>
                  <td> {item.instructorEmail}</td>
                  <td> {item.quantity}</td>
                  <td> {item.price}</td>
                  <td>
                    <Link className='btn btn-square  btn-success btn-sm ' to={`/product-detail/${item._id}`}>
                      <FaCcAmazonPay />
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-square btn-error btn-sm" onClick={() => handleDelete(item._id)} >
                      <FaTimesCircle></FaTimesCircle>
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

export default SelectedClass