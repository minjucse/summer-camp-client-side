import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className='h-full p-8 bg-[#E9ECEE]'><Outlet/></div>
            </div>
            <div className="drawer-side bg-[#fff] ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full ">
                    {/* Sidebar content here */}
                    <li><Link to='admin'>Dash board</Link></li>
                    <li><Link to='all-users'>All Users</Link></li>
                    
                </ul>

            </div>
        </div>
    )
}

export default Dashboard