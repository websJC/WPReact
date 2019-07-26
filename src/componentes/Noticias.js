import React, { Component } from 'react';
import Noticia from './Noticia';
class Noticias extends Component {
   
    render() { 
        return ( 
            <div className="columns is-multiline has-background-websjc is-desktop is-centered">
            
                
            {this.props.noticias.map(noticia => (

                <Noticia 
                key={noticia.id}
                noticia={noticia}
                />
              
           ))}
            
       
            </div>
            
         )
    }
}
 
export default Noticias;