import React from 'react';
import './style.css';

export default ({children}) =>(
  <div className="Message">
    {children}
    <br />
    Please try again later.
  </div>
);
