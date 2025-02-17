import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';

// Define the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} >
      <Route path='' element={<HomePage />} />

      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

// Render the application directly with the router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
