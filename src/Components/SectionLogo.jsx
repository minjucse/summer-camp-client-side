import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const SectionLogo = () => {
    return (
        <div className='logo-area'>
            <Link to="/" className='flex items-center'>
                <img className=' rounded-full' src={logo} alt="" />
                <div className='ml-2'>
                    <h3 className='font-semibold'>
                        AM
                    </h3>
                    <span className=' font-normal'>Drawing School</span>
                </div>
            </Link>
        </div>
    )
}

export default SectionLogo