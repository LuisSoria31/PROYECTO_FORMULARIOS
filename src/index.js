import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './home';
import {Login} from './Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {RecuperarContraseña} from './recuperarContraseña';

//import {create-questionnaire} from './create-cuestionarie';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "/home",
    element: <Home/>,
  }, 
  {
    path: "/",
    element: <Login/>,
  }, 
  {
    path: "/recuperarContraseña",
    element: <RecuperarContraseña/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
