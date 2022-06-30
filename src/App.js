import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Pasajero } from './Pages/Pasajero';
import { Widgets } from './Widgets';
import './App.css';
import './Components/Form.css';
import './Pages/Layout.css';

import './Pages/Pasajero.css';
import { Success } from './Pages/Success';
import { Pasaporte } from './Pages/Pasaporte';

export const App = ({}) => {
  const [title, setTitle] = useState('Default Title');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/pasajero" element={<Pasajero setTitle={setTitle} />} />
          <Route path="/pasaporte" element={<Pasaporte />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
