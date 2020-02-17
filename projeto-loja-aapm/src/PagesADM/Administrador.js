import React, { Component } from 'react';

// import { Container } from './styles';

export default class PagesADM extends Component {
    constructor(){
        super();
        this.state = {
            produtos : [],
            id: "",
            nome: "",
            valor: "" ,
            descricao: "",
            imagem: "",
            status: ""
        }
    }

    componentDidMount(){
        this.listarProdutos();
    }

    listarProdutos = () => {
        Axios.get('http://localhost:5000/api/produtos',{
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('usuario-aapm')}
        })
        .then(response => {
            this.setState({ lista: response.data })
            console.log({ lista: response.data })
        })
    }


    mudarEstadoNome = (event) => {
        this.setState({nome: event.target.value})
    }
    mudarEstadoValor = (event) => {
        this.setState({valor: event.target.value})
    }
    mudarEstadoDescricao = (event) => {
        this.setState({descricao: event.target.value})
    }
    mudarEstadoImagem = (event) => {
        this.setState({imagem: event.target.value})
    }
    mudarEstadoStatus = (event) => {
        this.setState({status: event.target.value})
    }


    efetuarCadatro = (event) =>{
        event.preventDefault();
        Axios.post("http://localhost:5000/api/cadastro",
        {
            nome: this.state.nome,
            valor: this.state.valor,
            descricao: this.state.descricao,
            imagem: this.state.imagem,
            status: this.state.status
        })
        .then(response =>)
    }
    
  render() {
    return <div />;
  }
}
