import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ReservationPage } from './pages/ReservationPage/ReservationPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/reservation',
        element: <ReservationPage />,
      },
      {
        path: '/reservation/:reservationId',
        element: <ReservationPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
