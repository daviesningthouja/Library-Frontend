import React from 'react'
import './loginAdmin.css'
import { Link } from 'react-router-dom'
const loginAdmin = () => {
  return (
    <div className='admin_wrapper'>
      <div className="adminlogin">
        <div className="useradmin"><input type="text" placeholder='Log In ID'/></div>
        
      <div className="useradmin">
      <input type='password' placeholder='password'/></div>  
      </div>
      
    </div>
  )
}

export default loginAdmin
