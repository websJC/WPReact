import React, { Component } from 'react';

class Formulario extends Component {
    //crear refs

    categoriaRef = React.createRef();

    cambiarCategoria = (e) => {
        e.preventDefault();
        console.log(this.categoriaRef.current.value);
        //pasar por props
        this.props.consultarNoticias(this.categoriaRef.current.value);
    }

    render() { 
        return ( 
            <div className="column is-10 has-text-black">
            <p className="has-text-centered">Selecciona el tipo de contenido a mostrar.Por defecto Posts</p>
            <form onSubmit={this.cambiarCategoria} >
            <div className="field has-addons">
            <div className="control is-expanded">
            <div className="select is-fullwidth">
                <select ref={this.categoriaRef}>
                    <option value="posts" defaultValue>Posts</option>
                    <option value="pages" defaultValue>Páginas</option>
                </select>
                </div>
                </div>
                <div className="control">
                <input className="button is-link is-outlined" type="submit" value="Buscar"/>
                </div>
                </div>
                </form>    
                
            </div>
          
         )
    }
}
 
export default Formulario;
