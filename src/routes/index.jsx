import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Admin from '../pages/Admin';
import Bands from '../pages/Admin/Bands';
import Employee from '../pages/Admin/Employee';
import Location from '../pages/Admin/Location';
import Organization from '../pages/Admin/Organization';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MNTResgister from '../pages/MNT';
import NCTRegister from '../pages/NCT';
import Overview from '../pages/Overview';
import Nursing from '../pages/Overview/Nursing';
import Treatment from '../pages/Overview/Treatment';
import PrivateOutlet from '../pages/PrivateOutlet';
import Signup from '../pages/Signup';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mnt' element={<MNTResgister />} />
        <Route path='/nct' element={<NCTRegister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/app' element={<PrivateOutlet />}>
          <Route index element={<Treatment />} />
          <Route path='/app/nursing' element={<Nursing />} />
          <Route path='/app/emergency' element={<Overview />} />
          <Route path='/app/admin/' element={<Admin />} />
          <Route path='/app/admin/bands' element={<Bands />} />
          <Route path='/app/admin/employees' element={<Employee />} />
          <Route path='/app/admin/location' element={<Location />} />
          <Route path='/app/admin/organization' element={<Organization />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
