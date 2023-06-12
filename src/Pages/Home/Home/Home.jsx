import React from 'react'
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner'
import Featured from '../Featured/Featured';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>AM Drawing School | Home</title>
      </Helmet>

      <div className='flex flex-col justify-center items-center'>
        <Banner />
        <PopularClasses/>
        <PopularInstructors/>
        <Featured/>

      </div>
    </>
  )
}

export default Home