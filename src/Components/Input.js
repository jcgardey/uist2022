import React from 'react';
import { Field } from './Field';

export const Input = ({ label, ...props }) => (
  <Field label={label}>
    <input type="text" className="form-input" {...props} />
  </Field>
);
