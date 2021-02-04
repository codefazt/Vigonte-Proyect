import React from 'react';

class Footer extends React.Component {

  render() { //Metodo Render es el encargao de hacer que puedas mostrar algo en ele navegador al usar Clases

    return (
      <div className="Footer">
        
        {/*<!-- ======= Footer ======= --> */}
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h3>VIGONTE</h3>
                        <p>
                        <strong>Telefono:</strong> +34 623 21 24 31<br/>
                        <strong>Whatsapp:</strong> +34 623 21 24 31<br/>
                        <strong>Correo:</strong> Direccion@vigonte.es<br/>
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Links Utiles</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Inico</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Nosotros</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Servicios</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Terminos y Condiciones</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">Politicas Privadas</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Nuestros Servicios</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">VENTA</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">ALQUILAR</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">ASESORAMIENTO FINANCIERO</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">CERTIFICADO ENERGÉTICO</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">REPORTAJE FOTOGRÁFICO</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="/#">VISITA VIRTUAL</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Unete y forma parte de algo mejor.</h4>
                        <p></p>
                        <form action="" method="post">
                        <input type="email" name="email"/><input type="submit" value="Subscribe"/>
                        </form>
                    </div>

                    </div>
                </div>
                </div>

                <div className="container d-md-flex py-4">

                <div className="mr-md-auto text-center text-md-left">
                    <div className="copyright">
                    &copy; Copyright <strong><span>CJ_Developed</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                    Diseñado por <a href="https://jcdeveloped@gmail.com/">Johan Carmino</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
        {/*<!-- End Footer --> */}
        <a href="/#" className="back-to-top"><i className="icofont-simple-up"></i></a>
        
      </div>
    )
  }
}

export default Footer;