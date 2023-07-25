// Login.js

import React from 'react';
import Button from './LoginButton/Button';

const Login = () => {
  const handleLogin = () => {
    // Add login logic here
    console.log('Login clicked!');
  };

  return (
    <div className="login-container">
        <div className="left-section">
            <h2>請假登入</h2>
            {/* Add login form here */}
            <Button label="登入" onClick={handleLogin} />
        </div>
        
        <div className="right-section">
             {/* Content for the right section */}
            <img src="https://assets.blog.engoo.com/wp-content/uploads/sites/3/2022/09/07094921/dayoff-1024x597.png.webp"
            width="600vmin" height="400vmin" alt='picture'/>

        </div>
            
            
            
         
    </div>
  );
};

export default Login;
