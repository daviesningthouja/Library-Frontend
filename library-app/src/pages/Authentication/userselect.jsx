import React from 'react'
import './userselect.css'
import {Link} from 'react-dom'

const userselect = () => {
  return (
    <div>
      <div className="select">
        
        <div className="select2">
          <div className="user">
            <a href=""> <button className='bttn'>Log In as Administrator</button></a>
            
            
          </div>
          <div className="user">
            <a href="/user/Login"><button className='bttn'>Log In as Student</button></a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default userselect
