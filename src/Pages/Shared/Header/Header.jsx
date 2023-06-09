import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const headerMenu = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/instructors">Instructors</Link></li>
    <li><Link to="/classes">Classes</Link></li>
    <li><Link to="/dashboard/userhome">Dashboard</Link></li>
  </>
  return (
    <div>
      <div className="navbar bg-base-100 xs:w-[85%] md:w-[80%] mx-auto pt-5 pb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {headerMenu}
            </ul>
          </div>
          <Link to="/" className='flex items-center'>
            <img src="" alt="" />
            <h3 className='ml-2'>
              Drawing
              <span>School</span>
            </h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {headerMenu}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/sign-in" className="btn btn-outline btn-warning">Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Header