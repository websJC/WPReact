import React, { Component } from 'react';
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import Formulario from './componentes/Formulario';


class App extends Component {
  state = {
    noticias : []
  }
  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'posts' ) => {
    let url = `Tu_Url_WordPress/wp-json/wp/v2/${categoria}`;
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        console.log(noticias);
        this.setState({
        noticias
      })
      })
  }
  render() {
    return (
    <div className="contenedor-app">
        <Header />
        <section className="hero is-info is-bold">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                    WordPress React by WebsJC
                </h1>
                
                </div>
            </div>
            </section>
        <section className="has-background-white has-text-centered has-text-black">
        <h2 className="subtitle box">
                    Mostrando contenidos de un WordPress en una webapp construida con React.
                </h2>
                <br/>
        </section>
        <section className="columns is-centered has-background-light animated zoomInDown delay-2s">
          <Formulario 
          consultarNoticias = {this.consultarNoticias}
          />
        </section>
        <br/>
        <div className="container contenedor-noticias">
        <Noticias 
        noticias = {this.state.noticias}
        />
        </div>
        
    </div>
      )
  }
}

export default App;
