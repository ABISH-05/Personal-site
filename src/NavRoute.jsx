
import Navbar from './pw/Navbar'
import Home from './pw/Home'
import About from './pw/About'
import Service from './pw/Service'
import Contact from './pw/Contact'
import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
const ScrollToSection = () => {
  const location = useLocation();

 useEffect(() => {
    const sectionId = location.pathname.substring(1);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return null;
};

const NavRoute = () => {
  return (
  
      <div>
        <Navbar/>
        <ScrollToSection />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>

  );
};

export default NavRoute;