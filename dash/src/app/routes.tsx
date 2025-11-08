
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Programs from '@/pages/Programs';
import ProgramDetail from '@/pages/ProgramDetail';
import AppLayout from '@/components/layout/AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'programs', element: <Programs /> },
      { path: 'programs/:id', element: <ProgramDetail /> },
    ],
  },
]);
