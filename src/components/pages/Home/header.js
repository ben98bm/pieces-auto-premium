import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';


function Header() {
return (
    <>
        {/* <header>
            <img class="logo2" src="images/Logo-RVB.png" />
            <a href="#" class="logo"><span>P</span>ieces <span>A</span>uto <span>P</span>remium</a>
            <div class="menuToggle" onclick="toggleMenu();"></div>
            <ul class="navbar">
                <li><a href="/" onclick="toggleMenu();">Accueil</a></li>
                <li><a href="#apropos" onclick="toggleMenu();">A propos</a></li>
                <li><a href="#menu" onclick="toggleMenu();">Nos Service</a></li>
                <li><a href="#contact" onclick="toggleMenu();">Contact</a></li>
                <div class="menu-toggle">
                    <i class="fa fa-bars"></i>
                </div>
            </ul>
        </header> */}

        {/* <section class="banniere" id="banniere">
            <div class="contenu">
                <h2>PIECES AUTO PREMIUM</h2>
                <p>
                PIÈCES AUTO PREMIUM est une société de droit sénégalais fondée 
                par de jeunes entrepreneurs passionnés par le secteur de l’automobile.
                </p>
                <a href="#" class="btn1">Devis pieces auto</a>
                <a href="#" class="btn2">Diagnostic auto</a>
            </div>
        </section> */}
            <header id="header" class="fixed-top ">
                <div class="container d-flex align-items-center">

                    <a class="logo me-auto"><img src="images/Logo-RVB.png" alt="" class="img-fluid" /></a>
                    {/* <h1 class="logo me-auto"><a><span>P</span>ieces <span>A</span>uto <span>P</span>remium</a></h1> */}
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Accueil</a></li>
                            <li><a class="nav-link scrollto" href="#about">A Propos</a></li>
                            <li><a class="nav-link scrollto" href="#aboutt">Services</a></li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a class="getstarted scrollto" href="#about">Commencer</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        <section id="hero" class="d-flex align-items-center">

            <div class="container">
                <div class="row">
                    <div class="logo col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="400">
                        <br/>
                        <h1><a><span>P</span>ièces <span>A</span>uto <span>P</span>rémium </a></h1>
                        <h2>
                            garantit aux professionnels de l’automobile le choix et la disponibilité 
                            d’une très large gamme de pièces auto pour toutes les marques européennes, 
                            permettant ainsi une remise en circulation rapide du parc automobile.
                        </h2>
                        <img src="images/Signature-R-RVB.png" alt="logo" />
                        <div class="d-flex flex-column flex-lg-row align-items-center">
                            <Link to="/formulaire"><a href="#" class="btn1">Devis pieces auto</a></Link>
                            <Link to="/diagnostic"><a class="btn2">Diagnostic auto</a></Link>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                        <img src="images/LOGO-APR-PRODUITS.png" class="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

        </section>
        <main id="main">
            <section id="clients" class="clients section-bg">
                <div class="container">

                    <div class="row" data-aos="zoom-in">

                    <div class="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                        <img src="images/bosch.png" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="images/valeo.png" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="images/feb.png" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="images/vemo.png" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="images/sach.png" class="img-fluid" alt="" />
                    </div>

                    {/* <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="images/hella.png" class="img-fluid" alt="" />
                    </div> */}

                    </div>

                </div>
            </section>
        

        <section id="about" class="about">

            <div class="container" data-aos="fade-up">
                <div class="row gx-0">
                <div class="section-title">
                    <h2>A Propos de Nous</h2>
                </div>
                <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="content">
                        <h3>Qui Somme Nous ?</h3>
                        <p>
                            <strong>PIÈCES AUTO PREMIUM</strong> est une société de droit sénégalais 
                            fondée par de jeunes entrepreneurs passionnés par le 
                            secteur de l’automobile.PIÈCES AUTO PREMIUM a pour but 
                            d’acheminer des pièces de qualité conformes et fiables 
                            de grandes marques européennes avec comme objectif de garantir 
                            la provenance d’origine.
                        </p>
                        {/* <div class="text-center text-lg-start">
                            <a href="#" data-bs-toggle="collapse" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                <span>Read More</span>
                            <i class="bi bi-arrow-right"></i>
                            </a>
                        </div> */}
                    </div>
                </div>

                <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                    <img src="images/S1-Enquete-exclusive-Pieces-detachees-comment-bien-les-choisir-et-eviter-les-pieges-558130.jpg" class="img-fluid" alt="" />
                </div>

                </div>
            </div>

        </section>

        </main>
        
        <section id="aboutt" class="about">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Nos Services</h2>
                </div>

                <div class="row gy-4">
                <div class="col-lg-6">
                    <h2 class="pie text-center">Vente de Pièces Auto</h2>
                    <img src="images/car-body-disassembled-and-many-vehicles-parts.jpg" class="img-fluid rounded-4 mb-4" alt="" />
                    <p class="fst">
                    <strong 
                        style={{fontWeight: "bold"}}>PIÈCES AUTO PREMIUM</strong> vous propose des pièces automobiles neuves et d’occasion 
                        d’origine. Notre société vous garantit l’origine et la qualité des pièces 
                        automobiles achetées aux tarifs les plus concurrentiels. 
                    </p>
                    <p>
                        Nous luttons activement contre la vente des pièces automobiles 
                        issue de la contrefaçon dont les pièces ont une durée de vie limitée 
                        et conduisent les automobilistes à se rendre régulièrement chez 
                        leurs mécaniciens entraînant des coûts répétitifs exorbitants
                    </p>
                </div>
                <div class="col-lg-6">
                    <div class="content ps-0 ps-lg-5">
                    <p class="fst">
                    <strong style={{fontWeight: "bold"}}>PIÈCES AUTO PREMIUM</strong> vous propose son service de diagnostic 
                        multimarque rapide et fiable par un personnel 
                        qualifié. Notre équipe mobile peut à l’issue du diagnostic, 
                        vous proposer un devis des pièces défectueuses et vous 
                        accompagner jusqu’à leur remplacement.
                    </p>
                    <ul>
                        <li><i class="bi bi-check-circle-fill"></i> Professionalisme</li>
                        <li><i class="bi bi-check-circle-fill"></i> Efficacité</li> 
                        <li><i class="bi bi-check-circle-fill"></i> Fiabilité </li>
                    </ul>
                    {/* <p>
                        Pour avoir de plus amples informations sur nos activités, 
                        n’hésitez pas à contacter un de nos commerciaux qui sefera 
                        un plaisir de répondre à toutes vos questions.
                    </p> */}

                    <br />
                    <div class="position-relative mt-4">
                    <h2>Diagnostic Auto</h2>
                        <img src="images/valise-diagnostic-auto-multimarque 2.png" class="img-fluid rounded-4" alt="dd" />
                        {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a> */}
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
    </>
    );
}

export default Header;
