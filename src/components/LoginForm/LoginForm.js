// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css';
import CustButton from '../Button/CustButton';
import Leave from '../leaveButton/leave';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    // Add login logic here using 'username' and 'password'
    console.log(e);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className='textgroup'>
        <label>帳號：</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>

      <div className='passwordgroup'>
        <label>密碼：</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      
      <CustButton label="登入" click={handleLogin} />
      <Leave label="離開" />
    </div>
  );
};

export default LoginForm;
