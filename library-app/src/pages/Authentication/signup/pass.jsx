import React, { useState } from 'react';

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
      />
      <button type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
  );
};

export default PasswordInput;
