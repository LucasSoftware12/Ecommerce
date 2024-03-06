import React from 'react';
import { Routes,Route } from 'react-router';
import {Login} from './pages/Login';
import { Register } from './pages/Register';
import Dashboard from './pages/Dashboard';
import {Profile} from './components/Navbar/Perfil';


export const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />

        {/* Agrega más rutas aquí si necesitas */}
      </Routes>
    
  );
};

export default App;