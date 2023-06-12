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
import ClassStatus from '../Pages/Dashboard/AdminDashboard/ClassStatus/ClassStatus';
import Instructors from '../Pages/Instructors/Instructors';
import AllClasses from '../Pages/AllClasses/AllClasses';
import StudentDashboard from '../Pages/Dashboard/StudentDashboard/StudentDashboard';
import EnrolledClass from '../Pages/Dashboard/StudentDashboard/EnrolledClass';
import SelectedClass from '../Pages/Dashboard/StudentDashboard/SelectedClass';
import InstructorsDashboard from '../Pages/Dashboard/InstructorsDashboard/InstructorsDashboard';
import ClassAdd from '../Pages/Dashboard/InstructorsDashboard/InstructorClass/Upsert';
import ClassLists from '../Pages/Dashboard/InstructorsDashboard/InstructorClass/List';
import InstructorRoute from './InstructorRoute';
import StatusUpdate from '../Pages/Dashboard/AdminDashboard/ClassStatus/StatusUpdate';

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
        {
          path: '/instructors',
          element: <Instructors/>
        }, {
          path: '/classes',
          element: <AllClasses/>
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
          path: 'class-status',
          element: <AdminRoute><ClassStatus/></AdminRoute>,
        },
        {
          path: 'update-status',
          element: <AdminRoute><StatusUpdate/></AdminRoute>,
        },
        {
          path: 'all-users',
          element: <AdminRoute><AllUsers/></AdminRoute>,
        }, 
        {
          path: 'instructor-home',
          element: <InstructorRoute><InstructorsDashboard/></InstructorRoute>,
        },
        {
          path: 'class-list',
          element: <InstructorRoute><ClassLists/></InstructorRoute>,
        },
        {
          path: 'Add-class',
          element: <InstructorRoute><ClassAdd/></InstructorRoute>,
        }, 

        {
          path: 'student-home',
          element: <PrivateRoute><StudentDashboard/></PrivateRoute>
        } , 
        {
          path: 'selected-class',
          element: <PrivateRoute><SelectedClass/></PrivateRoute>
        },
        {
          path: 'enrolled-class',
          element: <PrivateRoute><EnrolledClass/></PrivateRoute>
        },
  
      ]
    },
  
  ]) ;
