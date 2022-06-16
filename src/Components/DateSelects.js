import React from 'react';
import { Field } from './Field';
import { SelectInput } from './Select';

export const DateSelects = ({ label, name }) => (
  <Field label={label}>
    <div className="inline-input">
      <SelectInput
        name={`${name}_dia`}
        style={{ width: '25%' }}
        options={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
        ]}
      />
      <SelectInput
        name={`${name}_mes`}
        style={{ width: '40%' }}
        options={[
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ]}
      />
      <SelectInput
        name={`${name}_anio`}
        style={{ width: '25%' }}
        options={['2022', '2021', '2020', '2019']}
      />
    </div>
  </Field>
);
