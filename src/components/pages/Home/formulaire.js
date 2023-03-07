import React from "react";
import Header from "./header";


function fomrulaire() {
    return(
        <>
        <div class="container5">
            <Header />
            <form class="form-horizontal" role="form">
                <div class='container'>
                    <div class='row'>
                        <div class="col-lg-12">
                            <div class="form-heading">
                                <span class="prg">Your Information contact</span>
                            </div>
                        </div>
                    </div>
                    <div class='row'>
                        <div class="col-lg-6">
                            <form class="form-horizontal" role="form">
                                <div class="form-group">
                                    <label for="civilite" class="col-sm-2">Chassis (VIN) :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" rows="3" lname="civilite;" id="civilite" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="nom" class="col-sm-2">Nom :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" name="name" id="name" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="prenom" class="col-sm-2">Prenom :</label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control form-control-lg" name="prenom" id="prenom" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="mail" class="col-sm-4">Marque de Vehicule :</label>
                                    <div class="col-sm-8">
                                        <input type="email" class="form-control form-control-lg" name="email" id="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tel" class="col-sm-6">Model et Serie (:Clio, megane...) :</label>
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
                            <div class="form-group2">
                                <label class="col-sm-6" for="customFile">Photo carte grise(Recto-verso)</label>
                                <div class="col-sm-8">
                                    <input class="form-control form-control-lg" type="file" id="formFileMultiple" multiple />       
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="adresse" class="col-sm-2">Adresse</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-lg" name="adresse" id="adresse" required />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cp" class="col-sm-2">Code Postal</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-lg" name="cp" id="cp" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="ville" class="col-sm-2">Ville</label>
                                <div class="col-sm-8">
                                    <input type="text" name="ville" class="form-control form-control-lg" id="ville" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="pays" class="col-sm-2">Pays</label>
                                <div class="col-sm-8">
                                    <input type="text" class="form-control form-control-lg" name="pays" id="pays" />
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> Option1
                                    </label>
                                </div>

                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> Option 2
                                    </label>
                                </div>
                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> Option 3
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-heading">
                                <span class="prg">Event</span>
                            </div>
                            <div>
                                <div class="form-group">
                                    <label for="programme" class="col-sm-2 control-label">Program</label>
                                    <div class="col-sm-8">
                                        <select class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="origine" class="col-sm-2 control-label">Origin</label>
                                    <div class="col-sm-8">
                                        <select class="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div class="form-heading">

                                <span class="prg">Your choice</span>
                            </div>

                            <div>

                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> studio
                                    </label>
                                </div>
                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> 1 pièce
                                    </label>
                                </div>
                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> 2 pièce
                                    </label>
                                </div>

                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> 4 pièces
                                    </label>
                                </div>
                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> 5 pièces
                                    </label>
                                </div>
                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> 6 pièces
                                    </label>
                                </div>

                                <div class="checkbox inline">
                                    <label>
                                        <input type="checkbox" value="" checked />
                                        <span class="cc"><i class="cc-icon glyphicon glyphicon-ok"></i></span> maison
                                    </label>
                                </div>

                            </div>

                        </div>

                        <div class="col-xs-12">
                            <div class="form-group">
                                <label for="comment">Your Comment:</label>
                                <textarea class="form-control" rows="5" id="comment"></textarea>
                            </div>
                        </div>

                        <div class="col-xs-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>  
        </>
    );
}

export default fomrulaire;