import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/Main';
import SignIn from '../Pages/Auth/SignIn/SignIn';
import SignUp from '../Pages/Auth/SignUp/SignUp';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

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
  
  
  ]) ;
