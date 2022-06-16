import React from 'react';

export const Field = ({ label, className, children }) => (
  <div className={`form-field${className ? ` ${className}` : ''}`}>
    <label className="form-label">{label}</label>
    {children}
  </div>
);
