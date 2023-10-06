// LoginForm.js

import React, { useState } from 'react';
import './LoginForm.css';
import CustButton from '../Button/CustButton';
import Leave from '../leaveButton/leave';
import {Alert} from 'react-bootstrap';
import { useHistory, useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert , setShowAlert]= useState(false);
  const navigate =useNavigate();

  const handleLogin = () =>{
    if (username === 'Vicky' && password === '12345'){
      navigate('/FormPage');
    } else {
      setShowAlert(true);
    }
  };
  
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return(
    <div>
      <div className='textgroup'>
        <label>帳號：</label>
        <input
          type= 'text'
          value={username}
          onChange={handleUsernameChange}/>
      </div>
      <div className='passwordgroup'>
        <label>密碼：</label>
        <input
          type='password'
          value={password}
          onChange={handlePasswordChange}/>
      </div>
 
  < CustButton label='登入' click={handleLogin}/>
  < Leave label='離開' />

{showAlert && (
  <Alert
    variant='danger'
    onclose={()=>setShowAlert(false)}
    dismissible >
    登入失敗
  </Alert>
  )}
</div>
);
};

  // const handleLogin = (e) => {
  //   // Add login logic here using 'username' and 'password'
  //   console.log(e);
  //   console.log('Username:', username);
  //   console.log('Password:', password);


//   return (
//     <div>
//       <div className='textgroup'>
//         <label>帳號：</label>
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </div>
//       <div className='passwordgroup'>
//         <label>密碼：</label>
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
      
//       <CustButton label="登入" click={handleLogin} />
//       <Leave label="離開" />
//     </div>
//   );

export default LoginForm;
