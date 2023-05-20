import { Children, useContext, useState } from 'react';
import './App.css';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import HealthDataContext, { HealthDataContextWrapper } from './context/health-data-context';
import EditHealthData from './component/EditHealthData/EditHealthData';
import { EDIT, VIEW } from './store/store-types';
import MainComponent from './component/MainComponent/MainComponent';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './component/HomePage/HomePage';
import Header from './Header/Header';
import ViewHealthData from './component/ViewHealthData/ViewHealthData';
import RootComp from './RootComp/RootComp';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComp/>,
    children: [
      {
        path: '/',
        element: <HomePage/>  
      },
      {
        path: '/main',
        element: <MainComponent/>
      }
    ]
     }
  
]);

function App() {

  
  return (
    <HealthDataContextWrapper>
      <Header/>
    <RouterProvider router={router} />
     <MainComponent/>       
    </HealthDataContextWrapper>
 
  );
}

export default App;
