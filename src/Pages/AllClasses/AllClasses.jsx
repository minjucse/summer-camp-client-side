import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Container from '../../Components/Container'
import service from '../../hooks/useBaseServices';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';

const AllClasses = () => {
  const { userInfo } = useContext(AuthContext);
  const [allClasses, setAllClasses] = useState([]);


  useEffect(() => {
    service.getAll("all-classes").then(res => {
      setAllClasses(res.data);
    })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleSubmitItem = (data) => {
    service.userCreate("add-select-class", data).then(res => {
      if (res.data.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Success Add Your Select Class!`,
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
                      <p>Available Seats: {item.quantity}</p>
                      <p>Price: {item.price}</p>
                      <div className="card-actions justify-end">
                        {userInfo ?
                          <button onClick={() => handleSubmitItem(item)} type="button" className="btn btn-sm btn-outline btn-warning">Select </button>
                          :
                          <div className="badge badge-outline">Select</div>
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