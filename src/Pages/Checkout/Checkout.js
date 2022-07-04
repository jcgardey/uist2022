import React from 'react';
import { useForm } from 'react-hook-form';
import { Payment } from './Payment';
import { Shipping } from './Shipping';

export const Checkout = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-50">
            <h2>Datos de env&iacute;o</h2>
            <Shipping register={register} errors={errors} />
          </div>
          <div className="col-40">
            <Payment register={register} errors={errors} />
          </div>
        </div>
      </form>
    </>
  );
};

