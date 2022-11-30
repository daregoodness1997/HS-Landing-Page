import './App.css';
import MyUserProvider from './context';
import { UserContext, ObjectContext } from './context';
import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppRoutes from './routes';

function App() {
  const [state, setState] = useState({});
  return (
    <>
      <ObjectContext.Provider value={{ state, setState }}>
        <MyUserProvider>
          <AppRoutes />
        </MyUserProvider>
      </ObjectContext.Provider>
    </>
  );
}

export default App;
