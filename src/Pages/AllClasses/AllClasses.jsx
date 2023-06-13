import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Container from '../../Components/Container'
import service from '../../hooks/useBaseServices';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useStudents from "../../hooks/useStudent";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AuthContext } from '../../providers/AuthProvider';

const AllClasses = () => {
  const { userInfo } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const [allClasses, setAllClasses] = useState([]);
  const [useStudent] = useStudents();

  useEffect(() => {
    service.getAll("all-classes").then(res => {
      setAllClasses(res.data);
    })
      .catch(err => {
        console.log(err);
      })
  }, []);

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
    <div>
      <Helmet>
        <title>AM Drawing School | Classes</title>
      </Helmet>
      <div className="hero-section">
        <div className="content">
          <ul className='flex items-center justify-center mb-3'>
            <li className='mr-3'><Link to="/">Home </Link> </li>
            <li><span className='mr-3'>/</span>Classes </li>
          </ul>
          <h2 className='text-3xl'> Our Classes</h2>

        </div>
      </div>
      <div className='mb-20 mt-20'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
              allClasses?.map((item, index) => (
                <div key={index}>
                  <div className="card bg-base-100 shadow-xl">
                    <figure><img src={item.classImage} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        Name: {item.name}!
                      </h2>
                      <p>Instructor Name: {item.createdName}</p>
                      <p>Available Seats:
                        {item.quantity != 0 ? <span className="badge badge-accent ml-2">
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
            <div>

            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default AllClasses