import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Header from "./header";
import emailjs from "@emailjs/browser";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function NavBar() {
    const [showMore, setShowMore] = useState(false);
    const history = useHistory();

    const handleShowMoreClick = () => {
        setShowMore(true);
        setShowMore(!showMore);
    };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const serviceId = 'service_3r3sctu';
        const templateId = 'template_kppyrlg';
        const userId = '9JEDgP2zfjGmPW_Ln';

        emailjs.send(serviceId, templateId, {
        name,
        email,
        subject,
        message,
        }, userId)
        .then((response) => {
            setSuccessMessage('votre message a bien été envoyé.');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            history.push("/#about");
        }, (error) => {
            setErrorMessage('votre message n\'a pas été envoyé');
        });

        axios.post('/contact-form.php', { name, email, message, subject })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
        <Header />
        {/* <section class="expert" id="expert">
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

                        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Pieces detachees</h3>
                            <p class="flex text-light align-items-center">
                                <strong>PIÈCES AUTO PREMIUM</strong> vous propose des pièces automobiles neuves et d’occasion d’origine. 
                                Notre société vous garantit l’origine et la qualité des pièces automobiles achetées a
                                ux tarifs les plus concurrentiels.
                            </p>

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
        </section> */}
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
        <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                    <h2>Contact</h2>
                <p>
                     Pour avoir de plus amples informations sur nos activités, 
                    n’hésitez pas à contacter un de nos commerciaux qui sefera 
                    un plaisir de répondre à toutes vos questions.
                </p>
                </div>

                <div class="row">

                <div class="col-lg-5 d-flex align-items-stretch">
                    <div class="info">
                    <div class="address">
                        <i class="bi bi-geo-alt"></i>
                        <h4>Emplacement:</h4>
                        <p>
                            Villa 70, Rue 79 X 276 Cité Asecna <br /> 
                            Ouakam, Dakar Sénégal
                        </p>
                    </div>

                    <div class="email">
                        <i class="bi bi-envelope"></i>
                        <h4>Adresse Email:</h4>
                        <p>contact@piecesauto-premium.com</p>
                    </div>

                    <div class="phone">
                        <i class="bi bi-phone"></i>
                        <h4>Telephone:</h4>
                        <p>(221) 78 113 76 76, (221) 33 868 53 81</p>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3858.687829823664!2d-17.491682785158225!3d14.730232989720026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1678505409241!5m2!1sfr!2ssn" frameborder="0" style={{border:"0", width: "100%",  height: "290px"}} allowfullscreen></iframe>
                    </div>

                </div>

                <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form onSubmit={handleSubmit} id="contact-form" class="php-email-form">
                    <div class="row">
                        <div class="form-group  col-md-6">
                            <label htlmfor="name">Votre Nom</label>
                            <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} class="form-control" id="name" required />
                        </div>
                        <div class="form-group col-md-6">
                        <label htlmfor="name">Adresse Email</label>
                        <input type="email" class="form-control" value={email} onChange={(event) => setEmail(event.target.value)} name="email" id="email" required />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htlmfor="name">Objet</label>
                        <input type="text" class="form-control" value={subject} onChange={(event) => setSubject(event.target.value)} name="subject" id="subject" required />
                    </div>
                    <div class="form-group">
                        <label htlmfor="name">Message</label>
                        <textarea class="form-control" value={message} onChange={(event) => setMessage(event.target.value)} name="message" rows="10" required></textarea>
                    </div>
                    <div class="my-3">
                        {successMessage && <div class="sent-message">{successMessage}</div>}
                        {errorMessage && <div class="error-message">{errorMessage}</div>}
                    </div>
                    <div class="text-center"><button type="submit">Envoyer Votre Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
        </>
    );
}
export default NavBar;