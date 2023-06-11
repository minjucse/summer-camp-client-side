import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
const Banner = () => {
    return (
        <div className="carousel md:w-[80%] lg:w-[80%] xs:w-[85%] h-[550px] mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" />
                <div className="absolute  flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <p></p>
                        <h2 className='text-3xl font-bold'>Affordable Price For Toy</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-warning">  READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle justify-end"><BsArrowLeft /></a>
                    <a href="#slide2" className="btn btn-circle justify-start"><BsArrowRight /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1633007400080-f37dfabbf2e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-full" />
                <div className="absolute rounded-xl flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <p></p>
                        <h2 className='text-3xl font-bold'>Affordable Price For Toy</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-warning">  READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle justify-end"><BsArrowLeft /></a>
                    <a href="#slide3" className="btn btn-circle justify-start"><BsArrowRight /></a>
                </div>
            </div>

        </div>
    )
}

export default Banner