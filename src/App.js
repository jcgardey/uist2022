import React from 'react';
import { Input } from './Components/Input';
import './App.css';
import './Components/Form.css';
import { Select } from './Components/Select';
import { RadioSet } from './Components/RadioSet';
import { DateSelects } from './Components/DateSelects';
import { Datepicker } from './Components/Datepicker';

export const App = ({}) => (
  <div className="container">
    <div className="col-4">
      <form>
        <Input label={'Nombre'} />
        <Input label={'Apellido'} />
        <Select
          label={'Ciudad'}
          options={['La Plata', 'Buenos Aires', 'Mar del Plata']}
        />
        <RadioSet
          label={'Genero'}
          name={'genero'}
          inline={true}
          options={['Masculino', 'Femenino']}
        />
        <DateSelects label={'Fecha de Nacimiento'} name={'fecha_nacimiento'} />
        <Datepicker label={'Fecha de Inicio'} name={'inicio'} />
        <div className="form-field">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
);
