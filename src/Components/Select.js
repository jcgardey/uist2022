import React from 'react';
import { Field } from './Field';

export const Select = ({
  name,
  label,
  options,
  register,
  required,
  errors,
}) => (
  <Field label={label} errors={errors}>
    <SelectInput
      name={name}
      options={options}
      required={required}
      register={register}
      errors={errors}
    />
  </Field>
);

export const SelectInput = ({
  name,
  label,
  options,
  required,
  register,
  errors,
  ...props
}) => (
  <select
    {...register(name, { required: required || false })}
    className={`form-input${errors !== undefined ? ' error' : ''}`}
    {...props}
  >
    <option value="">{label || 'Seleccionar'}</option>
    {options.map((option) => (
      <option key={option}>{option}</option>
    ))}
  </select>
);

