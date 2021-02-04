import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TopBar from './componentes/topbar';
import Header from './componentes/header';
import Body from './componentes/body';
import Footer from './componentes/footer';


class App extends React.Component {

  incrementar = 0
  state = {

  }
  

  render() { //Metodo Render es el encargao de hacer que puedas mostrar algo en ele navegador al usar Clases

    return (
      <div>
        <TopBar/>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App;
