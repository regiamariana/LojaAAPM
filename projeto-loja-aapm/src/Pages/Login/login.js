import React,{ Component } from "react";
import Axios from "axios";
import "../Login/login.css";

import {ParseJwt} from "../../Services/auth";
export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email: "teste@teste.com",
            senha: "123",
            erro: ""
        }
    }
    
    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }

    mudarEstadoSenha = (event) =>{
        this.setState({})
    }

    efetuarLogin = (event) =>{
        event.preventDefault();

        Axios.post("http://localhost:5000/api/login",{
        email: this.state.email,
        senha: this.state.senha
    })

    .then(data => {
        if (data.status == 100) {
            localStorage.setItem("usuario-aapm", data.data.token);

            if (ParseJwt().permissao === 'ADM') {
                this.props.history.push('/administrador')
            } else {
                this.props.history.push('/home')
            }

            console.log(ParseJwt());
        }else{
            console.log("erro")
        }
    })
    .catch(erro =>{
        this.setState({erro: "usuario ou senha inválido"});
        console.log(erro);
    })
    }
    render(){
        
        return(
            <section id="fundologin">
                <div id="posicaoImagem">
                <div id="imagemEmSi">
                    
                </div>
                </div>
                <section id="posicaoForm">
                <div id="logoLogin">

                </div>

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

                
                
            </section>
        )
    }
}