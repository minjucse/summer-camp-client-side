import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import SectionLogo from '../../../Components/SectionLogo';
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useStudents from "../../../hooks/useStudent";

const Header = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [useStudent] = useStudents();
  const { userInfo, signOutUser } = useContext(AuthContext);
  const location = useLocation();


  const handleLogOut = () => {
    signOutUser()
      .then()
      .catch(error => console.log(error));
  };

  const headerMenu = <>
    <li><Link className={location.pathname === '/' ? 'bg-base-200' : ''} to="/">Home</Link></li>
    <li><Link className={location.pathname === '/instructors' ? 'bg-base-200' : ''} to="/instructors">Instructors</Link></li>
    <li><Link className={location.pathname === '/classes' ? 'bg-base-200' : ''} to="/classes">Classes</Link></li>
    {
      isAdmin ?
        <li>
          <Link className={location.pathname === '/dashboard/admin-home' ? 'bg-base-200' : ''} to="/dashboard/admin-home">Dashboard</Link>
        </li> :
        isInstructor ?
        <li>
          <Link className={location.pathname === '/dashboard/instructor-home' ? 'bg-base-200' : ''} to="/dashboard/instructor-home">Dashboard</Link>
        </li> :
        useStudent && <li><Link to="/dashboard/student-home">Dashboard</Link></li>
    }
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
          <SectionLogo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {headerMenu}
          </ul>
        </div>
        <div className="navbar-end">
          {userInfo ?
            <button onClick={handleLogOut} type="button" className="btn btn-outline btn-warning">Sign Out </button>
            :
            <Link to="/sign-in" className="btn btn-outline btn-warning">Sign In</Link>
          }
          {
            userInfo && <div className='user-profile tooltip tooltip-bottom' data-tip={userInfo.displayName}>
              <img className='w-full rounded-full' src={userInfo.photoURL} alt="" />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header