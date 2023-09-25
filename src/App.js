// App.js

import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FormPage from './components/InnerPage/FormPage';

function App() {
  return (
    <Router>
      <div className="App">   
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/formpage" element={<FormPage/>} />
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace/>}
          />
        </Routes>
      </div>
    </Router>      
  );
}
export default App;


