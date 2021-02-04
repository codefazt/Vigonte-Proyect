import React from 'react';
import slide2 from './../img/contenido/carrucel3.jpg';
import carrucel1 from './../img/contenido/carrucel1.jpg';
import carrucel2 from './../img/contenido/carrucel2.jpg';
import imgPlan from './../img/contenido/imgManos.jpg';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegTimesCircle } from 'react-icons/fa';

class Body extends React.Component {

  render() { //Metodo Render es el encargao de hacer que puedas mostrar algo en ele navegador al usar Clases

    return (
      <div className="Body">
        <section id="hero">
            <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                <div className="carousel-inner" role="listbox">

                    {/*<!-- Slide 1 -->*/}
                    <div className="carousel-item active" style={{backgroundImage: `url(${carrucel1})`}}>
                    <div className="container">
                        <div className="carousel-content animated fadeInUp">
                            <h2>Bienvenido a <span>VIGONTE</span> <small> (Asesores Inmobiliarios) </small></h2>
                            <p className="text-justify">Estamos para ayudarte, consulte sin compromiso cualquiera de nuestros planes.</p>
                            <div className="text-center">{/*<a href="/#" className="btn-get-started">Leer</a> */}</div>
                        </div>
                    </div>
                    </div>

                    {/*<!-- Slide 2 -->*/}
                    <div className="carousel-item" style={{backgroundImage: `url(${slide2})`}}>
                    <div className="container">
                        <div className="carousel-content animated fadeInUp">
                        <h2>VIGONTE ASESORES INMOBILIARIOS</h2>
                            <p><b>ADIOS COMISIONES ABUSIVAS 1.500€ </b>
                            Por que gastar más dinero, pudiendo contratar un servicio de calidad y pleno asesoramiento por un precio razonable. 
                            “PLAN TU ELIGES” 
                            </p>
                        <div className="text-center">{/*<a href="/#" className="btn-get-started">Leer</a> */}</div>
                        </div>
                    </div>
                    </div>

                    {/*<!-- Slide 3 -->*/}
                    <div className="carousel-item" style={{backgroundImage: `url(${carrucel2})`}}>
                    <div className="container">
                        <div className="carousel-content animated fadeInUp">
                        <h2><b>¿NECESITAS ASESORAMIENTO?</b></h2>
                        <p>
                            Toda la información que necesites al alcance de tu mano, seas o no seas cliente de VIGONTE. 
                            “Hasta el infinito y más allá. “ Porque el asesoramiento no termina cuando has vendido tu casa, estamos contigo en todo momento.
                        </p>
                        <div className="text-center">{/*<a href="/#" className="btn-get-started">Leer</a> */}</div>
                        </div>
                    </div>
                    </div>

                </div>

                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>
                    <span className="sr-only">Anterior</span>
                </a>

                <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>
                    <span className="sr-only">Siguiente</span>
                </a>
                <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

            </div>
        </section>
        
        <main id="main">

    
        {/* <!-- ======= Cta Section ======= --> */}
        <section id="cta" className="cta">
        <div className="container">

            <div id="plans" className="row">
                <div className="col-lg-12 text-center text-lg-left">
                    <h3> <span>“PLAN TÚ ELIGES”</span></h3>
                    <p> NO TE COBRAMOS COMISIONES POR VENDER TU CASA.</p>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Servicios</th>
                                <th>PLAN 1.500 €</th>
                                <th>PLAN 799€</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Disponible en toda España</td>
                                <td><strong><span className="text-danger"><FaRegTimesCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Disponible en la comunidad de Madrid</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Visitas por un asesor profesional</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-danger"><FaRegTimesCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Propuesta segura en el primer mes</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-danger"><FaRegTimesCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Pago una vez vendido</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-danger"><FaRegTimesCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Pago fraccionado en cuotas</td>
                                <td><strong><span className="text-danger"><FaRegTimesCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Promocion en los principales portales inmobiliarios</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Experto inmobiliario a tu disposición</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Fotos profesionales para tu vivienda.</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Filtro de potenciales compradores.</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Gestion de firmas, tramites y papeleo</td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                                <td><strong><span className="text-success"><FaCheckCircle/></span></strong></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="col-lg-12 cta-btn-container text-center">
                    {/*<a className="cta-btn align-middle" href="/#">Ingreso Repido</a> */}
                </div>
            </div>

        </div>
        </section>

        {/* <!-- End Cta Section --> */}
        {/* <!-- ======= Somos Nosotros ======= --> */}

        <section id="us" className="services">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2><strong>VIGONTE</strong></h2>
                </div>

                <div className="row">
                    <div className="col-lg-12 text-justify mb-4" data-aos="fade-up" data-aos-delay="100">
                    Todos conocemos a alguien que ha vendido su piso con una inmobiliaria tradicional o incluso lo hemos experimentado de primera mano. En ocasiones la mayoría de las inmobiliarias se llevan comisiones altísimas por un trabajo que 
                    se puede realizar por mucho menos. Haciendo que esto infle el precio del inmueble hasta tal punto que no se logre vender. De esta necesidad nace VIGONTE, con una visión hacia el futuro y siempre adaptados a las necesidades de cada cliente con el Plan Tú Eliges.
                    </div> 
                    <div className="col-lg-12 text-justify mb-4" data-aos="fade-up" data-aos-delay="100">
                    Es completamente posible vender tu piso sin la ayuda de una inmobiliaria siempre que conozcas el mercado, pero esta opción va a requerir mucho de tu tiempo libre para realizar todos los tramites, gestionar llamadas, realizar documentaciones, mirar estadísticas, estar atento a las noticias de la evolución del mercado, etc. Así pues nosotros siempre recomendamos que antes de que tomes una decisión de no trabajar con un profesional, tengas presente tu jornada laboral y tu día a día, ya que muchas veces se comete este error logrando que la venta se extienda más de lo previsto y necesario. 
                    </div>
                    <div className="col-lg-12 text-justify mb-4" data-aos="fade-up" data-aos-delay="100">
                    VIGONTE y todo su equipo, te ayudara en la venta del inmueble ahorrándote todo ese tiempo y dinero, aportándote todos los servicios que ofrece cualquier otro pero con una gran diferencia. ¡SIN COMISIONES¡.
                    </div>               
                </div>
            </div>
        </section>
        {/* <!-- ======= Somos Nosotros ======= --> */}
        {/* <!-- ======= Como Funciona ======= --> */}

        <section id="services" className="services">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                <h2><strong>¿Cómo lo Hacemos?</strong></h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="icon-box" data-aos="fade-up">
                        <div className="icon"><i className="icofont-computer"></i></div>
                        <h4 className="title"><a href="/#">Primera Etapa</a></h4>
                            <p className="description text-justify">
                                Cuando el propietario se pone en contacto con nosotros, concertamos una cita para conocer físicamente las calidades del inmueble y presentarnos de manera formal. Una vez realizado este primer contacto VIGONTE se encargará de recoger el material fotográfico y vídeos del inmueble para realizar un plan de marketing individualizado
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                        <h4 className="title"><a href="/#">Segunda Etapa</a></h4>
                            <p className="description text-justify">
                                Una vez hecho esto un asesor experto realizará un informe de valoración con todos los datos obtenidos en la primera etapa, para posteriormente publicarlo en un precio competitivo de mercado en los principales portales online
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i className="icofont-earth"></i></div>
                        <h4 className="title"><a href="/#">Tercera Etapa</a></h4>
                            <p className="description text-justify">
                                Mientras nos encargamos de encontrar al comprador ideal, usted sabrá en todo momento como evoluciona el proceso de venta de su inmueble, a través de informes semanales que VIGONTE pondrá a su disposición
                            </p>
                        </div>
                    </div> 
                </div>

            </div>
        </section>

        {/* <!-- End Como Funciona Section --> */}
        {/* <!-- ======= Planes Propaganda Seguro y Confianza Section ======= --> */}
    
        <section id="planes" className="portfolio">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>TÚ <strong> ELIGES</strong></h2>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-md-6">
                        <Image src={imgPlan} fluid />
                    </div>
                    <div className="col-md-6">
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>NO TE COBRAMOS COMISIONES POR VENDER TU CASA</strong></ListGroup.Item>
                        <ListGroup.Item>
                            <strong>SOLO PAGAS SI VENDES —-1.500€ IVA INCLUIDO</strong>
                            <br/>
                            <small>Ni un céntimo más, sin letra pequeña. Y que no te cuenten cuentos.</small>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>NOS ADAPTAMOS A TUS CIRCUNSTANCIAS</strong>
                            <br/>
                            <small>
                                Porque entendemos que es nuestra labor la de estudiar las circunstancias de cada persona. DE PERSONAS A PERSONAS
                            </small>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong> ESTÁS EN LAS MEJORES MANOS.</strong> <br/>
                            <small>Cuidamos de tu propiedad como si se tratara de la Nuestra.</small>
                        </ListGroup.Item>
                    </ListGroup>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ======= Services Section ======= --> */}
    
        <section id="services" className="services">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                <h2><strong>Mira Nuestros Servicios</strong></h2>
                </div>

                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="icon-box" data-aos="fade-up">
                    <div className="icon"><i className="icofont-computer"></i></div>
                    <h4 className="title"><a href="/#">VENTA</a></h4>
                        <p className="description">
                            Somos la mejor opción con la tarifa más económica del mercado <strong>¡SIN COMISIONES!</strong>
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                    <h4 className="title"><a href="/#">ALQUILAR</a></h4>
                    <p className="description">
                        Si lo que quieres es alquilar, te ayudamos a conseguir al mejor inquilino, todo esto sin coste alguno.
                    </p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><i className="icofont-earth"></i></div>
                    <h4 className="title"><a href="/#">ASESORAMIENTO FINANCIERO</a></h4>
                    <p className="description">Pregunta sin compromiso, tenemos los mejores planes de financiación que se adaptan mejor a tus necesidades.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><i className="icofont-image"></i></div>
                    <h4 className="title"><a href="/#">CERTIFICADO ENERGÉTICO</a></h4>
                    <p className="description">¡Olvídate de trámites!, realizamos el certificado de eficiencia energética sin problema alguno.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><i className="icofont-settings"></i></div>
                    <h4 className="title"><a href="/#">REPORTAJE FOTOGRÁFICO</a></h4>
                    <p className="description">Solicita tu reportaje fotográfico con la mayor calidad para así llevar acabo la venta de tu inmueble de la mejor manera.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><i className="icofont-tasks-alt"></i></div>
                    <h4 className="title"><a href="/#">VISITA VIRTUAL</a></h4>
                    <p className="description">VIGONTE pone a tu disposición el servicio de vídeo visita para aquellas personas que no tengan tiempo de trasladarse a un inmueble, todo esto con las mejores calidades.</p>
                    </div>
                </div>
                </div>

            </div>
        </section>
        {/* <!-- End Services Section --> */}
        {/* <!-- ======= Portfolio Section ======= --> */}
    
        <section id="portfolio" className="portfolio">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Reportajes <strong>Fotográficos</strong></h2>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">Todos</li>
                        {/*
                        <li data-filter=".filter-app">Pisos Destacados</li>
                        <li data-filter=".filter-card">Economicos</li>
                        <li data-filter=".filter-web">Compartidos</li>
                        */}
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src="assets/img/pisos/interiorA1.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Destacado</h4>
                        <p>Apartamento</p>
                        */}
                        <a href="assets/img/pisos/interiorA1.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src="assets/img/pisos/interiorB1.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Compartido</h4>
                        <p>Habitacion</p>
                        */}
                        <a href="assets/img/pisos/interiorB1.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 1"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src="assets/img/pisos/interiorA2.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Destacado</h4>
                        <p>Anexo</p>
                        */}
                        <a href="assets/img/pisos/interiorA2.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src="assets/img/pisos/interiorC1.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Economico</h4>
                        <p>Apartamento</p>
                        */}
                        <a href="assets/img/pisos/interiorC1.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src="assets/img/pisos/interiorB2.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Compartido</h4>
                        <p>Anexo</p>
                        */}
                        <a href="assets/img/pisos/interiorB2.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src="assets/img/pisos/interiorA3.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Destacado</h4>
                        <p>Habitacion</p>
                        */}
                        <a href="assets/img/pisos/interiorA3.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src="assets/img/pisos/interiorC2.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Economico</h4>
                        <p>Anexo</p>
                        */}
                        <a href="assets/img/pisos/interiorC2.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src="assets/img/pisos/interiorC3.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Economico</h4>
                        <p>Apartamento</p>
                        */}
                        <a href="assets/img/pisos/interiorC3.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src="assets/img/pisos/interiorB3.jpeg" className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                        {/*
                        <h4>Compartido</h4>
                        <p>Habitacion</p>
                        */}
                        <a href="assets/img/pisos/interiorB3.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        
        {/* <!-- End Portfolio Section --> */}
        {/* <!-- ======= Our Clients Section ======= --> */}
        <section id="clients" className="clients">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>“VAYA, BUSQUE Y <strong>COMPARE</strong>”</h2>
                    <p>
                        Y como decía el anuncio de televisión “Y si encuentra algo mejor cómprelo” o en este caso contrátelo. 
                        Estamos muy seguros de lo que ofrecemos, por lo que le animamos a que 
                        compare los servicios que le ofrecemos.            
                    </p>
                </div>

                <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">

                    <div className="col-lg-12">
                        <div className="text-center">
                            <img src="assets/img/imgPublicitaria.png" className="img-fluid" alt=""/>
                        </div>
                    </div>
                    
                    

                </div>

            </div>
        </section>

  </main>
      </div>
    )
  }
}

export default Body;