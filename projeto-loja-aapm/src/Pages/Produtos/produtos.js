import React,{ Component, Image } from "react";
import { Link} from "react-router-dom";
// import { View, Image } from 'react-native';
import '../Produtos/produtos.css';
import logo from "../../Assets/logoEsbocoBranco.png"

import Axios from "axios";

export default class Produtos extends Component{
    constructor(){
        super();
        this.state = {
            produtos: []  
        }
    }


    
    componentDidMount(){
        this.listarProdutos();
    }

    listarProdutos = () => {
        Axios.get('http://192.168.5.172:59607/api/produtos',{
            
        })
        .then(response => {
            this.setState({ produtos: response.data })
            console.log({ produtos: response.data })
        })
    }
    render(){
        return(
            <section id="fundoProdutos">
            
            <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow|Roboto+Condensed&display=swap" rel="stylesheet"></link>
                <header id="fundoHeader" >
                    <div className="nav1">
                        <img id="imagem" src={logo}/>
                    <nav id="header">
                    <ul>
                        <li id="a1"><Link to="/home">HOME</Link></li>
                    


                    
                        <li id="a2"><Link to="/">LOGOUT</Link></li>
                    
                    </ul>
                    </nav>
                    </div>
                </header>

                {/* fim header */}

                {/* começo título */}

                <h1 id="h1TituloP">
                    Produtos
                </h1>

                <div id="bodyProdutos">
                    {this.state.produtos.map(element => {
                        return(
                        <section>
                        <p key={element.id} />
                        <img id="imgProduto" className="classProduto" src={element.imagem} />
                        <h1 id="h1Produto" className="classProduto">{element.nome}</h1>
                        <h2 id="h2Produto" className="classProduto">R$ {element.valor}</h2>
                        <p id="pProduto" className="classProduto">{element.descricao}</p>
                        </section>
                        )
                    })}
                </div>
            </section>
        )
    }
}