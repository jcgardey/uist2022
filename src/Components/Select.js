import React from 'react';
import { Field } from './Field';

export const Select = ({ label, options, ...props }) => (
  <Field label={label}>
    <SelectInput options={options} {...props} />
  </Field>
);

export const SelectInput = ({ options, ...props }) => (
  <select className="form-input" {...props}>
    {options.map((option) => (
      <option key={option}>{option}</option>
    ))}
  </select>
);
