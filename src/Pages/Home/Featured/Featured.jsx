import React from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import Container from '../../../Components/Container'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BsWallet } from 'react-icons/bs';

const Featured = () => {
    return (
        <div>
            <SectionTitle subHeading="" heading="Why Choose Us" ></SectionTitle>
            <div className='mb-12 mt-20'>
                <Container>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className='pl-8 pt-8'>
                                    <div className='icon-box'>
                                        <AiOutlineClockCircle></AiOutlineClockCircle>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Perfect Timing</h2>
                                    <p>We are a certified driving training of center. we will help you.</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className='pl-8 pt-8'>
                                    <div className='icon-box'>
                                        <AiOutlineDollarCircle></AiOutlineDollarCircle>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Afordable Fee</h2>
                                    <p>We are a certified driving training of center. we will help you.</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className='pl-8 pt-8'>
                                    <div className='icon-box'>
                                        <FaUsers></FaUsers>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Expert Team</h2>
                                    <p>We are a certified driving training of center. we will help you.</p>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className='pl-8 pt-8'>
                                    <div className='icon-box'>
                                        <BsWallet></BsWallet>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Payment Plan</h2>
                                    <p>We are a certified driving training of center. we will help you.</p>

                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Featured