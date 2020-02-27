import React,{ Component } from "react";
import Axios from "axios";
import "../Login/login.css";

import {ParseJwt} from "../../Services/auth";

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email: "",
            senha: "",
            erro: ""
        }
    }

    
    
    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
        console.log({email: event.target.value})
    }

    mudarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
        console.log({senha: event.target.value})
    }

    // MÉTODO DE LOGIN

    efetuarLogin = (event) =>{
        event.preventDefault();

        Axios.post("http://192.168.3.230:59607/api/usuarios",{
        Email: this.state.email,
        Senha: this.state.senha
    })

    .then(data => {
        if (data.status == 200) {
            localStorage.setItem("usuario-aapm", data.data.token);

            if (ParseJwt().permissao === 'Administrador') {
                this.props.history.push('/adm')
            } else {
                this.props.history.push('/home')
            }

            console.log(ParseJwt());
        }else{
            console.log("erro - poetico")
        }
    })
    .catch(erro =>{
        this.setState({erro: "usuario ou senha inválido"});
        console.log(erro);
    })
    }

    // RENDERIZAÇÃO DO CÓDIGO
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
                
                {/* FORMULÁRIO */}
                <form onSubmit={this.efetuarLogin}>
                    <input 
                    className="input1"
                    type="email"
                    placeholder="Insira seu Email"
                    onChange={this.mudarEstadoEmail}
                    value={this.state.email}
                    />

                    <input 
                    className="input2"
                    type="password"
                    placeholder="Insira sua Senha"
                    onChange={this.mudarEstadoSenha}
                    value={this.state.senha}
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