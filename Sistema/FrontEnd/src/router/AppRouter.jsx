import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { Course } from '../pages/Course';
import { Home } from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        index: true,
        element: <Home />,
      },
      {
        path: 'curso/:id',
        element: <Course />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
