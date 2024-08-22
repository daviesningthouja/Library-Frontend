import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'
import {Home, NoPage, LoginForm, Registration, Dashboard, Userselect, LoginAdmin} from './pages';
// Router
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

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
    path: "Dashboard",
    element: <Dashboard/>,
  },
  {
    //error throw twba
    path: "*",
    element: <NoPage/>,
  },
  {
    path:"/user/Login",
    element: <LoginForm/>,
  },
  {
    path:"/user/registration",
    element: <Registration/>
  },
  {
    path:"/user/select",
    element: <Userselect/>
  },
  {
    path:"/user/Admin",
    element:<LoginAdmin/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
