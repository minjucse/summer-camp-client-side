import React from 'react'
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

import service from '../../../../hooks/useBaseServices';
const StatusUpdate = (props,status) => {
    console.log(props);
    console.log(status);
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
    <div>StatusUpdate</div>
  )
}

export default StatusUpdate