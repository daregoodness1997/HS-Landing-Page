import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
