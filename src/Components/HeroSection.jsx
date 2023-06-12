import React from 'react'
import { Link } from 'react-router-dom';

const HeroSection = ({ currentPage, currentTitle}) => {
    console.log(currentPage)
    return (
        <div className="hero">
            <div className="content">
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li>{currentPage} </li>
                </ul>
                <h2 className='text-3xl'>{currentTitle}</h2>
                
            </div>
        </div>
    )
}

export default HeroSection