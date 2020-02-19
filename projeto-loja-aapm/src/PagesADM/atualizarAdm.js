import React, { Component } from 'react';
import Axios from "axios";
import logo from "../Assets/logoEsbocoBranco.png";
import { Link } from "react-router-dom";
import "../PagesADM/cadastroAdm.css";
// RC
// import { Container } from './styles';

export default class PagesADM extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      nome: "",
      valor: "",
      descricao: "",
      imagem: "",
      status: ""
    }
  }

  mudarEstadoNome = (event) => {
    this.setState({ nome: event.target.value })
  }
  mudarEstadoValor = (event) => {
    this.setState({ valor: event.target.value })
  }
  mudarEstadoDescricao = (event) => {
    this.setState({ descricao: event.target.value })
  }
  mudarEstadoImagem = (event) => {
    this.setState({ imagem: event.target.value })
  }
  mudarEstadoStatus = (event) => {
    this.setState({ status: event.target.value })
  }

  efetuarAtualizar = (event) => {
    event.preventDefault();
    Axios.put("http://localhost:5000/api/atualizar/" + this.state.id, {
      nome: this.state.nome,
      valor: this.state.valor,
      descricao: this.state.descricao,
      imagem: this.state.imagem,
      status: this.state.status
    })
      .then(response => this.listarProdutos())
      .catch(erro => {
        this.setState({ erro: "ops, tente novamente" });
        console.log(erro);
      })
  }

  render() {
    return (
      <section id="tudo">
        <link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow|Roboto+Condensed&display=swap" rel="stylesheet"></link>
        <header id="fundoHeader" >
          <div className="nav1">
            <img id="imagem" src={logo} />
            <nav id="header">
              <ul>
                <li id="a1"><Link to="/cadastroadm">CADASTRAR</Link></li>
                <li id="a2"><Link to="/adm">VOLTAR</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div id="corpo">
          <h1>Atualizar Produtos:</h1>
          <div id="ca-produtos">
            <form onSubmit={this.efetuarAtualizar}>
              <div id="box-nome">
                <input
                  type="text"
                  placeholder=" insira um nome"
                  onChange={this.mudarEstadoNome}
                  value={this.state.nome}
                />
              </div>

              <br />
              <div id="box-valor">
                <input
                  type="text"
                  placeholder=" insira um valor"
                  onChange={this.mudarEstadoValor}
                  value={this.state.valor}
                />
              </div>

              <br />
              <div id="box-descricao">
                <input
                  type="text"
                  placeholder=" insira uma descrição"
                  onChange={this.mudarEstadoDescricao}
                  value={this.state.descricao}
                />
              </div>

              <br />
              <div id="box-imagem">
                <input
                  type="text"
                  placeholder=" insira uma imagem"
                  onChange={this.mudarEstadoImagem}
                  value={this.state.imagem}
                />
              </div>

              <br />

              <div id="box-status">
                <input
                  type="text"
                  placeholder=" insira um status"
                  onChange={this.mudarEstadoStatus}
                  value={this.state.status}
                />
              </div>
              <br />
              <div id="botao-pai">
                <button className="botao-filho">Atualizar</button>
              </div>

            </form>
          </div>
        </div>
      </section>
    )
  }
}
