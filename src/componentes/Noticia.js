import React from 'react';
import Interweave from 'interweave';

const Noticia = (props) => {

    // const {urlToImage, url, title, description, source} = props.noticia;
    const {fimg_url, title, link, excerpt} = props.noticia;
    const imagen = (fimg_url)
    ?
    <React.Fragment>
         <figure  src="false"className="image is-256x256">
                <img  src="false" className="is-rounded" src={fimg_url} alt={title.rendered}/>
        </figure>
    </React.Fragment>
    :
    <React.Fragment>
        <figure  src="false"className="image is-256x256">
        <img className="is-rounded" src="https://via.placeholder.com/150" alt="This is a placeHolder example"/>
        </figure>
    </React.Fragment>

    ;
    const resumen = (excerpt)
    ?
    <React.Fragment>
        <div className="content">
        <Interweave src="false" content={excerpt.rendered}/> 
        </div>
    </React.Fragment>
    :
    <React.Fragment>
        <div className="content">
        <p className="has-text-black">No hay excerpt en este contenido</p>
        </div>
    </React.Fragment>
    ;
    return (
        <div className="column animated zoomIn delay-faster is-6-desktop is-5-tablet is-10-mobile is-4-widescreen is-4-fullhd">
                
            <div className="card">
            <div className="card-header has-background-dark has-text-centered">
                <h1 className="card-header-title has-text-white animated jackInTheBox delay-1s">
                <Interweave content={title.rendered}/>
                </h1>
            </div>
            <div className="card-image">
               {imagen}
            </div>
            <br/>
            <div className="card-content has-background-light"> 
                {resumen}      
                <hr/>
            </div>
            <br/>
            <div className="card-footer">
            <a href={link} src="false" rel="noopener noreferrer" className="button is-link card-footer-item" target="_blank">Leer más</a>
            </div>
            </div>
         </div>
    );
};

export default Noticia;