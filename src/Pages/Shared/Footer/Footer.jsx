import React from 'react'
import { Link } from 'react-router-dom'
import SectionLogo from '../../../Components/SectionLogo'
import Container from '../../../Components/Container'


const Footer = () => {
    return (
        <footer className='bg-[#1E1E1E] text-white'>
            <div className="footer pt-10 mt-12 text-base-content xs:w-[85%] md:w-[80%] mx-auto">
                <div className=' text-white'>
                    <SectionLogo />

                    <p >ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div className=' text-white'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className=' text-white'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className=' text-white'>
                    <span className="footer-title">OUR GALLERY</span>
                    <div className="grid grid-flow-col gap-4">
                        <div className='max-w-[80px]'>
                            <img src="https://images.unsplash.com/photo-1535340582796-799448c62e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
                        </div>
                        <div className='max-w-[80px]'>
                            <img src="https://images.unsplash.com/photo-1535340582796-799448c62e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
                        </div>
                        <div className='max-w-[80px]'>
                            <img src="https://images.unsplash.com/photo-1535340582796-799448c62e08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <div className="divider divide-white"></div>
            </Container>
            <Container>
                <p className='text-center pt-8 pb-8'>Copyright © 2023 - All right reserved by
                    <span className='font-semibold'>  AM Drawing School</span>
                </p>
            </Container>

        </footer>
    )
}

export default Footer