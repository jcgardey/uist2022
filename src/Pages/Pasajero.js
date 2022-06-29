import React from 'react';
import { useForm } from 'react-hook-form';
import { DateSelects } from '../Components/DateSelects';
import { Input } from '../Components/Input';
import { RadioSet } from '../Components/RadioSet';
import { Select } from '../Components/Select';
import { countries, countryNames, range } from '../utils';

export const Pasajero = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  const nameRules = {
    required: true,
    minLength: {
      value: 2,
      message: 'Debe tener entre 2 y 29 caracteres',
    },
    maxLength: {
      value: 29,
      message: 'Debe tener entre 2 y 29 caracteres',
    },
  };

  return (
    <div className="row">
      <div className="col-75">
        <p className="section-title">Datos del pasajero</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-40">
              <Input
                name={'name'}
                label={'Nombre'}
                register={register}
                rules={nameRules}
                errors={errors.name}
              />
            </div>
            <div className="col-40">
              <Input
                name={'surname'}
                label={'Apellido'}
                register={register}
                rules={nameRules}
                errors={errors.surname}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-40">
              <DateSelects
                label={'Fecha de Nacimiento'}
                name={'fecha_nacimiento'}
                years={range(1925, 2022).reverse()}
                register={register}
                required={true}
                errors={errors}
              />
            </div>
            <div className="col-40">
              <RadioSet
                label={'Sexo'}
                name={'sex'}
                inline={true}
                options={['Masculino', 'Femenino']}
                register={register}
                required={true}
                errors={errors.sex}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-30">
              <Select
                name={'id_type'}
                label={'Tipo de Documento'}
                disabled={true}
                selected={'Pasaporte'}
                register={register}
                required={true}
                options={['Pasaporte']}
              />
            </div>
            <div className="col-30">
              <Input
                name={'id_number'}
                label={'Numero de Documento'}
                register={register}
                rules={{
                  required: true,
                  pattern: {
                    value: /^(?!^0+$)[a-zA-Z0-9]{,20}$/,
                    message: 'Ingrese un numero de document valido',
                  },
                }}
                errors={errors.id_number}
              />
            </div>
            <div className="col-30">
              <Select
                name={'id_country'}
                label={'Pais de Emision'}
                register={register}
                required={true}
                options={countryNames()}
                errors={errors.id_country}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-40">
              <DateSelects
                label={'Fecha de Caducidad'}
                name={'id_due_date'}
                years={range(2022, 2026)}
                register={register}
                required={true}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-30">
              <Select
                name={'country'}
                label={'Nacionalidad'}
                register={register}
                required={true}
                options={countryNames()}
                errors={errors.country}
              />
            </div>
          </div>
          <div className="row" style={{ justifyContent: 'space-around' }}>
            <div className="col-30">
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
