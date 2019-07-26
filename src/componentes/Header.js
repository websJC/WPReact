import React, { Component } from 'react';
import logo from '../logo.png';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar has-background-link ">
            <div className="navbar-brand">
            <a className="navbar-item" rel="noopener noreferrer" alt="websjc logo" href="https://websjc.com">
                <img src={logo} className="App-logo navbar-brand" alt="logo" width="64" height="64" />
            </a>
             </div>
             <div id="navPrincipal" className="navbar-menu">
                <div className="navbar-start">
                </div>
                <div className="navbar-end">
                <a className="navbar-item" rel="noopener noreferrer" href="https://websjc.com" target="_blank">
                        WebsJC
                    </a>          
                </div>
                </div>
        </nav>
         )
    }
}
 
export default Header;