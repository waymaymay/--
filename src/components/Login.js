// Login.js

import React from 'react';
import Button from './LoginButton/Button';
import Leave from './leaveButton/leave';
// import imgs from './imgs/login-image.png';

const Login = () => {
  const handleLogin = () => {
    // Add login logic here
    console.log('Login clicked!');
  };

  return (
    <div className="login-container">
        <div className="left-section">
            <div className='logintop'>請假登入</div>
            {/* Add login form here */}
            <div className='login-group'>
                <Button label="登入" onClick={handleLogin} />
                <Leave label="離開" onClick={handleLogin} />
            </div>
            
        </div>
        
        <div className="right-section">
             {/* Content for the right section */}
            <img src='images/login-image.png' width="700vmin" height="700vmin" alt='picture'/>

        </div>            
    </div>
  );
};

export default Login;
