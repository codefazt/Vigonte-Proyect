import React from 'react';
import logo from './../img/VIGONTE.jpeg';

class Header extends React.Component {

  render() { //Metodo Render es el encargao de hacer que puedas mostrar algo en ele navegador al usar Clases

    return (
      <div className="header">
        <header id="header">
            <div className="container d-flex">
                <div className="logo mr-auto">
                    <h1 className="text-light"><a href="index.html"><img src={logo} className="img-fluid" alt="Logo Vigonte"/> Vigonte</a></h1>
                    {/* 
                    <!-- Uncomment below if you prefer to use an image logo --></div>
                    <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>-->
                    */}
                </div>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                        <li className="active"><a href="#topbar">Inicio</a></li>
                        <li><a href="#footer">Acerca de</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#us">Nosotros</a></li>
                        <li><a href="#plans">Planes</a></li>
                        <li><a href="/#">Comprar</a></li>
                        <li><a href="/#">Vender</a></li>
                        {/*
                        <li className="drop-down"><a href="/#">Drop Down</a>
                            <ul>
                            <li><a href="/#">Drop Down 1</a></li>
                            <li className="drop-down"><a href="/#">Drop Down 2</a>
                                <ul>
                                <li><a href="/#">Deep Drop Down 1</a></li>
                                <li><a href="/#">Deep Drop Down 2</a></li>
                                <li><a href="/#">Deep Drop Down 3</a></li>
                                <li><a href="/#">Deep Drop Down 4</a></li>
                                <li><a href="/#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="/#">Drop Down 3</a></li>
                            <li><a href="/#">Drop Down 4</a></li>
                            <li><a href="/#">Drop Down 5</a></li>
                            </ul>
                        </li>
                        */}
                    </ul>
                </nav>
            </div>
        </header>
      </div>
    )
  }
}

export default Header;