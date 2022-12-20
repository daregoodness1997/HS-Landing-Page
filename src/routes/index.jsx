import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MNTResgister from '../pages/MNT';
import NCTRegister from '../pages/NCT';
import Overview from '../pages/Overview';
import Nursing from '../pages/Overview/Nursing';
import Treatment from '../pages/Overview/Treatment';
import PrivateOutlet from '../pages/PrivateOutlet';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mnt' element={<MNTResgister />} />
        <Route path='/nct' element={<NCTRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<PrivateOutlet />}>
          <Route index element={<Treatment />} />
          <Route path='/app/nursing' element={<Nursing />} />
          <Route path='/app/emergency' element={<Overview />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
