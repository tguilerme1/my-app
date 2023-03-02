
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import FullWidthText from './components/FullWidthText/FullWidthText';
import Slider from './components/Carousel/Carousel';

import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

import Servicios from './components/Servicios/Servicios'
import AlwaysOpenExample from './components/Accordion/Accordion'



class App extends Component {
  render()  {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>

         <NavBar/>
         <h1>Materiales para la industria del Envase</h1>

         <Slider id='inicio'/>  

         <FullWidthText id='nosotros'/>

         <Servicios/>

         <Contacto />
        
         <Footer/>

        </p>
        
      </header>
    </div>
  );
}
}
export default App;
