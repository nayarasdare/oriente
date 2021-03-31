import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Routes from '../src/pages/routes';
import GlobalStyle from '../src/pages/styles/global';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    <Routes />
    <GlobalStyle />
    <ToastContainer autoClose={3000}/>
    </BrowserRouter>
  );
}

export default App;
