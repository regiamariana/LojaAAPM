import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Home/home.css'
import Axios from "axios";

export default class Home extends Component {
    render() {

        return (
            <section id="fundoHome">
                <header id="fundoHeader" >
                    <div className="nav1">
                        <div id="imagemLogo"></div>
                    <nav id="header">
                    <ul>
                        <li id="a1"><Link to="/">PRODUTOS</Link></li>
                    


                    
                        <li id="a2"><Link to="/">LOGOUT</Link></li>
                    
                    </ul>
                    </nav>
                    </div>
                </header>

                <div id="imagemPosicao2">
                    <div id="imagemEmSi2">

                    </div>
                </div>

                <section id="texto">
                    <h1>
                        Sobre a AAPM
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor est nibh, nec ultrices mauris pretium nec. Ut ultrices condimentum sodales. Vivamus eros quam, accumsan ut ex sed, consequat efficitur metus. Maecenas ac leo nec ex scelerisque pellentesque. Nulla convallis massa id quam consequat, sodales tempor dolor iaculis. Nam porttitor diam lectus, eu pellentesque quam semper id. Cras volutpat laoreet tellus vitae venenatis. Maecenas pulvinar tellus eget diam volutpat tempor. Vestibulum lacinia nisi nulla, vel imperdiet sapien tincidunt nec.

                    </p>
                    {/* alt z para quebrar texto */}
                </section>


            </section>
        )
    }
}