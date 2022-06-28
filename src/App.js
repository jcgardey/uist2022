import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Pasajero } from './Pages/Pasajero';
import { Widgets } from './Widgets';
import './Components/Form.css';
import './Pages/Layout.css';

export const App = ({}) => (
  <div className="container">
    <HashRouter>
      <Routes>
        <Route path="/widgets" element={<Widgets />} />
        <Route path="/pasajero" element={<Pasajero />} />
      </Routes>
    </HashRouter>
  </div>
);

