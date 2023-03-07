import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';


function Header() {
return (
    <>
        <header>
            <img class="logo2" src="images/Logo-RVB.png" />
            <a href="#" class="logo"><span>P</span>ieces <span>A</span>uto <span>P</span>remium</a>
            <div class="menuToggle" onclick="toggleMenu();"></div>
            <ul class="navbar">
                <li><a href="/" onclick="toggleMenu();">Accueil</a></li>
                <li><a href="#apropos" onclick="toggleMenu();">A propos</a></li>
                <li><a href="#menu" onclick="toggleMenu();">Nos Service</a></li>
                {/* <li><a href="#expert" onclick="toggleMenu();">Expert</a></li>
                <li><a href="#temoignage" onclick="toggleMenu();">Temoignage</a></li> */}
                <li><a href="#contact" onclick="toggleMenu();">Contact</a></li>
            </ul>
        </header>
    </>
    );
}

export default Header;
