import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';


import MiComponente from './components/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hola diane te quieres casar conmigo lo mas pronto posible desde una nueva tecnologia
        </p>
        {
          alert("Hello world")
        }
        
      </header>
     <section className="componentes">
       
       <MiComponente></MiComponente>

     </section>
    </div>
  );
}

export default App;
