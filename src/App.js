import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {

  return (
    <div className=''>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
