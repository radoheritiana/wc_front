import React, {useEffect, useRef} from 'react';


const Iir = () => {

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
            document.querySelector("#recherche").classList.remove("display-none");
            document.querySelector("#recherche").classList.add("animate__animated", "animate__slideInLeft");
            document.querySelector("#img-recherche").classList.remove("display-none");
            document.querySelector("#img-recherche").classList.add("animate__animated", "animate__slideInRight");
        }

    }
    
    return (
        <main className='iir' ref={parentRef}>
            <h1 className='animate__animated animate__slideInLeft'>Institut International des Rêves (IIR) </h1>
            <article>
                <div className='animate__animated animate__slideInRight'>
                    <h2>Qui sommes-nous ? </h2>
                    <p>Au fil des ans, l'Institut national de rêve qui recherche ce qui concerne les rêves a réalisé de nombreuses découvertes dans le domaine de la recherche sur les rêves. L'une des plus remarquables est la découverte de la signification des rêves lucides.
                        Les rêves lucides sont des rêves dans lesquels la personne qui rêve est consciente qu'elle rêve et peut ion de problèmes chez les personnes qui les pratiquaient régulièrement.</p>
                </div>
                <img src="/assets/about_iir.png"  className='animate__animated animate__slideInLeft' alt="research-lab" />
            </article>
            <article  className='animate__animated animate__slideInRight'>
                <img src="/assets/about_iir3.jpg" alt="sleeping-woman" className='animate__animated animate__slideInRight'  />
                <div className='animate__animated animate__slideInLeft'>
                    <h2>Que faisons-nous ? </h2>
                    <p>L'Institut national de rêve travaille également avec des scientifiques, des psychologues et des psychiatres pour comprendre comment les rêves peuvent être utilisés dans la thérapie. Par exemple, l'interprétation des rêves peut aider à comprendre les pensées et les émotions profondes des patients. Cela peut être utile dans le traitement des traumatismes et d'autres problèmes de santé mentale.Par exemple, les personnes atteintes de dépression peuvent avoir des rêves plus négatifs et moins de rêves heureux.</p>
                </div>
                </article>

            <article>
                <div className='display-none' id='recherche'>
                    <h2>Nos recherches</h2>
                    <p>La recherche sur les rêves est un domaine en constante évolution. Les scientifiques ont découvert que les rêves ont une fonction importante dans le traitement de l'information. Pendant le sommeil, le cerveau traite les informations de la journée et les incorpore dans notre mémoire à long terme. Les rêves sont donc essentiels pour la consolidation de la mémoire.
                        La recherche sur les rêves a également montré que les rêves peuvent nous aider à résoudre les problèmes. Les rêves peuvent nous offrir des perspectives nouvelles et inattendues sur les situations difficiles de la vie. Les rêves créatifs peuvent également nous aider à trouver des solutions à des problèmes professionnels ou personnels.
                        Les rêves lucides sont des rêves dans lesquels la personne qui rêve est consciente qu'elle rêve et peut ion de problèmes chez les personnes qui les pratiquaient régulièrement.</p>
                </div>
                <img src="/assets/about_iir2.png" id="img-recherche" alt="working-coder" className='display-none' />
            </article>
        </main>
    )
}

export default Iir