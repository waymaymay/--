import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { increment,decrement } from '../actions/counter';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Login() {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  return (
    <div className="login-container">
      <div className="left-section">
        <div className='logintop'>請假登入</div>
        {/* Add login form here */}
        <div className='login-group'>
          <LoginForm />
          <div>Counter from Store is :{counter}</div>
          <button onClick={() => dispatch(increment())}>增加</button>
          <button onClick={() => dispatch(decrement())}>減少</button>
        </div>
      </div>

      <div className="right-section">
        {/* Content for the right section */}
        <img src='./images/login-image.png' width="700vmin" height="700vmin" alt='login' />
      </div>
    </div>
  );
}
export default Login;
