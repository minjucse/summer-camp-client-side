import React, { useState, useEffect } from 'react'
import Container from '../../../Components/Container'
import SectionTitle from '../../../Components/SectionTitle'
import service from '../../../hooks/useBaseServices';

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    service.getAll("all-classes").then(res => {
      setPopularClasses(res.data);
    })
      .catch(err => {
        console.log(err);
      })
  }, []);
  
  return (
    <div>
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
                      <p>Available Seats: {item.quantity}</p>
                      <p>Price: {item.price}</p>
                      
                    </div>
                  </div>
                </div>

              ))
            }
          </div>
        </Container>
      </div>

    </div>
  )
}

export default PopularClasses