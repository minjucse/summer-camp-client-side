import React, {useContext } from 'react'
import Container from '../../../Components/Container'
import SectionTitle from '../../../Components/SectionTitle'
import { useQuery } from "@tanstack/react-query";
import useAxiosService from "../../../hooks/useAxiosService";
import { useSpring, animated } from '@react-spring/web';
import useStudents from "../../../hooks/useStudent";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { AuthContext } from '../../../providers/AuthProvider';
import service from '../../../hooks/useBaseServices';
import Swal from 'sweetalert2';
const PopularClasses = () => {
  const { userInfo } = useContext(AuthContext);
  const [useStudent] = useStudents();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosService] = useAxiosService();

  const { data: popularClasses = [] } = useQuery(['popularClasses'], async () => {
    const res = await axiosService.get('/topclasses')
    return res.data;
  })
  const springs = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  })
  const handleSubmitItem = (data) => {
    const saveData = {
      studentEmail: userInfo.email,
      classId: data._id,
      instructorEmail: data.createdBy,
      name: data.name,
      classImage: data.classImage,
      quantity: data.quantity,
      price: data.price,
      instructorName: data.createdName
    }

  if (!useStudent) {
    Swal.fire('Please Sign In And Select Class')
  }
  else {
    service.userCreate("add-select-class", saveData).then(res => {
      
      if (res.data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Success Add Your Select Class!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
      else{
        let message ={};
        message = res.data.message;

        Swal.fire(`${message}`);
      }

    })
      .catch(err => {
        console.log(err);
      });
  }
}

  return (
    <animated.div style={{ reverse: true, ...springs }}>
      <SectionTitle subHeading="" heading="Popular Classes" ></SectionTitle>
      <div className='mb-12 mt-20'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
              popularClasses?.map((item, index) => (
                <div key={index}>
                  <div className="card bg-base-100 shadow-xl">
                    <figure><img src={item.classImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Name: {item.name}!
                      </h2>
                      <p>Instructor Name: {item.createdName}</p>
                      <p>Available Seats:  {item.quantity != 0 ? <span className="badge badge-accent ml-2">
                        {item.quantity}
                      </span> :
                        <span className="badge badge-error">
                          {item.quantity}
                        </span>
                      }
                      </p>
                      <p>Price: {item.price}</p>
                      <div className="card-actions justify-end">
                        {useStudent && item.quantity != 0 ?
                          <button onClick={() => handleSubmitItem(item)} type="button" className="btn btn-sm btn-outline btn-warning">Select </button>
                          : isAdmin || isInstructor ?
                            <button onClick={() => handleSubmitItem(item)} type="button" className="btn btn-sm btn-disabled">Select </button>
                            :
                            <button onClick={() => handleSubmitItem(item)} type="button" className="btn btn-sm btn-outline btn-warning">Select </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>

              ))
            }
          </div>
        </Container>
      </div>

    </animated.div>
  )
}

export default PopularClasses