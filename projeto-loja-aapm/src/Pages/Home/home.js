import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Home/home.css'
import Axios from "axios";
import logo from "../../Assets/logoEsbocoBranco.png"


export default class Home extends Component {
    render() {

        return (
            <section id="fundoHome">
                <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow|Roboto+Condensed&display=swap" rel="stylesheet"></link>
                <header id="fundoHeader" >
                    {/* INICIO HEADER */}
                    <div className="nav1">
                        <img id="imagem" src={logo} />
                        <nav id="header">
                            <ul>
                                <li id="a1"><Link to="/produtos">PRODUTOS</Link></li>
                                <li id="a2"><Link to="/">LOGOUT</Link></li>

                            </ul>
                        </nav>
                    </div>
                    {/* FIM HEADER */}
                </header>
                <section id="corpoHome">
                    {/* INICIO BODY */}
                    <div id="imagemPosicao2">
                        <div id="imagemEmSi2">

                        </div>
                    </div>

                    <section id="texto">
                        <h1>
                            Sobre a AAPM
                    </h1>
                        <p>
                            A AAPM – Associação de Alunos, Ex-alunos, Pais e Mestres da Escola SENAI DE INFORMÁTICA é uma entidade sem fins lucrativos e com objetivos sociais e educativos. Para realizar estes objetivos a AAPM se propõe a mobilizar inúmeros recursos, disponibilizados por seus membros, para auxiliar a Escola, promovendo condições que principalmente permitam a melhoria do ensino, a assistência aos alunos e a programação de atividades culturais e de lazer.

                    </p>
                        {/* alt z para quebrar texto */}
                        {/* alt shift f para identar */}
                    </section>
                    {/* FIM BODY */}
                </section>

            </section>
        )
    }
}