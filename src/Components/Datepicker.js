import React, { useEffect } from 'react';
import { Field } from './Field';
var SalsaCalendar = require('../../node_modules/salsa-calendar/build/SalsaCalendar.min.js');
import '../../node_modules/salsa-calendar/build/SalsaCalendar.min.css';

export const Datepicker = ({ label, name, ...props }) => {
  useEffect(() => {
    new SalsaCalendar({
      inputId: name,
      lang: 'en',
      dateFormats: { en: '%d/%m/%Y' },
    });
  }, []);

  return (
    <Field label={label}>
      <input type="text" id={name} className="form-input" />
    </Field>
  );
};
