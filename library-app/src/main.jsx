import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'
import {Home, NoPage,LoginForm, User_Dashboard, Admin_Dashboard, Admin_Dash, Userselect, LoginAdmin, UserRegistration} from './pages';
// Router
import {
createBrowserRouter,RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "/admin/Dashboard",
    element: <Admin_Dashboard/>
  },
  
  {
    path: "/admin/Dashboard/Administrator",
    element: <Admin_Dash/>
  },




  {
    path: "/user/Dashboard",
    element: <User_Dashboard/>,
  },
  //admin/dashboard
  //user/dashboard
  {
    //error throw twba
    path: "*",
    element: <NoPage/>,
  },
  
  //admin login
  {
    path:"/user/select",
    element: <Userselect/>
  },
  {
    path:"/user/Admin",
    element:<LoginAdmin/>
  },
  {
    path:"/user/registration",
    element: <UserRegistration/>
  },
  {
    path: "/user/Login",
    element: <LoginForm/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
