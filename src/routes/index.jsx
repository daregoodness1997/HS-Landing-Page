import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import MNTResgister from '../pages/MNT';
import NCTRegister from '../pages/NCT';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/mnt' element={<MNTResgister />} />
          <Route path='/nct' element={<NCTRegister />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
