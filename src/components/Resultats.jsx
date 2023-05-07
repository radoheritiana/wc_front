

const Resultats = ({predictions, additionnal_info}) => {
    return (
        <section id='result'>
                <h3>Voici la prédiction de votre rêve</h3>
                <p>{predictions}</p>
                <h3>Nous vous proposons les contenus suivant basé sur la prédiction ci-dessus : </h3>
                <div className='additional-info-container'>
                    {additionnal_info.map((info, index) => {
                        if(info.type === 'book') {
                        return (
                            <article key={index} className='additional-info'>
                                <h4>{info.type}</h4>
                                <div>
                                    <p class='additional-info-title'>{info.title}</p>
                                    <a href={"http://google.com?search=" + info.title} className="button">Consulter</a>
                                </div>
                            </article>
                        );
                        }else if(info.type === 'video') {
                            return (
                                <article key={index} className='additional-info'>
                                    <h4>{info.type}</h4>
                                    <div>
                                        <p class='additional-info-title'>{info.title}</p>
                                        <img src={info.thumbnail} alt={info.title}/>
                                        <a href={"http://" + info.link} className="button">Consulter</a>
                                    </div>
                                </article>
                            );
                        }
                        return null;
                    })}
                </div>
            </section>
    );
}

export default Resultats;