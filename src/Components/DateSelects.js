import React from 'react';
import { Field } from './Field';
import { SelectInput } from './Select';

export const DateSelects = ({
  name,
  label,
  years,
  register,
  required,
  errors,
}) => (
  <Field label={label}>
    <div className="inline-input">
      <SelectInput
        name={`${name}_dia`}
        label="Dia"
        style={{ width: '20%' }}
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
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
          '31',
        ]}
        register={register}
        required={required}
        errors={errors[`${name}_dia`]}
      />
      <SelectInput
        name={`${name}_mes`}
        label="Mes"
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
        register={register}
        required={required}
        errors={errors[`${name}_mes`]}
      />
      <SelectInput
        name={`${name}_anio`}
        label="Año"
        style={{ width: '20%' }}
        options={years}
        register={register}
        required={required}
        errors={errors[`${name}_anio`]}
      />
    </div>
  </Field>
);

