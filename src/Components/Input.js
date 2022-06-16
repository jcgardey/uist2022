import React from 'react';

export const Input = ({ label, ...props }) => (
  <div className="form-field">
    <label className="form-label">{label}</label>
    <input type="text" className="form-input" {...props} />
  </div>
);

