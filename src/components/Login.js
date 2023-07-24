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
      <h2>請假登入</h2>
      {/* Add your login form here */}
      <Button label="登入" onClick={handleLogin} />
    </div>
  );
};

export default Login;
