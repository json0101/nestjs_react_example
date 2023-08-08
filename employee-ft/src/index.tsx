import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './EmployeeApp';
import EmployeeApp from './EmployeeApp';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmployeeListScreen from './employee/EmployeeList.screen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "",
    element: <EmployeeApp/>,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/employee-list',
        element: <EmployeeListScreen/>,
      },
    ],
  },
]);

root.render(
  <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="us">
    <RouterProvider router={router}/>
  </LocalizationProvider>
  
);
