import React from 'react';
import { useForm } from 'react-hook-form';
import { DateSelects } from '../Components/DateSelects';
import { Input } from '../Components/Input';
import { RadioSet } from '../Components/RadioSet';
import { Select } from '../Components/Select';
import { range } from '../utils';

export const Pasajero = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="row">
      <div className="col-75">
        <p>Datos del pasajero</p>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-40">
              <Input
                name={'name'}
                label={'Nombre'}
                register={register}
                required={true}
                errors={errors.name}
              />
            </div>
            <div className="col-40">
              <Input
                name={'surname'}
                label={'Apellido'}
                register={register}
                required={true}
                errors={errors.surname}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-50">
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
                required={true}
                errors={errors.id_number}
              />
            </div>
            <div className="col-30">
              <Select
                name={'id_country'}
                label={'Pais de Emision'}
                register={register}
                required={true}
                options={['Argentina', 'Brasil']}
                errors={errors.id_country}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

