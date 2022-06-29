import React from 'react';
import { Field } from './Field';

export const Select = ({
  name,
  label,
  disabled,
  selected,
  options,
  register,
  required,
  errors,
}) => (
  <Field label={label} errors={errors}>
    <SelectInput
      name={name}
      options={options}
      disabled={disabled}
      selected={selected}
      required={required}
      register={register}
      errors={errors}
    />
  </Field>
);

export const SelectInput = ({
  name,
  label,
  disabled,
  selected,
  options,
  required,
  register,
  errors,
}) => (
  <select
    {...register(name, { required: required || false })}
    className={`form-input${errors !== undefined ? ' error' : ''}`}
    disabled={disabled || false}
  >
    <option value="">{label || 'Seleccionar'}</option>
    {options.map((option) =>
      selected === option ? (
        <option selected key={option}>
          {option}
        </option>
      ) : (
        <option key={option}>{option}</option>
      )
    )}
  </select>
);
