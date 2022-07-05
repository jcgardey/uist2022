import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../Components/Input';
import { Select } from '../Components/Select';
import { provinces } from '../utils';

export const Prestamo = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="checkout-payment container">
      <h2>Simul&aacute; tu pr&eacute;stamo en pesos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-20">
            <Select
              name={'tipo'}
              label={'Tipo de cálculo'}
              register={register}
              required={true}
              options={['Por Monto', 'Por Cuota']}
              errors={errors.tipo}
            />
          </div>
          <div className="col-30">
            <Input
              name={'monto'}
              label={'Monto del Préstamo'}
              register={register}
              rules={{ required: true }}
              errors={errors.monto}
            />
          </div>
          <div className="col-20">
            <Select
              name={'plazo'}
              label={'Plazo'}
              register={register}
              required={true}
              options={[
                '12 meses',
                '18 meses',
                '24 meses',
                '36 meses',
                '48 meses',
                '60 meses',
                '72 meses',
                '84 meses',
                '96 meses',
              ]}
              errors={errors.tipo}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-40">
            <Select
              name={'tipo_cliente'}
              label={'Tipo de cliente'}
              register={register}
              required={true}
              options={['Exclusive', 'Premium', 'Cartera General', 'Start']}
              errors={errors['tipo_cliente']}
            />
          </div>
          <div className="col-40">
            <Select
              name={'jurisdiccion'}
              label={'Jurisdicción'}
              register={register}
              required={true}
              options={provinces}
              errors={errors['jurisdiccion']}
            />
          </div>
        </div>
        <button type="submit">Simular</button>
      </form>
    </div>
  );
};
