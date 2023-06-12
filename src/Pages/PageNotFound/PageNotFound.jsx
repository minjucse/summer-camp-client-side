import React from 'react'
import pageImage from '../../assets/pagenotfound.png'
import Container from '../../Components/Container'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div  >
      <Container>
        <div className='notfound mx-auto text-center'>
          <div className='flex  justify-center items-center h-[50%]'>
            <img src={pageImage} alt="" />
          </div>
          <Link className="btn btn-active btn-ghost mt-3" to='/'> Back to Home</Link>
        </div>
      </Container>
    </div>
  )
}

export default PageNotFound