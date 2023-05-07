import React from "react";
import { NavLink } from "react-router-dom/dist";

const Signup = () => {
    return (
        <main>
            <section className="signin-container">
                <form action="">
                <img class='small-screen-logo' src="/assets/logo/logo-partial.svg" alt="fdsf" hidden/>
                    <hgroup>
                        <h2>S'enregistrer</h2>
                        <p>Bienvenu sur Onyrix</p>
                    </hgroup>
                    <label htmlFor="email" hidden>Adresse email</label>
                    <input id="email" name="email" type="text" placeholder="E-mail" />
                    <label htmlFor="email" hidden>Mot de passe</label>
                    <input id="password" name="password" type="password" placeholder="Mot de passe" />
                    <label htmlFor="email" hidden>Mot de passe</label>
                    <input id="password" name="password" type="password" placeholder="Resaisissez votre mot de passe" />
                    <button className="button">S'inscrire</button>
                    <p><NavLink to="/connexion">Se connecter</NavLink></p>
                </form>
                <div className="form-decoration">
                    <img src="/assets/logo/logo-full-white.png" alt="" />
                </div>
            </section>
        </main>
    );
}


export default Signup;
