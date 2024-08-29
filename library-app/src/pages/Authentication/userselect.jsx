import React from 'react'
import './userselect.css'
import ad from '../../assets/admin.png';
import st from '../../assets/student.png';
import {Link} from 'react-dom'

const userselect = () => {
  return (
    <div className='wrapper_userselect'>
      <div className="select">
        
        <div className="select2">
          <div className="user">
            <a href="/user/Login"> <button className='bttn'>
              <img src={ad} alt="" /><h2>ADMIN</h2> as Administrator</button></a>
            
            
          </div>
          <div className="user">
            <a href="/user/Login"><button className='bttn'>
            <img src={st} alt="" /><h2>STUDENT</h2> as Student</button></a>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default userselect
