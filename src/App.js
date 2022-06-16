import React from 'react';
import { Input } from './Components/Input';
import './App.css';
import './Components/Form.css';

export const App = ({}) => (
  <div className="container">
    <form>
      <Input label={'Nombre'} />
      <Input label={'Apellido'} />
    </form>
  </div>
);

