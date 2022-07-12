import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Widgets } from '../Widgets';
import { Pasajero } from './Pasajero';
import { Pasaporte } from './Pasaporte';
import { Success } from './Success';
import { Checkout } from './Checkout/Checkout';
import { Prestamo } from './Prestamo/Prestamo';
import { RegistroUsuario } from './RegistroUsuario';

export const Pages = () => {
  const [title, setTitle] = useState('Default Title');

  useEffect(() => {
    document.title = title;
  }, [title]);

  const navigate = useNavigate();
  const onSubmit = () => navigate('/success', { replace: true });

  return (
    <Routes>
      <Route path="/widgets" element={<Widgets />} />
      <Route path="/pasajero" element={<Pasajero onSubmit={onSubmit} />} />
      <Route path="/pasaporte" element={<Pasaporte onSubmit={onSubmit} />} />
      <Route path="/checkout" element={<Checkout onSubmit={onSubmit} />} />
      <Route path="/prestamo" element={<Prestamo onSubmit={onSubmit} />} />
      <Route
        path="/registrarme"
        element={<RegistroUsuario onSubmit={onSubmit} />}
      />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
};

