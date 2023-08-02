// LoginForm.js

// import React from "react";
// import './iLoginForm.css';

// const Inputbox=({content})=>{
//     return <inputbox className='inputbox' > {content} </inputbox>;
// };

// export default Inputbox;



// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add login logic here using 'username' and 'password'
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      
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
      {/* <button type="submit">登入</button> */}
    </form>
  );
};

export default LoginForm;
