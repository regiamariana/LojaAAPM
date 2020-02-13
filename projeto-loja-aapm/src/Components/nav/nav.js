import React,{ Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(){
        return(
            <section id="fundoNav">
                <header>
                    <nav>
                        <Link to="/pacotes">Pacotes</Link>
                        
                    </nav>
                </header>
            </section>
        )
    }
}