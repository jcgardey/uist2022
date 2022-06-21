import React from 'react';
import { Field } from './Field';

export const RadioSet = ({
  name,
  label,
  options,
  required,
  register,
  errors,
  inline,
  ...props
}) => (
  <Field label={label} errors={errors}>
    {options.map((option) => (
      <label
        key={option}
        className={`radio-item ${inline ? 'inline' : 'block'}`}
      >
        <input
          type={'radio'}
          {...register(name, { required: required || false })}
          value={option}
        />
        {option}
      </label>
    ))}
  </Field>
);

