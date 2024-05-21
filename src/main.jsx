import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'
import App from './App.jsx'
import Servicosl from './pages/Servicosl.jsx'
import Inicial from './pages/Inicial.jsx'
import SobreNos from './pages/SobreNosl.jsx'
import { Doacao } from './pages/Doacao.jsx'
import Login from './pages/Login.jsx'
import Blog from './pages/Blog.jsx'
import './pages/inicial.css'
import MeuPainellPat from './pages/MeuPainellPat.jsx'
import MeuPainellADM from './pages/MeuPainellADM.jsx'

const router = createBrowserRouter([ {
  path: '/',
  element: <Inicial />,
  errorElement: <notfoundpage/>,
},
{
  path: '/Servicosl',
  element: <Servicosl />,
},
{
  path:'/SobreNos',
  element: <SobreNos />, 
},
{
  path: '/Doacao',
  element: <Doacao/>,
},
{
  path: '/Login',
  element: <Login/>,
},
{
  path: '/Blog',
  element: <Blog/>,
},
{
  path: '/MeuPainellADM',
  element: <MeuPainellADM/>,
},
{
  path: '/MeuPainellPat',
  element: <MeuPainellPat/>,
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
