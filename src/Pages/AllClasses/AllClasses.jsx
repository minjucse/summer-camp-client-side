import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Container from '../../Components/Container'
import service from '../../hooks/useBaseServices';
import { Helmet } from 'react-helmet-async';

const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);

  useEffect(() => {
    service.getAll("all-users").then(res => {
      setAllClasses(res.data);
    })
      .catch(err => {
        console.log(err);
      })
  }, []);
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
            {/* {
              allClasses?.map((item, index) => (
                <div key={index}>
                  <div className="team-block">
                    <div className='image-box'>
                      <div className='image'>
                        <img src={item.imageURL} alt="" />
                      </div>
                    </div>
                    <div className="lower">
                      <h4><a href="team.html"> {item.name}</a></h4>
                      <div className="designation">{item.email}</div>

                    </div>
                  </div>
                </div>

              ))
            } */}
            <div>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Name: Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>Instructor Name: </p>
                  <p>Available Seats: </p>
                  <p>Price: </p>
                  <div className="card-actions justify-end">
                   
                    <div className="badge badge-outline">Select</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default AllClasses