import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {


    return (
        <footer id="#contact">
            <article>
                <div id="logo-container">
                    <img src="/assets/logo/logo-full-white.png" alt="oniryx_logo" className="logo" />
                    <div>
                        <h3>ONYRIX</h3>
                        <p>Découvrez votre avenir à travers vos rêves avec Onyrix, l'IA divinatoire.</p>
                    </div>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li><NavLink to="/prediction">Prédiction</NavLink></li>
                        <li><NavLink to="/a_propos">À propos</NavLink></li>
                        <li><a href="/">Avis</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul className="contact-list">
                        <li><a href="tel:+261000000000"><img className="icon" src="/assets/icons/phone.png" alt=""/>+261 00 000 00</a></li>
                        <li><a href="mailto:gtsierenana@gmail.com"><img className='icon' alt="icon-footer" src="/assets/icons/mail.png" /> onixir.mail.co</a></li>
                    </ul>
                </div>
            </article>
            <hr />
            <p className="copyright">
                &copy; 2023 - Made with 🧠 by Spudster
            </p>
        </footer>
    );
}

export default Footer;