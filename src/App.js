import React from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
