import React from 'react';

export const Field = ({ label, className, errors, children }) => (
  <div className={`form-field${className ? ` ${className}` : ''}`}>
    <label className="form-label">{label}</label>
    {children}
    {errors?.type === 'required' && (
      <span className="field-error">{label} es requerido</span>
    )}
  </div>
);

