import React, { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import './CustomSelect.css';
import { Field } from './Field';

const CustomSelect = ({ label, value, onChange, options, style }) => {
  //const [value, setValue] = useState(defaultValue || '');
  const [showOptions, setShowOptions] = useState(false);

  const selectElement = useRef(null);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (
        e.target == selectElement.current ||
        selectElement.current.contains(e.target)
      ) {
        return;
      }
      setShowOptions(false);
    });
  }, []);

  const toggleDisplay = () => {
    setShowOptions(!showOptions);
    if (showOptions) selectElement.current.dispatchEvent(new Event('open'));
  };

  const changeOption = (option) => {
    //setValue(option);
    onChange({ target: { value: option } });
    setShowOptions(false);
    selectElement.current.dispatchEvent(new Event('change'));
  };

  return (
    <div className="select-wrapper" ref={selectElement} style={style}>
      <div className="select-title form-input" onClick={toggleDisplay}>
        {value || label || 'Seleccionar'}
      </div>
      <div className={`select-options${showOptions ? '' : ' collapse'}`}>
        {options.map((option) => (
          <div
            key={option}
            className="option"
            onClick={() => changeOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Select = ({
  name,
  label,
  defaultValue,
  errors,
  options,
  control,
  rules,
}) => (
  <Field label={label} errors={errors}>
    <SelectInput
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      options={options}
    />
  </Field>
);

export const SelectInput = ({
  name,
  label,
  defaultValue,
  errors,
  options,
  control,
  rules,
  style,
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({ field }) => (
      <CustomSelect
        label={label}
        value={field.value}
        onChange={field.onChange}
        options={options}
        style={style}
      />
    )}
  />
);

