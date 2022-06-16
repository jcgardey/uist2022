import React from 'react';
import { Field } from './Field';

export const RadioSet = ({ label, name, options, inline, ...props }) => (
  <Field label={label}>
    {options.map((option) => (
      <label
        key={option}
        className={`radio-item ${inline ? 'inline' : 'block'}`}
      >
        <input type={'radio'} name={name} />
        {option}
      </label>
    ))}
  </Field>
);
