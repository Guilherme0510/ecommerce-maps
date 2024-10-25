import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className=''>
      <Navbar  />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
