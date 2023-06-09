import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home/Home';
import Main from '../Layout/Main';

export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      //errorElement: <PageNotFound/>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        }
  
      ]
    },
  
  
  ]) ;
