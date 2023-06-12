import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Container from '../../Components/Container'
import HeroSection from '../../Components/HeroSection'
import service from '../../hooks/useBaseServices';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        service.getAll("all-users").then(res => {
            setInstructors(res.data);
        })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <Helmet>
                <title>AM Drawing School | Instructors</title>
            </Helmet>
            <div className="hero-section">
                <div className="content">
                    <ul className='flex items-center justify-center mb-3'>
                        <li className='mr-3'><Link to="/">Home </Link> </li>
                        <li><span className='mr-3'>/</span>Instructors </li>
                    </ul>
                    <h2 className='text-3xl'> Our Instructors</h2>

                </div>
            </div>
            <div className='mb-20 mt-20'>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        {
                            instructors?.map((item, index) => (
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

export default Instructors