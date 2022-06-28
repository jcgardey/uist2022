import React from 'react';
import { range } from '../utils';
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
        options={range(1, 31)}
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

