import React, { Component } from 'react';
import NavbarItself from "./NavbarItself";
import './NavbarDynamic.css';

class NavbarDynamic extends Component {
    state = {  }
    render() { 
        return (  
            <div className="navbar-dynamic-cont">
                <div className="navbar">
                    <NavbarItself/>
                </div>
                <div className="navbar-partners-cont">
                    <div className="navbar-partners">
                        <img src="https://21cineplex.com//theme/v5/assets/img/imax-menu.png" alt="imax-logo"/>
                    </div>
                    <div className="navbar-partners">
                        <img src="https://21cineplex.com//theme/v5/assets/img/dolby-menu.png" alt="dolby-logo"/>
                    </div>
                    <div className="navbar-partners">
                        <img src="https://21cineplex.com//theme/v5/assets/img/mtix-menu.png" alt="mtix-logo"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NavbarDynamic;