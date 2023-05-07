import React from "react";

const Login = () => {
    return (
        <main>
            <section className="signup-container">
                <form action="">
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
                    <p><a href="">Se connecter</a></p>
                </form>
                <div className="signup-form-decoration">
                    <img src="/assets/logo/logo-full-white.png" alt="" />
                </div>
            </section>
        </main>
    );
}


export default Login;
