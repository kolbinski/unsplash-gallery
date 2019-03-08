import React from 'react';
import './style.css';

export default ({children}) =>(
  <div className="Loader">
    {children}
    <br />
    Please try again later.
  </div>
);
