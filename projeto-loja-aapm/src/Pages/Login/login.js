import React,{ Component } from "react";
import Axios from "axios";
import "../Login/login.css";

export default class Login extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         email: "teste@teste.com",
    //         senha: "123",
    //         erro: ""
    //     }
    // }
    
    // mudarEstadoEmail = (event) =>{
    //     this.setState({email: event.target.value})
    // }

    // mudarEstadoSenha = (event) =>{
    //     this.setState({})
    // }
    
    render(){
        
        return(
            <section id="fundologin">
                <section id="posicaoForm">
                <form>
                    <input 
                    className="input1"
                    type="text"
                    placeholder="insira seu email"
                    />

                    <input 
                    className="input2"
                    type="text"
                    placeholder="insira sua senha"
                    />

                    <button id="botones">
                            Login
                    </button>
                </form>
                </section>

                <div id="posicaoImagem">
                <div id="imagemEmSi">
                    
                </div>
                </div>
                
            </section>
        )
    }
}