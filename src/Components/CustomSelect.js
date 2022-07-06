import React, { useEffect, useRef, useState } from 'react';
import './CustomSelect.css';

export const CustomSelect = ({ defaultValue, options }) => {
  const [value, setValue] = useState(defaultValue || '');
  const [showOptions, setShowOptions] = useState(false);

  const selectElement = useRef(null);
  const optionsElement = useRef(null);

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
    setValue(option);
    setShowOptions(false);
    selectElement.current.dispatchEvent(new Event('change'));
  };

  return (
    <div className="select-wrapper" ref={selectElement}>
      <div className="select-title form-input" onClick={toggleDisplay}>
        {value || options[0]}
      </div>
      <div
        className={`select-options${showOptions ? '' : ' collapse'}`}
        ref={optionsElement}
      >
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

