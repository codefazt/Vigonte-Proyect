import React from 'react';


class TopBar extends React.Component {

  render() { //Metodo Render es el encargao de hacer que puedas mostrar algo en ele navegador al usar Clases

    return (
      <div className="TopBar">
        <section id="topbar" className="d-none d-lg-block">
            <div className="container d-flex">
                <div className="contact-info mr-auto">
                    <i className="icofont-envelope"></i><a href="Direccion@vigonte.es">WWW.VIGONTE.ES</a>
                    <i className="icofont-phone"></i> +34 623 21 24 31
                </div>

                <div className="social-links">
                    <a href="/#" className="twitter"><i className="icofont-twitter"></i></a>
                    <a href="/#" className="facebook"><i className="icofont-facebook"></i></a>
                    <a href="/#" className="instagram"><i className="icofont-instagram"></i></a>
                    <a href="/#" className="skype"><i className="icofont-skype"></i></a>
                    <a href="/#" className="linkedin"><i className="icofont-linkedin"></i></a>
                </div>
            </div>
        </section>
        
      </div>
    )
  }
}

export default TopBar;