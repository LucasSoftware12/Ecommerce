import React from 'react';
import { Routes,Route } from 'react-router';
import {Login} from './pages/Login';
import { Register } from './pages/Register';
import Dashboard from './pages/Dashboard';


export const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Agrega más rutas aquí si necesitas */}
      </Routes>
    
  );
};

export default App;