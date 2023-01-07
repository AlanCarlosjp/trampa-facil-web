import './assets/styles/custom.scss';
import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './pages/Routes';


function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
