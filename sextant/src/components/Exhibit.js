import React from 'react';
import '../styles/exhibit.css';
const Exhibit = ({ title, children }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
};

export default Exhibit;
