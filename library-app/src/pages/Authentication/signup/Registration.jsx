import lib from "../../../assets/lib.png";
import "./registration.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div className="wrapper_signup">
      <div className="navbar_signup">
        <div className="navbar_logo">LibraryManagementSystem</div>
      </div>
      <div className="signup_container">
        <div className="exist_user">
          <div>
            <div className="get">Get Started</div>
            <div className="redirect_login">
              Already have an account? <Link to="/user/login"> Log In</Link>
            </div>
          </div>

          <div className="signup_box">
            <form className="signup_form">
              <div className="user_name">
                <div>
                  <input type="text" placeholder="first name" />
                </div>
                <div>
                  <input type="text" placeholder="last name" />
                </div>
              </div>
              <div className="user_data">
                <input type="text" placeholder="Enrollment Number" />
              </div>
              <div className="signup_select">
                <label htmlFor="selectOption">Department:</label>
                <select name="" id="" placeholder="Department">
                  <option value="">Civil Engineering</option>
                  <option value="">Computer Science and Engineering</option>
                  <option value="">Electrical Engineering</option>
                  <option value="">Mechanical Engineering</option>
                  <option value="">
                    Electronics and Communication Engineering
                  </option>
                </select>
              </div>
              <div className="user_data">
                <input type="text" placeholder="Contact Number" />
              </div>

              <div className="user_data">
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
                <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
              </div>
            </form>
          </div>
          <div className="signup_btn">
            <button className="reg">REGISTER</button>
          </div>
        </div>
        <div className="signup-pic_container">
          <img src={lib} alt="library" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
