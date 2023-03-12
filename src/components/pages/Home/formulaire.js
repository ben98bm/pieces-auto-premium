import React, {useState} from "react";
import emailjs from 'emailjs-com';
import Header from "./header";


function fomrulaire() {
    return(
        <>
        <header id="header" class="fixed-top ">
            <div class="container d-flex align-items-center">

                <a href="index.html" class="logo me-auto"><img src="images/Logo-RVB.png" alt="" class="img-fluid" /></a>

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
        <div class="container5">
            {/* <Header /> */}
            <form class="form-horizontal" role="form">
                <div class='container'>
                    <div class='row'>
                        <div class="col-lg-6">
                            <div class="form-heading">
                                <span class="prg">Par Modèle</span>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-heading">
                                <span class="prg">Par Carte Grise</span>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-lg-6">
                            <form action="script.php" method="post" class="form-horizontal" role="form">
                                <div class="form-group">
                                    <label for="civilite" class="col-sm-6">Chassis (VIN) :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" rows="3" lname="civilite;" pattern=".{17}" id="civilite" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="nom" class="col-sm-6">Marque Vehicule :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" name="name" id="nom" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="prenom" class="col-sm-6">Modèle et Serie (Clio, megane...) :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" name="prenom" id="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="mail" class="col-sm-4">Annee :</label>
                                    <div class="col-sm-8">
                                        <input type="email" class="form-control form-control-lg" name="email" id="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tel" class="col-sm-6">Carburant (Essence ou Diesel :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" name="tel" id="tel" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="mobile" class="col-sm-2">Mobile :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" name="mobile" id="mobile" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                    <label for="civilite" class="col-sm-6">Chassis (VIN) :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" rows="3" lname="civilite;" pattern=".{17}" id="civilite" required />
                                    </div>
                                </div>
                            <div class="form-group2">
                                <label class="col-sm-6" for="customFile">Photo carte grise(Recto-verso)</label>
                                <div class="col-sm-8">
                                    <input class="form-control form-control-lg" type="file" id="formFileMultiple" multiple />       
                                </div>
                            </div>
                            <div class="form-group">
                                    <label for="mobile" class="col-sm-2">Mobile :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" name="mobile" id="mobile" required />
                                    </div>
                                </div>
                        </div>
                    </div>
                    

                        <div class="col-xs-12">
                            <button type="submit" class="btn btn-primary">Valider</button>
                        </div>

                    </div>
                
            </form>
        </div>  
        </>
    );
}

export default fomrulaire;