import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import { Button } from 'react-bootstrap';
import Header from "./header";

function NavBar() {
    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(true);
        setShowMore(!showMore);
    };
    return (
        <>
        <Header />
        <section class="container2">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col50">
                        <div class="mb-1 mb-lg-0 text-center text-lg-start">
                            <img src="images/Signature-R-RVB.png" alt="logo" />
                            <br/>
                            <br/>
                            <p class="lead fw-normal text-muted mb-5"><strong>PIÈCES AUTO PREMIUM</strong> garantit 
                                aux professionnels de l’automobile le choix et la disponibilité 
                                d’une très large gamme de pièces auto pour toutes les marques européennes, 
                                permettant ainsi une remise en circulation rapide du parc automobile.
                            </p>
                            <div class="d-flex flex-column flex-lg-row align-items-center">
                                <a href="#" class="btn1">Devis pieces auto</a>
                                <a href="#" class="btn2">Diagnostic auto</a>
                            </div>
                        </div>
                    </div>
                    <div class="col50">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img class="d-block w-100" src="images/pièces-détachées.jpg" alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="images/valise-diagnostic-auto-multimarque.jpg" alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                <img class="d-block w-100" src="images/Diagnostique.jpg.avif" alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-4 bg-soft-warning">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg mb-4 mb-lg-0 d-flex flex-center">
                        <img src="images/feb.png" height={"38"}></img>
                    </div>
                    <div class="col-sm-6 col-lg mb-4 mb-lg-0 d-flex flex-center">
                        <img src="images/bosch.png" height={"38"}></img>
                    </div>
                    <div class="col-sm-6 col-lg mb-3 mb-lg-0 d-flex flex-center">
                        <img src="images/behr.png" height={"38"}></img>
                    </div>
                    <div class="col-sm-6 col-lg mb-4 mb-lg-0 d-flex flex-center">
                        <img src="images/sach.png" height={"38"}></img>
                    </div>
                    <div class="col-sm-6 col-lg mb-4 mb-lg-0 d-flex flex-center">
                        <img src="images/hella.png" height={"38"}></img>
                    </div>
                    <div class="col-sm-6 col-lg mb-4 mb-lg-0 d-flex flex-center">
                        <img src="images/vemo.png" height={"38"}></img>
                    </div>
                </div>
            </div>
        </section>
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
        
        <section class="apropos" id="apropos">
            <div class="row">
                <div class="col50">
                    <h2 class="titre-texte"><span>A</span> Propos De Nous</h2>
                    <p>
                    Notre mission est d’apporter aux automobilistes des pièces d’origine 
                    venant du marché européen qui leur assurent sécurité et fiabilité pour 
                    leurs trajets quotidiens, ainsi que la réduction significative du nombre 
                    de pannes de leurs voitures. Cette approche permet à PIÈCES AUTO PREMIUM 
                    de préserver le budget annuel de leurs clients affecté à la réparation et 
                    l’entretien de leurs voitures. Nous avons pour but d’acheminer des pièces de 
                    qualité conformes et fiables de grandes marques européennes avec comme objectif 
                    de garantir la provenance d’origine.
                    Nous luttons activement contre la vente des pièces automobiles 
                    issue de la contrefaçon dont les pièces ont une durée de vie limitée et 
                    conduisent les automobilistes à se rendre régulièrement chez leurs mécaniciens 
                    entraînant des coûts répétitifs exorbitants

                    </p> <br/>
                    <p>
                    Pour avoir de plus amples informations sur nos activités, n’hésitez pas à contacter un de nos commerciaux
                    qui se fera un plaisir de répondre à toutes vos questions. Il y a plusieurs façons de formuler votre 
                    demande de devis, dans tous les cas, pensez à avoir la carte grise du véhicule à 
                    portée de main.Vous rendre à la rubrique «DEVIS», remplir le formulaire de demande 
                    de devis et nous l’envoyer. Nous vous contacterons le plus rapidement possible pour 
                    vous communiquer la disponibilité des pièces, ainsi que leurs coûts.
                    </p>

                </div>
                <div class="col50">
                    <div class="img">
                        <img alt="content" class="object-cover object-center h-full w-full" src="images/Pieces-auto.jpg" />
                    </div>
                </div>
            </div>
        </section>
        <section class="expert" id="expert">
            <div class="titre">
                <h2 class="titre-texte"><span>N</span>os <span>S</span>ervices</h2>
                <p class="titre2 text-dark">PIÈCES AUTO PREMIUM garantit aux professionnels de 
                    l’automobile le choix et la disponibilité d’une 
                    très large gamme de pièces auto pour toutes les marques 
                    européennes, permettant ainsi une remise en circulation rapide du parc automobile.</p>
            </div>
            <div class="col-md-12 row row-cols-1 row-cols-lg-12 align-items-stretch g-4 py-5">
                <div class="col-md-6">
                    <div class="card3 card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Pieces detachees</h3>
                            <p class="flex text-light align-items-center">
                                <strong>PIÈCES AUTO PREMIUM</strong> vous propose des pièces automobiles neuves et d’occasion d’origine. 
                                Notre société vous garantit l’origine et la qualité des pièces automobiles achetées a
                                ux tarifs les plus concurrentiels.
                            </p>
                    </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="card2 card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Diagnostic</h3>
                            <p class="flex text-light align-items-center">
                            <strong>PIÈCES AUTO PREMIUM</strong> vous propose également son service de diagnostic 
                            multimarque rapide et fiable avec du matériel et un personnel qualifié. 
                            Notre équipe mobile peut à l’issue du diagnostic de votre véhicule, vous 
                            proposer un devis des pièces défectueuses et vous accompagner jusqu’à leur remplacement. 
                            </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section class="menu" id="menu">
            <div class="titre">
                <h2 class="titre-texte"><span>C</span>atalogue <span>D</span>e <span>P</span>ieces</h2>
                <p class="flex text-dark align-items-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
            </div>
            <div class="row">
                <div class="container mt-100" style={{width : "80%"}}>                          
                    <div class="row" id="content">
                        <div class="col-md-3 col-sm-12">
                            <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                <div class="inner">
                                <div class="main-img"><img src="images/10106.png" alt="Category" /></div>
                                <div class="thumblist"><img src="images/plaquette.jpg.avif" alt="Category" /></div>
                                </div></a>
                            <div class="dropdown card-body text-center">
                                <h4 class="card-title">Disque frein</h4>
                                <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">Action</a></li>
                                    <li><a class="dropdown-item">Another action</a></li>
                                    <li><a class="dropdown-item">Something else here</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                <div class="inner">
                                <div class="main-img"><img src="images/huile-synthetique-minerale-moteur_33099-1065.jpg.avif" alt="Category" /></div>
                                <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                </div></a>
                            <div class="dropdown card-body text-center">
                                <h4 class="card-title">Huile</h4>
                                <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">Action</a></li>
                                    <li><a class="dropdown-item">Another action</a></li>
                                    <li><a class="dropdown-item">Something else here</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                <div class="inner">
                                <div class="main-img"><img src="images/filtre-huile-voiture-vecteur-pour-moteur-realiste-du-papier-jaune_272963-112.jpg.avif" alt="Category" /></div>
                                <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                </div></a>
                            <div class="dropdown card-body text-center">
                                <h4 class="card-title">Filtre</h4>
                                <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">Action</a></li>
                                    <li><a class="dropdown-item">Another action</a></li>
                                    <li><a class="dropdown-item">Something else here</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12">
                            <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                <div class="inner">
                                <div class="main-img"><img src="images/moteur2.png" alt="Category" /></div>
                                <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" />
                                </div>
                                </div></a>
                            <div class="dropdown card-body text-center">
                                <h4 class="card-title">Moteur</h4>
                                <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item">Action</a></li>
                                    <li><a class="dropdown-item">Another action</a></li>
                                    <li><a class="dropdown-item">Something else here</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-100" style={{width : "80%"}}>    
                    <div>
                        {showMore ? (                        
                            <div class="row" id="content">
                                {<div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/allumage.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Allumage</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>}
                                {<div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/suspension.jpg.avif" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Suspension</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>}
                                {<div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/amortisseur-realiste_1284-10875.jpg.avif" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Amortissement</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>}
                                {<div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/courroie.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-titl">Courroie</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>}
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/radiateur.jpg.avif" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Refroidissement</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/chauffage.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Chauffage</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/10101.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Join de Culasse</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/10101.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Echappement</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/10101.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Interieur</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/10101.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Alimentation</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/10101.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" /></div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Direction</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-12">
                                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                        <div class="inner">
                                        <div class="main-img"><img src="images/10101.png" alt="Category" /></div>
                                        <div class="thumblist"><img src="images/10106.png" alt="Category" /><img src="images/10108.png" alt="Category" />
                                        </div>
                                        </div></a>
                                    <div class="dropdown card-body text-center">
                                        <h4 class="card-title">Embrayage</h4>
                                        <p class="text-muted">A partir de Xof ...</p><a class="btn btn-primary dropdown-toggle btn-sm" data-bs-toggle="dropdown" data-abc="true">View Products</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item">Action</a></li>
                                            <li><a class="dropdown-item">Another action</a></li>
                                            <li><a class="dropdown-item">Something else here</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                    <Button href="#menu" onClick={handleShowMoreClick}>Afficher moins</Button>
                                </div>
                            </div>
                        ) : (
                            <Button onClick={handleShowMoreClick}>Afficher plus</Button>
                        )}
                    </div>
                </div>
            </div>
        </section> */}
        <div>
            <section class="contact" id="contact">
                <div class="titre noir">
                    <h2 class="titre-text"><span>C</span>ontact</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div class="contactform">
                    <h3>Envoyer un message</h3>
                    <div class="inputboite">
                        <input type="text" placeholder="Nom" />
                    </div>
                    <div class="inputboite">
                        <input type="text" placeholder="email" />
                    </div>
                    <div class="inputboite">
                        <textarea placeholder="message"></textarea>
                    </div>
                    <div class="inputboite">
                        <input type="submit" value="envoyer" />
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
export default NavBar;