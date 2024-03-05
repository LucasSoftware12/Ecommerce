import React from 'react';
import { Routes,Route } from 'react-router';
import {Login} from './pages/Login';
import { Register } from './pages/Register';


export const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Agrega más rutas aquí si necesitas */}
      </Routes>
    
  );
};

export default App;