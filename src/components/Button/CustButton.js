// Button.js

import React from 'react';
import'./CustButton.css';

const CustButton = ({ label, click, disable=false }) => {
  return <button className="Login-Button" onClick={click} disabled={disable}>{label}</button>;
};

export default CustButton;
