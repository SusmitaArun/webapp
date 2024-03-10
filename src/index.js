import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DestinationsSection from './components/DestinationsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <DestinationsSection />
    <ContactForm />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

