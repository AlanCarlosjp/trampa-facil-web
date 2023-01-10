import './assets/styles/custom.scss';
import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './pages/Routes';


function App() {

  window.onload = function() {
    const element = document.querySelector('.cont') as HTMLElement;
    element.classList.add('fade-in');
  };


  return (
    <div className='cont'>
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
