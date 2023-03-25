import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';



function Formulaire() {
    const history = useHistory();
    const [userType, setUserType] = useState('');
    const [piece, setPiece] = useState('');
    const [ref, setRef] = useState('');
    const [vin, setVin] = useState('');
    const [marque, setMarque] = useState('');
    const [model, setModel] = useState('');
    const [annee, setAnnee] = useState('');
    const [carburant, setCarburant] = useState('');
    const [telephone, setTelephone] = useState('');
    const [image, setImage] =useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSelectChange = (event) => {
        setUserType(event.target.value);
      };
    const handleModelSubmit = (event) => {
        event.preventDefault();
        const serviceId = 'service_3r3sctu';
        const templateId = 'template_412pc8o';
        const userId = '9JEDgP2zfjGmPW_Ln';
        
        emailjs.send(serviceId, templateId, {
        piece,
        ref,
        vin,
        marque,
        model,
        annee,
        carburant,
        telephone
        }, userId)
        .then((response) => {
            setSuccessMessage('votre message a bien été envoyé.');
            setVin('');
            setRef('');
            setMarque('');
            setModel('');
            setAnnee('');
            setCarburant('');
            setTelephone('');
            history.push("/#about");
        }, (error) => {
            setErrorMessage('votre message n\'a  été envoyé');
        });

        axios.post('/valide-form.php', { vin, marque, model, annee, carburant, telephone })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    // const handleFileUpload = (event) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       const base64Image = reader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    //       setImage(base64Image);
    //     };
    //     reader.readAsDataURL(event.target.files[0]);
    //   };

    const handleCarteSubmit = (event) => {
        event.preventDefault();
        const serviceId = 'service_bhnzfjl';
        const templateId = 'template_p67v723';
        const userId = 'iNedNg0KiP8dNgXv9';
        const handleFileUpload = (event) => {
            const reader = new FileReader();
            reader.onload = () => {
              const base64Image = reader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
              setImage(base64Image);
            };
            reader.readAsDataURL(event.target.files[0]);
          };


        emailjs.send(serviceId, templateId, {
        vin,
        image,
        telephone
        }, userId)
        .then((response) => {
            setSuccessMessage('votre message a bien été envoyé.');
            setVin('');
            setImage();
            setTelephone('');
            history.push("/#about");
        }, (error) => {
            setErrorMessage('votre message n\'a  été envoyé');
        });

        axios.post('/valide-form.php', { vin, marque, model })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

    };
    return(
        <>
        <header id="header" class="fixed-top ">
            <div class="container d-flex align-items-center">

                <Link to="/#hero"><a class="logo me-auto"><img src="images/Logo-RVB.png" alt="" class="img-fluid" /></a></Link>

                {/* <h1 class="logo me-auto"><a><span>P</span>ieces <span>A</span>uto <span>P</span>remium</a></h1> */}

                <nav id="navbar" class="navbar">
                    <ul>
                    <li><a class="nav-link scrollto active" href="/#hero">Accueil</a></li>
                    <li><a class="nav-link scrollto" href="/#about">A Propos</a></li>
                    <li><a class="nav-link scrollto" href="/#aboutt">Services</a></li>
                    <li><a class="nav-link scrollto" href="/#contact">Contact</a></li>
                    <li><a class="getstarted scrollto" href="/#about">Commencer</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
        <div class="container5">
        <div class="nocap position-relative overflow-hidden p-3 p-md-2 m-md-2 text-center bg-light text-black">
            <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-43fw-normal">Formulaire demande de Devis</h1>
            <p class="lead fw-normal">
                Pour obtenir un rendez-vous, il suffit de Selectionner 
                le type de remplissage du Formulaire que vous souhaiter 
                faire ou nous appeler au numéro suivant : 77 628 31 31.
            </p>
            {/* <a class="btn btn-outline-secondary" href="#">Coming soon</a> */}
            <label class="lead fw-normal" htmlFor="form-heading">Selectionner le type: </label><br />
            <select class="btn btn-outline-primary text-black" id="user-type" onChange={handleSelectChange}>
                <option value="...">...</option>
                <option value="model">Par Model du Vehicule</option>
                <option value="carte">Par Carte Grise</option>
            </select>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
            {/* <Header /> */}
                <div class='container'>
                    <div class='row'>
                        {userType === 'model' && (
                            <div class="col-lg-12">
                                    <div class="col-lg-12">
                                <div class="form-heading">
                                    <span class="prg">Par Modèle</span>
                                </div>
                            </div>
                                <form onSubmit={handleModelSubmit} action="script.php" method="post" class="form-horizontal" role="form">
                                    <div class="form-group">
                                        <label for="civilite" class="col-sm-6"> pièce demandée :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={piece} onChange={(event) => setPiece(event.target.value)} class="form-control form-control-lg" rows="3" lname="civilite;" pattern=".{17}" id="civilite" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="civilite" class="col-sm-6"> Référence pièce :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={ref} onChange={(event) => setRef(event.target.value)} class="form-control form-control-lg" rows="3" lname="civilite;" pattern=".{17}" id="civilite" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="civilite" class="col-sm-6">Chassis (VIN) :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={vin} onChange={(event) => setVin(event.target.value)} class="form-control form-control-lg" rows="3" lname="civilite;" pattern=".{17}" id="civilite" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="nom" class="col-sm-6">Marque Vehicule :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={marque} onChange={(event) => setMarque(event.target.value)} class="form-control form-control-lg" name="name" id="nom" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="prenom" class="col-sm-6">Modèle et Serie (Clio, megane...) :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={model} onChange={(event) => setModel(event.target.value)} class="form-control form-control-lg" name="prenom" id="email" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="mail" class="col-sm-4">Annee :</label>
                                        <div class="col-sm-8">
                                            <input type="annee" value={annee} onChange={(event) => setAnnee(event.target.value)} class="form-control form-control-lg" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="tel" class="col-sm-6">Carburant (Essence ou Diesel :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={carburant} onChange={(event) => setCarburant(event.target.value)} class="form-control form-control-lg" name="tel" id="tel" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="mobile" class="col-sm-2">Mobile :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={telephone} onChange={(event) => setTelephone(event.target.value)} class="form-control form-control-lg" name="mobile" id="mobile" required />
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <button type="submit" class="btn btn-primary">Valider</button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {userType === 'carte' && (
                            <div class="col-lg-12">
                                <div class="col-lg-12">
                                <div class="form-heading">
                                    <span class="prg">Par Carte Grise</span>
                                </div>
                            </div> 
                                <form onSubmit={handleCarteSubmit} action="script.php" method="post" class="form-horizontal" role="form">
                                    <div class="form-group">
                                            <label for="civilite" class="col-sm-6">Chassis (VIN) :</label>
                                            <div class="col-sm-8">
                                                <input type="text" value={vin} onChange={(event) => setVin(event.target.value)} class="form-control form-control-lg" rows="3" lname="civilite;" pattern=".{17}" id="civilite" required />
                                            </div>
                                        </div>
                                    <div class="form-group2">
                                        <label class="col-lg-6" for="customFile">Photo carte grise(Recto-verso)</label>
                                        <div class="col-sm-8">
                                            <input class="form-control form-control-lg" name="image" onChange={(event) => setImage(event.target.files[0])} type="file" id="formFileMultiple" />       
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="mobile" class="col-sm-2">Mobile :</label>
                                        <div class="col-sm-8">
                                            <input type="text" value={telephone} onChange={(event) => setTelephone(event.target.value)} class="form-control form-control-lg" name="mobile" id="mobile" required />
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <button type="submit" class="btn btn-primary">Valider</button>
                                    </div>
                                </form>    
                            </div>
                        )}
                    </div>      
                {/* <div class="col-xs-12">
                    <button type="submit" class="btn btn-primary">Valider</button>
                </div> */}
            </div>
        </div>  
        </>
    );
}

export default Formulaire;