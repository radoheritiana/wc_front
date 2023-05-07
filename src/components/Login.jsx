import React from "react";
import { NavLink } from "react-router-dom/dist";

const Login = () => {
    return (
        <main>
            <section className="signin-container">
                <form action="">
                    <img class='small-screen-logo' src="/assets/logo/logo-partial.svg" alt="" hidden/>
                    <hgroup>
                        <h2>Se connecter</h2>
                        <p>Bienvenu sur Onyrix</p>
                    </hgroup>
                    <label htmlFor="email" hidden>Adresse email</label>
                    <input id="email" name="email" type="text" placeholder="E-mail" />
                    <label htmlFor="email" hidden>Mot de passe</label>
                    <input id="password" name="password" type="password" placeholder="Mot de passe" />
                    <button className="button">Se connecter</button>
                    <p><NavLink to="/inscription">Créer un compte</NavLink></p>
                </form>
                <div className="form-decoration">
                    <img src="/assets/logo/logo-full-white.png" alt="" />
                </div>
            </section>
        </main>
    );
}


export default Login;
