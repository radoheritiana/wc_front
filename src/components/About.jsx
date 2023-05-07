import React, {useEffect, useRef} from 'react';

const About = () => {


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
            document.querySelector("#fiable").classList.remove("display-none");
            document.querySelector("#fiable").classList.add("animate__animated", "animate__slideInLeft");
            document.querySelector("#img-fiable").classList.remove("display-none");
            document.querySelector("#img-fiable").classList.add("animate__animated", "animate__slideInRight");
        }

    }

    return (
        <main className='about' ref={parentRef}>
            <section>
                <h1>A propos d'Onirix</h1>
                <article className='info info-left animate__animated animate__slideInRight'>
                    <div>
                        <h2>Comment fonctionne l'algorithme ? </h2>
                        <p>L'algorithme de prédiction des rêves est basé sur l'analyse de données massives et utilise des techniques avancées de Deep Learning pour détecter des modèles dans les rêves des utilisateurs. L'IA est capable d'extraire des informations clés à partir des rêves, comme les émotions, les thèmes récurrents et les symboles, qui sont ensuite utilisés pour générer des prédictions sur l'avenir. Ces prédictions peuvent concerner des événements spécifiques, des tendances générales ou même des comportements individuels.</p>
                    </div>
                    <img src="/assets/abstract_patterns/ap2.png" alt="sdfds" />
                </article>
                <article className='info info-right animate__animated animate__slideInLeft'>
                    <img src="/assets/abstract_patterns/ap3.png" alt="cx" />
                    <div>
                        <h2>Les préoccupations éthiques et la confidentialité des données
                        </h2>
                        <p>Bien que l'IA de prédiction des rêves présente de nombreuses applications potentielles, elle soulève également des préoccupations éthiques et de confidentialité des données. En utilisant les rêves des utilisateurs pour générer des prédictions, cette technologie peut collecter des données sensibles sur la santé mentale, les croyances religieuses et les orientations sexuelles. Il est donc crucial de mettre en place des mesures de sécurité et de protection des données pour garantir que ces informations ne soient pas utilisées de manière abusive ou divulguées sans autorisation.
                        </p>
                    </div>
                </article>
                <article className='info info-left animate__animated animate__slideInRight'>
                    <div>
                        <h2>Les perspectives d'avenir de l'IA de prédiction des rêves
                        </h2>
                        <p>Malgré les préoccupations éthiques et de confidentialité des données, l'IA de prédiction des rêves est une technologie en pleine expansion avec de nombreuses applications potentielles dans des domaines tels que la médecine, les affaires et les loisirs. À l'avenir, il est possible que nous voyions une utilisation accrue de cette technologie et son intégration dans nos vies quotidiennes.</p>
                    </div>
                    <img src="/assets/abstract_patterns/ap4.png" alt="sdjfjkd" />
                </article>
                <article className='info info-right'>
                    <img src="/assets/abstract_patterns/ap5.png" id="img-fiable" className='display-none' alt="sdfsd" />
                    <div className='display-none' id="fiable">
                        <h2>Fiabilité du prédiction</h2>
                        <p>Bien que l'IA soit capable de prédire l'avenir en utilisant des rêves, la fiabilité de ces prédictions est encore incertaine. Les rêves sont souvent difficiles à interpréter, même pour les experts en psychologie, et peuvent varier considérablement d'une personne à l'autre. De plus, l'avenir est souvent imprévisible et peut être influencé par de nombreux facteurs différents. Il est donc important de prendre ces prédictions avec précaution et de les considérer comme des hypothèses plutôt que des faits.</p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default About