import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className='h-full p-8 bg-[#E9ECEE]'><Outlet /></div>
            </div>
            <div className="drawer-side bg-[#fff] ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full ">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><Link to='/dashboard/admin-home'>Dash board</Link></li>
                            <li><Link to='/dashboard/class-status'>Classes</Link></li>
                            <li><Link to='/dashboard/all-users'>All Users</Link></li>

                        </> : isInstructor ? <>
                            <li><Link to='/dashboard/instructor-home'>Dash board</Link></li>
                            <li><Link to='/dashboard/class-list'>My Classes</Link></li>
                            <li><Link to='/dashboard/Add-class'>Add New Class</Link></li>
                        </>
                            : <>
                               <li><Link to='/dashboard/student-home'>Dash board</Link></li>
                               <li><Link to='/dashboard/selected-class'>My Selected Class</Link></li>
                               <li><Link to='/dashboard/enrolled-class'>My Enrolled Class</Link></li>
                            </>
                    }


                </ul>

            </div>
        </div>
    )
}

export default Dashboard