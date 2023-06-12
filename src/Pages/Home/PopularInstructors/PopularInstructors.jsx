import React, { useState, useEffect } from 'react'
import Container from '../../../Components/Container'
import SectionTitle from '../../../Components/SectionTitle'
import service from '../../../hooks/useBaseServices';

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    service.getAll("all-classes").then(res => {
      setPopularInstructors(res.data);
    })
      .catch(err => {
        console.log(err);
      })
  }, []);
  return (
    <div>
      <SectionTitle subHeading="" heading="Popular Instructors" ></SectionTitle>
      <div className='mb-12 mt-20'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            {
              popularInstructors?.map((item, index) => (
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
            }
          </div>
        </Container>
      </div>

    </div>
  )
}

export default PopularInstructors