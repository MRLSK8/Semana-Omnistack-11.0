import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NewIncident from './pages/NewIncident';
import Register from './pages/Register';
import Profile from './pages/Profile';
import LogIn from './pages/LogIn';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LogIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/incidents/new' element={<NewIncident />} />

      <Route path='*' element={<h1>Not found</h1>} />

      {/* 
        Example of nested routes:

        <Route path='/profile' element={<Register />}>
          <Route path='/edit' element={<EditProfile />} />
          <Route path='/changePicture' element={<changePicture />} />
        </Route> 

        PS: 
          It is required to put an component from the library "react-router-dom"
          called "Outlet" at the end of the "mother route", which is "profile" in the example above.
      */}
    </Routes>
  );
}
