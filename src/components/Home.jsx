import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';

/**
 * TODO : remove / before image url
 */
const Home = () => {
    /**
     * animate__animated animate__slideInRight
     */
    const parentRef = useRef();

    useEffect(() => {
        const onScroll = () => {
          const element = parentRef.current;
          const { top, bottom } = element.getBoundingClientRect();
    
            handleScroll(top);
          
        };
    
        window.addEventListener("scroll", onScroll);
    
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      }, []);

    const handleScroll = (y) => {

        if(y <= 0) {
            document.querySelector("#testimonial").classList.remove("display-none");
            document.querySelector("#testimonial").classList.add("animate__animated", "animate__slideInLeft");
        }

    }

    return (
        <main ref={parentRef}>
            <section className="landing-page">
                <article id="onirix-summary" className="summary">
                    <div className='animate__animated animate__slideInRight'>
                        <h2>Prédisez votre avenir grâce à <span>Onirix</span></h2>
                        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre
                            provisoire
                            pour
                            calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt
                            ou
                            que
                            la mise en page est achevée. Généralement, on utilise un texte en faux latin.</p>
                        <NavLink to="/prediction" className="button">Essayer</NavLink>
                        <NavLink to="/a_propos">En savoir plus</NavLink>
                    </div>
                    <video autoPlay muted loop className="landing-page-illustration animate__animated animate__slideInLeft">
                        {/* <source src='/assets/video/tunnel.mp4' type='video/mp4'></source> */}
                        <source src='assets/video/wormhole.mp4' type='video/mp4'></source>
                    </video>
                    {/* <img src="#" alt="" className="landing-page-illustration" /> */}
                </article>
                <article id="iir-summary" className="summary">
                    <img src="/assets/iir.jpg" alt="iir building" className="landing-page-illustration  animate__animated animate__slideInRight" />
                    <div className='animate__animated animate__slideInLeft'>
                        <h2>Institut International des Rêves</h2>
                        <p>
                            • Faites vivre à vos patients une expérience client structurée et personnalisée qui vous
                            démarque • Augmentez le nombre de nouveaux patients en définissant encore davantage votre image
                            de marque • Développez un examen minutieux et une présentation aux patients qui favorisent leur
                            adhésion aux traitements suggérés
                        </p>
                        <NavLink to="/iir" className="button">Voir plus</NavLink>
                    </div>
                </article>
            </section>
            <section className="display-none" id="testimonial">
                <h2 id='testimonial-title'>Ce que les gens disent de nous</h2>
                <article className="testimonial">
                    <p className="testimonial-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti
                        eveniet excepturi ipsam quam dolorem molestias ratione alias distinctio, deserunt error sunt
                        voluptates, officiis quasi earum id aspernatur consectetur quidem!</p>
                    <div><img src="/assets/man1.jpg" alt="user" /><span className="testimonial-username">John Wick</span>
                    </div>
                </article>
                <article className="testimonial">
                    <p className="testimonial-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti
                        eveniet excepturi ipsam quam dolorem molestias ratione alias distinctio, deserunt error sunt
                        voluptates, officiis quasi earum id aspernatur consectetur quidem!</p>
                    <div><img src="/assets/man2.jpg" alt="" /><span className="testimonial-username">John Wick</span></div>
                </article>
                <article className="testimonial">
                    <p className="testimonial-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, corrupti
                        eveniet excepturi ipsam quam dolorem molestias ratione alias distinctio, deserunt error sunt
                        voluptates, officiis quasi earum id aspernatur consectetur quidem!</p>
                    <div><img src="/assets/woman1.jpg" alt="" /><span className="testimonial-username">John Wick</span></div>
                </article>
                <p></p>
                <h2>Comment ça marche</h2>
                <p> &emsp; Vous pouvez naviguer sur le site et tester ses fonctionnalités sans même vous inscrire. Toutefois, nous vous recommandons de créer un compte pour bénéficier de l'accès à votre historique d'utilisation. Les utilisateurs connectés ont également accès à des fonctionnalités exclusives et des options de personnalisation. Pour vous inscrire, il vous suffit de cliquer sur le bouton "Inscription" et de remplir le formulaire. Nous espérons que vous apprécierez votre expérience sur notre site et n'hésitez pas à nous contacter si vous avez des questions ou des commentaires.</p>
            </section>
        </main>
    )
}

export default Home