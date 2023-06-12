import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/Main';
import SignIn from '../Pages/Auth/SignIn/SignIn';
import SignUp from '../Pages/Auth/SignUp/SignUp';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import Dashboard from '../Layout/Dashboard';
import AdminDashboard from '../Pages/Dashboard/AdminDashboard/AdminDashboard';
import AllUsers from '../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers';

export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <PageNotFound/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/sign-in',
          element: <SignIn/>
        },
        {
          path: '/sign-up',
          element: <SignUp/>
        },
  
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      errorElement: <PageNotFound/>,
      children: [
        {
          path: 'admin-home',
          element: <AdminRoute><AdminDashboard/></AdminRoute>,
        },
        {
          path: 'all-users',
          element: <AdminRoute><AllUsers/></AdminRoute>,
        }
  
      ]
    },
  
  ]) ;
