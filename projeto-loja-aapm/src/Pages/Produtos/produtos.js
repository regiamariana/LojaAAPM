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
            produtos: [
                {
                    id: 1,
                    nome: "combo 01",
                    valor: 55.00 ,
                    descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere porta lorem non pulvinar. Nulla ut libero sit amet nulla blandit faucibus. Donec eget urna lorem. Ut sagittis tortor eu porta dapibus. Duis pharetra feugiat tellus, vitae posuere augue laoreet id. Nunc congue semper massa at porttitor.",
                    imagem: "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c0b5234b4053469285dea83500d56eda_9366/Camiseta_3_Stripes_Branco_CW1203_01_laydown.jpg",
                    status: true
                },
                {
                    id: 2,
                    nome: "combo 02",
                    valor: 20.30 ,
                    descrição: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere porta lorem non pulvinar. Nulla ut libero sit amet nulla blandit faucibus. Donec eget urna lorem. Ut sagittis tortor eu porta dapibus. Duis pharetra feugiat tellus, vitae posuere augue laoreet id. Nunc congue semper massa at porttitor.",
                    imagem: "https://www.luminatibrindes.com.br/produtos-brindes/copo-planet-8801.jpg",
                    status: true
                }
            ],
            
        }
    }


    
    // componentDidMount(){
    //     this.listarProdutos();
    // }

    // listarProdutos = () => {
    //     Axios.get('http://localhost:5000/api/produtos',{
    //         headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-aapm')}
    //     })
    //     .then(response => {
    //         this.setState({ lista: response.data })
    //         console.log({ lista: response.data })
    //     })
    // }
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
                        <p id="pProduto" className="classProduto">{element.descrição}</p>
                        </section>
                        )
                    })}
                </div>
            </section>
        )
    }
}