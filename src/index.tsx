import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NavermapsProvider } from 'react-naver-maps';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RecoilRoot } from 'recoil';

import Nav from './components/Nav';
import Main from './pages/Main/Main';
import Map from './pages/Map/Map';
import Login from './pages/Login/Login';
import Mypage from 'pages/My/My';
import Token from 'pages/Login/Kakao/token/token';
import RegisterUser from 'pages/register_user/RegisterUser';
import RegisterSeller from 'pages/register_seller/RegisterSeller';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/map',
        element: <Map />,
      },
      {
        path: '/my',
        element: <Mypage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/my/oauth/kakao',
        element: <Token />,
      },
      {
        path: '/garden-register-user',
        element: <RegisterUser />,
      },
      {
        path: '/garden-register-seller',
        element: <RegisterSeller />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID!}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </NavermapsProvider>
  </RecoilRoot>,
);
