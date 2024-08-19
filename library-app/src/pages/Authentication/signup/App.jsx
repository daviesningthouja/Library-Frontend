import React from 'react'
import './App.css'
import './pass.jsx'
import lib from './assets/lib.png'

const App = () => {
  return (
    <div>
                        <div className='Nav'>
                        <div className="logo">
                          LibraryManagementSystem
                        </div>
                        </div>
                        <div className="detailphoto">
                          
                        <div className='books_entry'>
                        
                          <div>
                              <div className='get'>Get Started</div>
                              <div className='sign'>Already have an account?  <a href="">  Log In</a></div>
                              
                          </div>
          
          

                      <div className='entry'>
                        <form >
                            <div className='name'><div >
                            <input type="text" placeholder='first name' /></div>
                            <div >
                            <input type="text" placeholder='last name' />
                          
                          </div></div>
                          <div >
                            <input type="text" placeholder='Enrollment Number' />
                          </div>
                          <div >
                          <label htmlFor="selectOption">Choose Department:</label>
                            <select name="" id="" placeholder='Department'>
                              <option value="">Civil Engineering</option>
                              <option value="">Computer Science and Engineering</option>
                              <option value="">Electrical Engineering</option>
                              <option value="">Mechanical Engineering</option>
                              <option value="">Electronics and Communication Engineering</option>
                            </select>
                          </div>
                          <div >
                            <input type="text" placeholder='Contact Number' />
                          </div>
                          
                          <div>
                            <input type="password" placeholder='Password'  />
        

                               
                          </div>
                          
                        
                        
                        
                        
                        
                        </form>
                      
                      </div>
          <div className='btn'><button className='reg'>
          REGISTER
          </button>
          </div>
          
        </div>
        <div className='photo'><img src={lib} alt="library" /></div>
        </div>
        
        </div>
    
  )
}

export default App
