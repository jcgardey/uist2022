import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioSet } from '../Components/RadioSet';
import { Select } from '../Components/Select';
import { cities, provinces } from '../utils';

export const Pasaporte = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const province = watch('provincia', 'Buenos Aires');
  const city = watch('city');

  const offices = {
    'La Plata': ['Renaper La Plata', 'Renaper ANSES City Bell'],
    'Mar del Plata': [
      'Renaper Terminal de Ómnibus Mar del Plata',
      'Renaper Terminal de Ómnibus Mar del Plata - TARDE',
    ],
  };

  return (
    <>
      <h2 className="title">Sacar turno</h2>
      <h4>Pasaporte</h4>
      <div className="col-50">
        <form>
          <div className="form-section">
            <p className="section-title">
              Eleg&iacute; la provincia, localidad y sede del tr&aacute;mite
            </p>
            <Select
              name={'provincia'}
              label={'Provincia'}
              defaultValue={'Buenos Aires'}
              register={register}
              options={provinces}
            />
            <Select
              name={'city'}
              label={'Localidad'}
              register={register}
              options={cities[province]}
            />
            <div style={{ display: city !== undefined }}>
              <RadioSet
                label={''}
                name={'oficina'}
                inline={false}
                options={offices[city] || []}
                register={register}
                required={true}
                errors={errors.oficina}
              />
            </div>
          </div>
          <div className="form-section">
            <p className="section-title">
              Eleg&iacute; una fecha para el turno
            </p>
            <RadioSet
              label={''}
              name={'fecha'}
              inline={false}
              options={[
                'Lun. 1 de agosto',
                'Mar. 2 de agosto',
                'Mie. 3 de agosto',
                'Jue. 4 de agosto',
                'Vie. 5 de agosto',
              ]}
              register={register}
              required={true}
              errors={errors.fecha}
            />
          </div>
          <div className="form-section">
            <p className="section-title">
              Eleg&iacute; un horario de atenci&oacute;n
            </p>
            <RadioSet
              label={''}
              name={'hora'}
              inline={false}
              options={[
                '11:15',
                '11:25',
                '11:35',
                '11:45',
                '11:55',
                '12:05',
                '12:15',
                '12:25',
                '12:35',
              ]}
              register={register}
              required={true}
              errors={errors.hora}
            />
          </div>
          <button type="submit">Confirmar</button>
        </form>
      </div>
    </>
  );
};
