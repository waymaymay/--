// Button.js

import React from 'react';
import'./CustButton.css';

const CustButton = ({ label, click }) => {
  return <button className="Login-Button" onClick={click}>{label}</button>;
};

export default CustButton;
